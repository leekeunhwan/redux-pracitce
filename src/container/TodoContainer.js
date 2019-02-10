import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoList from "../component/Todo";
import * as todoActions from "../store/modules/todo";

class TodoContainer extends Component {
  handleInputChange = e => {
    const { TodoActions } = this.props;
    TodoActions.inputChage(e.target.value);
  };

  handlePostTodo = e => {
    e.preventDefault();
    const { TodoActions, input } = this.props;
    TodoActions.postTodo(input);
    TodoActions.inputChage("");
  };

  handleUpdateTodo = id => {
    const { TodoActions, updateInput } = this.props;
    TodoActions.updateTodo(id, updateInput);
    TodoActions.udpateInputChange("");
  };

  handleDeleteTodo = id => {
    const { TodoActions } = this.props;
    TodoActions.deleteTodo(id);
  };

  handleCompleteTodo = id => {
    const { TodoActions } = this.props;
    TodoActions.completeTodo(id);
  };

  handleUpdateTodoToggle = id => {
    const { TodoActions } = this.props;
    TodoActions.updateTodoToggle(id);
  };

  handleUpdateInputChange = e => {
    const { TodoActions } = this.props;
    TodoActions.udpateInputChange(e.target.value);
  };

  render() {
    const { input, todo, updateInput } = this.props;
    return (
      <TodoList
        todo={todo}
        input={input}
        updateInput={updateInput}
        onPostTodo={this.handlePostTodo}
        onUpdateTodo={this.handleUpdateTodo}
        onDeleteTodo={this.handleDeleteTodo}
        onInputChange={this.handleInputChange}
        onCompleteTodo={this.handleCompleteTodo}
        onUpdateTodoToggle={this.handleUpdateTodoToggle}
        onUpdateInputChange={this.handleUpdateInputChange}
      />
    );
  }
}

const mapStateToProps = ({ todo }) => ({
  input: todo.input,
  updateInput: todo.updateInput,
  todo: todo.todo
});

const mapDispatchToProps = dispatch => ({
  TodoActions: bindActionCreators(todoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
