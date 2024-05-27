import { memo, useCallback, useState } from "react"
import Create from "../create"
import TodoList from "../todo-list"
import "./Main.scss"

let initialState = {
  id: null,
  title: "Homework",
  text: "To-do list create",
  status: "Not important",
  time: "22:00"
}
// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || [])
  const [formData, setFormData] = useState(initialState)


  let getValue = useCallback((newValue) => {
    setFormData((prevValue) => ({ ...prevValue, ...newValue, }));
  }, []);
  let createTodo = useCallback((todo) => {
    const newData = [...data, todo];
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData)
    setFormData(initialState);
  }, [data])

  let deleteTodo = useCallback((id) => {
    let filterData = data?.filter((el) => el.id !== id)
    localStorage.setItem("data", JSON.stringify(filterData));
    setData(filterData)
  }, [data])

  let updateTodo = useCallback((payload) => {
    let index = data?.findIndex(el => el.id === payload.id)
    data?.splice(index, 1, payload)
    setData([...data])
    setFormData(initialState)
  }, [data])

  let updateValues = useCallback((payload) => {
    setFormData(payload)
  }, [])
  return (
    <>
      <main className="main">
        <Create
          formData={formData}
          getValue={getValue}
          createTodo={createTodo}
          updateTodo={updateTodo}
        />
        <TodoList
          data={data}
          updateValues={updateValues}
          deleteTodo={deleteTodo} />
      </main>
    </>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(Main)
