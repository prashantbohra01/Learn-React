// var React = require("react");
import React from "react";

// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";


let myName = "Prashant Bohra" 
let curDate = new Date().toLocaleDateString();
let curTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
 <h1>Hello Guys</h1>
 <p>yo</p>
 <ol>
  <li>Stranger things</li>
  <li>Bleach</li>
  <li>Money Heist</li>
 </ol>

<h2>Hello, my name is {myName}.</h2>
<p>My lucky number is {Math.random()}. </p> 

<p>Current date is = {curDate}</p>
<p>Current time is = {curTime}</p>
 </>,
  document.getElementById("root")
);