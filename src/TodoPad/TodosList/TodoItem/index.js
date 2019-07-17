import React, { Component } from "react";
import "./styles.css";
import EnterTodo from "../../EnterTodo";
import TaskItem from "./TaskItem";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoubleClick: false
    };
  }
  handleCheck = () => {
    this.props.toggleTask(this.props.item);
  };
  onDelete = () => {
    if (window.confirm("you to want delete task ? " + this.props.item.task)) {
      this.props.item.onDelete();
    }
  };
  onDoubleClick = () => {
    this.setState({
      isDoubleClick: true
    });
  };
  onUpdate = task => {
    this.props.onUpdateTask(this.props.item, task);
    this.setState({
      isDoubleClick: false
    });
  };
  handleBlur = () => {
    this.setState({
      isDoubleClick: false
    });
  };
  task = () => {
    return this.state.isDoubleClick ? (
      <EnterTodo
        onBlur={this.handleBlur}
        onPressEnter={this.onUpdate}
        task={this.props.item.task}
        paddinggap="padding-gap"
      />
    ) : (
      <p className="taskStyle" onDoubleClick={this.onDoubleClick}>
        {this.props.item.task}
      </p>
    );
  };
  render() {
    var { todoDatabase, todo } = this.props;

    return (
      <div className="todo-back">
        <TaskItem
          todo={todo}
          item={this.props.item}
          onToggleTaskDone={this.props.onToggleTaskDone}
          task={this.task}
        />

        <img
          src="assets/remove.png"
          className="removeIcon clickable"
          onClick={this.onDelete}
        />
      </div>
    );
  }
}
export default TodoItem;
