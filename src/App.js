import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FilterableProductTable from "./FilterableProductTable";
import TodoPad from "./TodoPad";
import TodoDatabase from "./TodoStore/TodoDatabase";
import todo from "./TodoStore/Todo";

import Counter from "./Counter";
var todoDatabase = new TodoDatabase();
var todor = new todo();
function App() {
  return (
    <div>
      <Counter />
      <FilterableProductTable
        products={[
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          }
        ]}
      />
      <TodoPad todoDatabase={todoDatabase} todo={todor} />
    </div>
  );
}

export default App;
