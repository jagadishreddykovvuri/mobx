import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { computed } from "mobx";
import { action } from "mobx";

@observer
class Counter extends Component {
  @observable a = 0;
  @observable b = 0;

  @computed get add() {
    console.log("adding");
    return this.a + this.b;
  }
  changea = e => {
    this.seta(e.target.value);
  };
  changeb = e => {
    this.setb(e.target.value);
  };

  @action.bound seta = e => {
    console.log(e);
    this.a = parseInt(e);
  };
  @action.bound setb = e => {
    console.log(e);
    this.b = parseInt(e);
  };
  render() {
    return (
      <div>
        <input onChange={this.changea} />
        <br />
        <input onChange={this.changeb} />
        <h1>{this.add}</h1>
      </div>
    );
  }
}
export default Counter;
