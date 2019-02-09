import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {
      input,
      onPostTodo,
      updateInput,
      onUpdateTodo,
      onDeleteTodo,
      onInputChange,
      onCompleteTodo,
      onUpdateTodoToggle,
      onUpdateInputChange
    } = this.props;
    return (
      <Fragment>
        <h3>Redux Todo</h3>
        <div className="search">
          <input
            className="todoInput"
            type="text"
            value={input}
            onChange={onInputChange}
          />
          <button className="btns" onClick={onPostTodo}>
            작성
          </button>
        </div>
        {this.props.todo.map(item =>
          item.updateMode === false ? (
            <div
              className="todoItem"
              key={item.id}
              style={
                item.complete === false
                  ? { textDecoration: "none" }
                  : { textDecoration: "line-through", color: "#aaaaaa" }
              }
            >
              {item.text}
              <button className="btns" onClick={() => onCompleteTodo(item.id)}>
                완료
              </button>
              <button
                className="btns"
                onClick={() => onUpdateTodoToggle(item.id)}
              >
                수정
              </button>
              <button className="btns" onClick={() => onDeleteTodo(item.id)}>
                삭제
              </button>
            </div>
          ) : (
            <div key={item.id}>
              <input
                className="todoInput"
                type="text"
                value={updateInput}
                onChange={onUpdateInputChange}
              />
              <button className="btns" onClick={onUpdateTodo}>
                수정완료
              </button>
            </div>
          )
        )}
      </Fragment>
    );
  }
}
