import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { computed } from "mobx";
import { action } from "mobx";
class Todo {
  id = 0;
  @observable task = "";
  @observable taskStatus;
  constructor(id, name, status) {
    this.id = id;
    this.task = name;
    this.taskStatus = status;
  }
  @action.bound toggle() {
    this.taskStatus = !this.taskStatus;
  }
}
export default Todo;
