import React, { Component } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import filtersOfTodoList from "../constant";
import { observer } from "mobx-react";
@observer
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyedFliterType: "All"
    };
  }
  onChangeFilterType = filterValue => {
    this.setState({
      applyedFliterType: filterValue
    });
  };
  footer = () => {
    let todoList = this.props.todoDatabase.todos;
    if (todoList.length > 0) {
      return (
        <TodoFooter
          todoDatabase={this.props.todoDatabase}
          onChangeFilterType={this.onChangeFilterType}
          applyedFliterType={this.state.applyedFliterType}
          unDoneLeft={this.props.todoDatabase.calUndoneLeft}
        />
      );
    }
  };
  render() {
    var { todoDatabase, todo } = this.props;
    let todoList = todoDatabase.todos;
    if (this.state.applyedFliterType === filtersOfTodoList.active) {
      todoList = todoList.filter(item => !item.taskStatus);
    } else if (this.state.applyedFliterType === filtersOfTodoList.completed) {
      todoList = todoList.filter(item => item.taskStatus);
    } else {
    }
    return (
      <div>
        {todoList.map(item => {
          return (
            <TodoItem
              todoDatabase={this.props.todoDatabase}
              key={item.id}
              item={item}
              onToggleTaskDone={this.props.onToggleTaskDone}
              onDeleteItem={this.props.onDeleteItem}
              onUpdateTask={this.props.onUpdateTask}
            />
          );
        })}
        {this.footer()}
      </div>
    );
  }
}
export default TodoList;
