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
            <p>Change these details in UPort to see them reflected here.</p>
            <p>
              <strong>Avatar</strong><br />
              {this.props.authData.avatar}
            </p>
            <p>
              <strong>Name</strong><br />
              {this.props.authData.name}
            </p>
            <p>
              <strong>Phone</strong><br />
              {this.props.authData.phone}
            </p>
            <p>
              <strong>Email</strong><br />
              {this.props.authData.email}
            </p>
            <p>
              <strong>Location</strong><br />
              {this.props.authData.country}
            </p>
            <p>
              <strong>Address</strong><br />
              {this.props.authData.address}
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
