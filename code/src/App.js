import React, { Component } from "react";
import Display from "./Display";
import AddInfo from "./AddInfo";
import DisplayForm from "./DisplayForm";
import StylingBootstrap from "./StylingBootstrap";
import CardTemplate from "./CardTemplate";

class App extends Component {
  state = {
    firstName: "alina",
    age: 20,
    designation: "developer",
    isMarried: true,
    userData: [],
  };

  handleUpdate = () => {
    // this is referring to App
    // to update a state
    this.setState({
      designation: "manager",
      age: 30,
      isMarried: false,
    });
  };

  addData = (user) => {
    console.log(user); //object
    let userData = [...this.state.userData, user]; //storing object inside an array

    this.setState({
      userData,
    });
  };

  // whenver state is update, re-rendering happens
  render() {
    return (
      // this is referring to App
      <>
        <Display data={this.state} />
        <button onClick={this.handleUpdate}>Update</button>
        <AddInfo addData={this.addData} />
        <DisplayForm userData={this.state.userData} />
        <StylingBootstrap />
        <CardTemplate />
      </>
    );
  }
}

export default App;

{
  /* <button onclick="add()">Submit</button> 

function add() {} */
}

// reconcilation process
// diffing algo
