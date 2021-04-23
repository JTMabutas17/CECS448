import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class CreateAccount extends Component {
  render() {
    return (
      <section id="create">
        <div className = "create-container">
        <div className = "createForm-container">
        <div className = "createForm">
            <form>
                <h1>Create an Account</h1>
    
                <div class = "textBox">
                    <label for="username" id="usernameLabel">Username:</label>
                    <input type="text" id="username" name="username" /> 
                    <label for="firstName" id="firstNameLabel">First Name:</label>
                    <input type="text" id="firstName" name="firstName" /> 
                    <label for="lastName" id="lastNameLabel">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" /> 
                    <label for="password" id="passwordLabel">Password:</label> 
                    <input type="text" id="password" name="password" /> 
                    <label for="confirmPassword" id="confirmPasswordLabel">Confirm Password:</label> 
                    <input type="text" id="confirmPassword" name="confirmPassword" /> 
                    <label for="dateOfBirth" id="dateOfBirthLabel">Date of Birth:   </label> 
                    <input type="date" id="dateOfBirth" name="dateOfBirth" /> 
                </div>
                <br/>
                <Link to="/">
                  <button type="button" class = "button" onclick="checkForm()">Sign In</button>
                </Link>
            </form>
        </div>
        </div>
        </div>
      </section>
    );
  }
}