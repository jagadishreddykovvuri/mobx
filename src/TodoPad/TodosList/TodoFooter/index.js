import React, { Component } from "react";
import "./styles.css";
import filtersOfTodoList from "../../constant";
class TodoFooter extends Component {
  handleAll = () => {
    this.props.onChangeFilterType("All");
  };
  handleActive = () => {
    this.props.onChangeFilterType("Active");
  };
  handleCompleted = () => {
    this.props.onChangeFilterType("Completed");
  };
  handleClear = () => {
    this.props.todoDatabase.onClearCompletedTask();
  };
  filterDiv = () => {
    return (
      <div className="list-loader">
        <p
          className={
            "clickable " +
            (this.props.applyedFliterType === filtersOfTodoList.all
              ? "border"
              : "")
          }
          onClick={this.handleAll}
        >
          All
        </p>
        <p
          className={
            "clickable " +
            (this.props.applyedFliterType === filtersOfTodoList.active
              ? "border"
              : "")
          }
          onClick={this.handleActive}
        >
          Active
        </p>
        <p
          className={
            "clickable " +
            (this.props.applyedFliterType === filtersOfTodoList.completed
              ? "border"
              : "")
          }
          onClick={this.handleCompleted}
        >
          Completed
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="footer-back">
        <p>{this.props.unDoneLeft + " "}item left</p>
        {this.filterDiv()}
        <p className="onhover clickable" onClick={this.handleClear}>
          Clear completed
        </p>
      </div>
    );
  }
}
export default TodoFooter;
