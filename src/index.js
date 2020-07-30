import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");

ReactDom.render(
    <div>
        <ToDoList></ToDoList>
    </div>,
    destination
);