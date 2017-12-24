import React, { Component } from 'react'

import gap from '../../img/gap.png'
import hospital from '../../img/hospital.jpg'
import mcdonalds from '../../img/mcdonalds.jpg'
import university from '../../img/memorial-university.png'
import bank from '../../img/standard-chartered.jpg'
import gym from '../../img/gym.jpg'
import sobeys from '../../img/sobeys.png'
import dealer from '../../img/car-dealer.jpg'
import cryptokitty from '../../img/cryptokitty.jpg'



class ButtonController extends Component {
  constructor(props) {
    super(props)
    this.handleRegisterClick = this.handleRegisterClick.bind(this)
    this.handleRevokeClick = this.handleRevokeClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.state = {isRegistered: this.props.isRegistered}
  }

  handleRegisterClick() {
    console.log('registered')
    this.setState({isRegistered: true})
  }

  handleRevokeClick() {
    console.log('revoked')
    this.setState({isRegistered: false})
  }

  handleEditClick() {
    console.log('edit')
    // this.setState({isRegistered: false})
  }

  render() {
    const isRegistered = this.state.isRegistered

    let buttonDiv = null;
    if (isRegistered) { 
      buttonDiv = <div><button className="pure-button pure-button-primary info-control" onClick={this.handleEditClick}>Edit</button><button className="pure-button pure-button-primary info-control" onClick={this.handleRevokeClick}>Revoke</button></div>
    } else {
      buttonDiv = <button className="pure-button pure-button-primary info-control" onClick={this.handleRegisterClick}>Register</button>
    }

    return(
      <div>
        {buttonDiv}
      </div>
    )
  }
}

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }


  render() {

    let greetingMessage = null;
    if(this.props.authData.name) {
      greetingMessage = <p><strong>Congratulations {this.props.authData.name}!</strong> <br/> You've logged in with uPort successfully.</p>
    } else {
      greetingMessage = <p><strong>Congratulations!</strong> <br/> You've logged in with uPort successfully.</p>
    }

    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <br/><br/>
            <h1>Dashboard</h1>
            {greetingMessage}
          </div>
        </div>
        <hr/> <br/>
        <h1>Entities</h1>
        <p>These are places where you can register to get access to their services. You can restrict the amount of information each entity has or revoke their access to your information.</p>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <img src={gap} className="logos" alt="GAP store logo" /><br/>
            <ButtonController isRegistered/>
          </div>
          <div className="pure-u-1-3">
            <img src={hospital} className="logos" alt="New York Downtown Hospital logo" /><br/>
            <ButtonController />
          </div>
          <div className="pure-u-1-3">
            <img src={university} className="logos" alt="Memorial University logo" /><br/>
            <ButtonController isRegistered/>
          </div>
          <div className="pure-u-1-3">
            <img src={mcdonalds} className="logos" alt="McDonald's logo" /><br/>
            <ButtonController isRegistered/>
          </div>
          <div className="pure-u-1-3">
            <img src={bank} className="logos" alt="Standard Chartered Bank logo" /><br/>
            <ButtonController />
          </div>
          <div className="pure-u-1-3">
            <img src={gym} className="logos" alt="Gym Town logo" /><br/>
            <ButtonController isRegistered/>
          </div>
          <div className="pure-u-1-3">
            <img src={sobeys} className="logos" alt="Sobeys grocery store logo" /><br/>
            <ButtonController isRegistered/>
          </div>
          <div className="pure-u-1-3">
            <img src={dealer} className="logos" alt="Carworld car dealership logo" /><br/>
            <ButtonController />
          </div>
          <div className="pure-u-1-3">
            <img src={cryptokitty} className="logos" alt="Carworld car dealership logo" /><br/>
            <ButtonController isRegistered/>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
