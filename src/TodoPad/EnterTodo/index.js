import React, { Component } from "react";
import "./styles.css";
import { observer } from "mobx-react";
import { action, observable } from "mobx";
@observer
class EnterTodo extends Component {
  @observable task = this.props.task;
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressEnter = event => {
    if (event.keyCode === 13) {
      //this.props.todoDatabase.addTodo(event.target.value);
      this.props.onPressEnter(event.target.value);
      this.task = "";
    }
  };
  @action.bound handleChange(e) {
    this.task = e.target.value;
  }

  render() {
    return (
      <input
        value={this.task}
        className={"inputTag " + this.props.paddinggap}
        placeholder="What needs to be Done ?"
        onChange={this.handleChange}
        onKeyDown={this.onPressEnter}
        onBlur={this.props.onBlur}
      />
    );
  }
}
export default EnterTodo;
