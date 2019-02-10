import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoList from "../component/Todo";
import * as waitingActions from "../store/modules/todo";

class TodoContainer extends Component {
  handleInputChange = e => {
    const { WaitingActions } = this.props;
    WaitingActions.inputChage(e.target.value);
  };

  handlePostTodo = e => {
    e.preventDefault();
    const { WaitingActions, input } = this.props;
    WaitingActions.postTodo(input);
    WaitingActions.inputChage("");
  };

  handleUpdateTodo = id => {
    const { WaitingActions, updateInput } = this.props;
    WaitingActions.updateTodo(id, updateInput);
    WaitingActions.udpateInputChange("");
  };

  handleDeleteTodo = id => {
    const { WaitingActions } = this.props;
    WaitingActions.deleteTodo(id);
  };

  handleCompleteTodo = id => {
    const { WaitingActions } = this.props;
    WaitingActions.completeTodo(id);
  };

  handleUpdateTodoToggle = id => {
    const { WaitingActions } = this.props;
    WaitingActions.updateTodoToggle(id);
  };

  handleUpdateInputChange = e => {
    const { WaitingActions } = this.props;
    WaitingActions.udpateInputChange(e.target.value);
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
  WaitingActions: bindActionCreators(waitingActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
