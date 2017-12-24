import React, { Component } from 'react'

class Profile extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <br/><br/>
            <h1>My Profile</h1>
            <p>This page contains your general public information used for registration at places like stores, banks and more.
            <br/>You can update your details in your uPort app to see them reflected here.</p>
            <div>
              <strong>Profile Picture</strong><br />
              <img src={this.props.authData.avatar.uri} alt="profile" />
            </div>
            <p>
              <strong>Name</strong><br />
              {this.props.authData.name.length > 0 ? this.props.authData.name : 'N/A'}
            </p>
            <p>
              <strong>Email</strong><br />
              {this.props.authData.email.length > 0 ? this.props.authData.email : 'N/A'}
            </p>
            <p>
              <strong>Phone</strong><br />
              {this.props.authData.phone.length > 0 ? this.props.authData.phone : 'N/A'}
            </p>
            <p>
              <strong>Location</strong><br />
              {this.props.authData.country.length > 0 ? this.props.authData.country : 'N/A'}
            </p>
            <p>
              <strong>Address</strong><br />
              {this.props.authData.address.length > 0 ? this.props.authData.address : 'N/A'}
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
