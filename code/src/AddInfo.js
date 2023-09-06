import React, { Component } from "react";
import "./AddInfo.css";

class AddInfo extends Component {
  state = {
    name: "",
    contact: "",
    email: "",
    error: {
      nameError: "",
      ageError: "",
      emailError: "",
    },
    formValid: false,
  };

  //   whenver an event fire, event object(e) is created is available as a parameter
  handleChange = (e) => {
    console.log(e); //event objects
    console.log(e.target.id); //
    console.log(e.target.value); //

    //add validation
    // this is referring to AddInfo
    if (e.target.id == "name") {
      this.validateName(e.target.value);
    } else if (e.target.id == "contact") {
      this.validateContact(e.target.value);
    } else if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }

    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  };

  validateName = (name) => {
    let formValid = this.state.formValid;
    let nameError = this.state.error.nameError;

    if (name.trim() === "") {
      formValid = false;
      nameError = "This is required.";
    } else if (name.trim().length < 4) {
      formValid = false;
      nameError = "This is invalid name.";
    } else {
      formValid = true;
      nameError = "";
    }

    // whenever updating object and arrays in a state, we need spread operator to create a copy of prev data
    //property shorthand
    this.setState({
      name,
      formValid,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };

  validateContact = (contact) => {
    let formValid = this.state.formValid;
    let contactError = this.state.error.contactError;

    if (contact.trim() === "") {
      formValid = false;
      contactError = "This is required";
    } else if (contact.trim().length != 10) {
      formValid = false;
      contactError = "This is invalid.";
    } else {
      formValid = true;
      contactError = "";
    }

    this.setState({
      contact,
      formValid,
      error: { ...this.state.error, contactError },
    });

    return formValid;
  };

  validateEmail = (email) => {
    let formValid = this.state.formValid;
    let emailError = this.state.error.emailError;
    let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!pattern.test(email)) {
      formValid = false;
      emailError = "This is invalid";
    } else {
      formValid = true;
      emailError = "";
    }

    this.setState({
      email,
      formValid,
      error: { ...this.state.error, emailError },
    });

    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault(); //preventing the deafult behavior of submit(refreshing the webpage)

    if (
      this.validateName(this.state.name) &&
      this.validateContact(this.state.contact) &&
      this.validateEmail(this.state.email)
    ) {
      alert("Form is submitted");
      this.props.addData(this.state);

      this.setState({
        name: "",
        contact: "",
        email: "",
        formValid: false,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter Name</label>
        <input
          placeholder="Please enter name"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p
          style={{ color: "red", backgroundColor: "yellow", fontSize: "20px" }}
        >
          {this.state.error.nameError}
        </p>

        <label>Enter Contact</label>
        <input
          placeholder="Please enter contact number"
          id="contact"
          onChange={this.handleChange}
          value={this.state.contact}
        />
        <p id="error">{this.state.error.contactError}</p>

        <label>Enter Email</label>
        <input
          placeholder="Please enter email"
          id="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <p className="error-message">{this.state.error.emailError}</p>
        
        <button>Submit</button>
      </form>
    );
  }
}

export default AddInfo;

// js
// addEventListener('click', function(e){})

// document.getElementById('').value

// in html
{
  /* <p style="color: red; font-size: 20px; background-color: yellow"></p>
    <p class=""></p> */
}
