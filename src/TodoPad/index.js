import React, { Component } from "react";
import "./styles.css";
import EnterTodo from "./EnterTodo";
import TodoList from "./TodosList";
import { observer } from "mobx-react";
@observer
class TodoPad extends Component {
  constructor(props) {}
  render() {
    console.log(this.props.todoDatabase.todos.length);
    return (
      <div className="background">
        <div className="todo-pad">
          <h1 className="heading">Todos</h1>
          <div class="stack-shadow">
            <EnterTodo
              onPressEnter={this.props.todoDatabase.addTodo}
              todoDatabase={this.props.todoDatabase}
              task=""
            />

            <TodoList todoDatabase={this.props.todoDatabase} />
          </div>
        </div>
      </div>
    );
  }
}
export default TodoPad;
