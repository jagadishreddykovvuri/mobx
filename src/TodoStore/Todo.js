import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { computed } from "mobx";
import { action } from "mobx";
class Todo {
  store;
  id = 0;
  @observable task = "";
  @observable taskStatus;
  constructor(store, id, name, status) {
    this.store = store;
    this.id = id;
    this.task = name;
    this.taskStatus = status;
  }
  @action.bound toggle() {
    this.taskStatus = !this.taskStatus;
  }
  @action.bound onDelete() {
    console.log(1);
    this.store.todos.remove(this);
  }
  @action.bound onUpdate(task) {
    this.task = task;
  }
}
export default Todo;
