import React, { Component } from "react";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

  render() {
    return (
      <div>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <h2>Login Form</h2>
            <form>
            <label>Email</label><br/>
            <input type="text"></input><br/>
            <label>Password</label><br/>
            <input type="text"></input><br/>
            <input type="button" value="login" class="btn btn-primary"></input>
            <input type="reset" value="reset" class="btn btn-primary"></input>
            </form>
            </div>
            <div className="col-md-6">
            <h2>Signup </h2>
            <form>
            <label>Email</label><br/>
            <input type="text"></input><br/>
            <label>Password</label><br/>
            <input type="text"></input><br/>
            <input type="button" value="Sign Up" class="btn btn-primary"></input>
            <input type="reset" value="reset" class="btn btn-primary"></input>
            </form>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;