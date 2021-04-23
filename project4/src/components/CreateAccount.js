import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class SignIn extends Component {
  render() {
    return (
      <section id="create">
        <div className = "registrationForm">
            <form>
                <h1>Registration Form</h1>
    
                <div class = "textBox">
                    <label for="username" id="usernameLabel">Username:</label><br/>
                    <input type="text" id="username" name="username" /> <br/>
                    <label for="firstName" id="firstNameLabel">First Name:</label><br/>
                    <input type="text" id="firstName" name="firstName" /> <br/>
                    <label for="lastName" id="lastNameLabel">Last Name:</label><br/>
                    <input type="text" id="lastName" name="lastName" /> <br/>
                    <label for="password" id="passwordLabel">Password:</label> <br/>
                    <input type="password" id="password" name="password" /> <br/>
                    <label for="confirmPassword" id="confirmPasswordLabel">Confirm Password:</label> <br/>
                    <input type="password" id="confirmPassword" name="confirmPassword" /> <br/>
                    <label for="dateOfBirth" id="dateOfBirthLabel">Date of Birth:</label> <br/>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" /> <br/>
                </div>
                
                <Link to="/">
                  <button type="button" class = "button" onclick="checkForm()">Sign In</button>
                </Link>
            </form>
        </div>
      </section>
    );
  }
}