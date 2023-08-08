import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Login extends Component{
    render() {
        return (
          <form>
            <h3>Sign In</h3>
            <div className="mb-4">
              <label>Username</label>
              <input
                type="username"
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            
            <div className="d-grid">
                <Link to="/home" className="btn btn-primary">
                    Submit
                </Link>
            </div>
    
          </form>
        );
    }
}

