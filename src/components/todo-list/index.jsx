import { memo } from "react";
import PropTypes from "prop-types";
import "./TodoList.scss";

// eslint-disable-next-line react-refresh/only-export-components
const TodoList = ({ data,deleteTodo,updateValues }) => {
  const sec = new Date().getSeconds();
  const min = new Date().getMinutes();
  const hour = new Date().getHours();
  
  const tableTr = data?.map((td) => (
    <tr key={td.id}>
      <td>{`${sec} : ${min} : ${hour}`}</td>
      <td>{td.title.charAt(0).toUpperCase() + td.title.slice(1).toLowerCase()}</td>
      <td>{td.text}</td>
      <td>{td.time}</td>
      <td>{td.status}</td>
      <td>
        <button onClick={()=> updateValues(td)}>Edit</button>
      </td>
      <td>
        <button onClick={()=> deleteTodo(td.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <section className="todo">
        <div className="todo__wrapper">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Name</th>
                <th>Text</th>
                <th>Time</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableTr}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  updateValues: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(TodoList);
