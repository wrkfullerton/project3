import React, { Component } from 'react';
import "../styles/Profile.css";
import jwt_decode from 'jwt-decode';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="main">
        <div className="row">
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">Profile</h1>
              </div>
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td>First Name:</td>
                    <td>{this.state.first_name}</td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>{this.state.last_name}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{this.state.email}</td>
                  </tr>
                </tbody>
              </table>
=======
        <div className="profile">
            <div className="row">
                <div className="container">
                    <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>{this.state.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{this.state.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{this.state.email}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
>>>>>>> 5baef995f60cefa1e8776ca00da5a97f0c4738d1
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;