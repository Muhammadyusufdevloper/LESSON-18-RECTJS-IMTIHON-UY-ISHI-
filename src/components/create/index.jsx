import { memo } from "react";
import "./Create.scss";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
const Create = ({ getValue, updateTodo, createTodo, formData }) => {
  // const handleCreateTodo = (e) => {
  //   e.preventDefault();
  //   if (formData.id) {
  //     updateTodo(formData);
  //   } else {
  //     // let todo = {
  //     //   id: new Date().getTime(),  
  //     //   title: formData.title,
  //     //   text: formData.text,
  //     //   time: formData.time,
  //     //   status: formData.status,
  //     // };
  //     let date = new Date()
  //     formData.id = date.getTime()
  //     createTodo(formData);
  //   }
  // };

  const handleCreateTodo = (e) => {
    e.preventDefault();
    let date = new Date();
    let todo = {
      id: formData.id || date.getTime(),
      title: formData.title,
      text: formData.text,
      time: formData.time,
      status: formData.status,
    };
    if (formData.id) {
      updateTodo(todo);
    } else {
      createTodo(todo);
    }
  };
  return (
    <>
      <section className="create">
        <div className="create__wrapper">
          <form onSubmit={handleCreateTodo} className="create__form">
            <div className="create__form__input-wrapper">
              <div className="create__form__card">
                <label htmlFor="name">Name <span>*</span></label>
                <input
                  value={formData.title}
                  onChange={(e) => getValue({ title: e.target.value })}
                  required
                  id="name"
                  type="text"
                  placeholder="Name enter"
                />
              </div>
              <div className="create__form__card">
                <label htmlFor="text">Text <span>*</span></label>
                <input
                  value={formData.text}
                  onChange={(e) => getValue({ text: e.target.value })}
                  required
                  id="text"
                  type="text"
                  placeholder="Text enter"
                />
              </div>
              <div className="create__form__card">
                <label htmlFor="time">Time <span>*</span></label>
                <input
                  value={formData.time}
                  onChange={(e) => getValue({ time: e.target.value })}
                  id="time"
                  type="text"
                  placeholder="Time enter"
                />
              </div>
              <div className="create__form__card">
                <label htmlFor="status">Status <span>*</span></label>
                <select
                  value={formData.status}
                  onChange={(e) => getValue({ status: e.target.value })}
                  required
                >
                  <option hidden disabled value="">Status</option>
                  <option value="Very important">Very important</option>
                  <option value="Not important">Not important</option>
                  <option value="Compulsory">Compulsory</option>
                  <option value="Middle condition">Middle condition</option>
                </select>
              </div>
            </div>
            <button>{formData.id ? "save" : "create"}</button>
          </form>
        </div>
      </section>
    </>
  );
};

Create.propTypes = {
  getValue: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Create);
