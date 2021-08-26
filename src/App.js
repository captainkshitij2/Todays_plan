import "./styles.css";
import React from "react";
import { Component } from "react";
import Plan from "./Plan";
import "../node_modules/react-bootstrap";
import { useState } from "react";

// class App extends Component {
//   state = {
//     items:[],
//     text : ''
//   }
//   handleChange=e=>{
//     text.setState({text:e.target.value})
//   }
const App = () => {
  const [inputList, setInputlist] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputlist(event.target.value);
    console.log(inputList);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputlist("");
  };

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto  ">
            <h1 className="text-center">todays plan</h1>
            <input
              type="text"
              className="form-control"
              placeholder="write here"
              value={inputList}
              onChange={itemEvent}
            />

            <div className="col-2">
              {" "}
              <button className="btn-success" onClick={listOfItems}>
                {" "}
                add{" "}
              </button>
            </div>

            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                <Plan />
                {/* <li> {inputList}</li>  */}
                {Items.map((item, index, array) => {
                  return <li> {item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
