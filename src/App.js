import "./styles.css";
import React from 'react'
import {Component} from 'react'
import Plan from "./Plan"
import '../node_modules/react-bootstrap'
import {useState} from 'react'


// class App extends Component {
//   state = {
//     items:[],
//     text : ''
//   }
//   handleChange=e=>{
//     text.setState({text:e.target.value})
//   }
  const App =()=> {
const [inputList,setInputlist]=useState("");
const [Items,setItems]=useState([]);
  
const itemEvent=(event)=>{
  setInputlist(event.target.value);
};

const listOfItems=()=>{
setItems((oldItems)=>{
  return [...oldItems,inputList]; 
});
setInputlist('');
};
  
  return (
    <>

    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto  ">
          <h1 className="text-center">todays plan</h1>
          <input type="text" className="form-control" placeholder="write here" 
          value={inputList}
           onChange={itemEvent} 
          />

          <div className="col-2"> <button className="btn-success" onClick={listOfItems}> add </button>
          {/* <button variant="success">Success</button> */}
            </div>

            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
               
              <Plan/>
              {/* <li> {inputList}</li>  */}
             { Items.map((itemval)=>{
                return <li>  {inputList}</li>;
               
              })}           
              </ul>
              </div>
          
          
          
          </div>
          </div>
     </div>
    </>
  );
}

  export default App;

// import React, { Component } from 'react'
// import Plan from './Plan'
// // import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// class App extends Component {
//   state = {
//     items: [],
//     text: ""
//   }
//   handleChange = e => {
//     this.setState({ text: e.target.value })
//   }
//   handleAdd = e => {
//     if (this.state.text !== "") {
//       const items = [...this.state.items, this.state.text];
//       this.setState({ items: items, text: "" });
//     }
//   }
//   handleDelete = id => {
//     console.log("Deleted", id);
//     const Olditems = [...this.state.items]
//     console.log("Olditems", Olditems);
//     const items = Olditems.filter((element, i) => {
//       return i !== id
//     })
//     console.log("Newitems", items);
//     this.setState({ items: items });
//   }
//   render() {
//     return (
//       <div className="container-fluid my-5">
//         <div className="row">
//           <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
//             <h2 className="text-center"> Today's Plan </h2>
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-9">
//                   <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange} />
//                 </div>
//                 <div className="col-2">
//                   <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
//                 </div>
//               </div>
//               <div className="conatiner">
//                 <ul className="list-unstyled row m-5">
//                   {
//                     this.state.items.map((value, i) => {
//                       return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
//                     })
//                   }
//                 </ul>
//                 {/* <ul className="list-unstyled row m-5">
//                   <Plan p={this.state.items} sendData={this.handleDelete} />
//                 </ul> */}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;