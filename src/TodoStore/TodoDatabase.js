import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { computed } from "mobx";
import { action } from "mobx";
import Todo from "./Todo";
class TodoDatabase {
  id = 0;
  @observable todos = [];
  @observable applyedFliterType = "All";
  @action.bound addTodo(task) {
    this.id = this.id + 1;
    this.todos.push(new Todo(this, this.id, task, false));
    console.log(this.todos);
  }
  @action.bound onClearCompletedTask() {
    this.todos = this.todos.filter(todo => !todo.taskStatus);
  }
  @computed get calUndoneLeft() {
    return this.todos.filter(item => !item.taskStatus).length;
  }
  @action.bound onChangeFilterType(value) {
    this.applyedFliterType = value;
  }
}
export default TodoDatabase;
