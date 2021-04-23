import React, { Component } from 'react';
export default class SignIn extends Component {
  render() {
    return (
      <section id="signin">
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
                <label for="file" class="btn btn-primary tooltip"><img src="upload.png" id="i" />
                    <div class="right">
                        <p>Upload your image here!</p>
                    </div>
                </label>
                <label for="file" class="btn btn-primary tooltip"><img id="output" width="200" style={{display: "none"}} />
                    <div class="right">
                        <p>Upload your image here!</p>
                    </div>
                </label>
                <input type="file"  accept="image/*" id="file" onchange="upload(event)" style={{display: "none"}} /> 
                <br/>
                <progress id="progressBar" value="0" max="100" style={{display: "none"}}></progress>
                <br/>
                <span id="status"></span>
                <br/>

                <button type="button" class = "button" onclick="checkForm()">Submit</button>
            </form>
        </div>
      </section>
    );
  }
}