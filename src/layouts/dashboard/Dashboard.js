import React, { Component } from 'react'
import Modal from 'react-modal'

import gap from '../../img/gap.png'
import hospital from '../../img/hospital.jpg'
import mcdonalds from '../../img/mcdonalds.jpg'
import university from '../../img/memorial-university.png'
import bank from '../../img/standard-chartered.jpg'
import gym from '../../img/gym.jpg'
import sobeys from '../../img/sobeys.png'
import dealer from '../../img/car-dealer.jpg'
import cryptokitty from '../../img/cryptokitty.jpg'


const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ButtonController extends Component {
  constructor(props) {
    super(props)
    this.handleRegisterClick = this.handleRegisterClick.bind(this)
    this.handleRevokeClick = this.handleRevokeClick.bind(this)
    // this.handleEditClick = this.handleEditClick.bind(this)

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.registerEntity = this.registerEntity.bind(this)
    this.quitRegistration = this.quitRegistration.bind(this)

    this.state = {
      isRegistered: this.props.isRegistered,
      modalIsOpen: false
    }
  }

  handleRegisterClick() {
    this.openModal()
    this.setState({isRegistered: true})
    // console.log('registered')
  }

  handleRevokeClick() {
    this.setState({isRegistered: false})
    // console.log('revoked')
  }

  // handleEditClick() {
  //   // console.log('edit')
  //   // this.setState({isRegistered: false})
  // }

  openModal() {
    this.setState({modalIsOpen: true})
    // console.log('modal opened')
  }

  afterOpenModal() {
    // console.log('now registering')
  }

  closeModal() {
    this.setState({modalIsOpen: false})
    // console.log('modal closed')
  }

  registerEntity() {
    // u
    // console.log("entity has been registered")
    this.closeModal()
  }

  quitRegistration() {
    this.setState({isRegistered: false})
  }


  render() {
    const isRegistered = this.state.isRegistered

    let buttonDiv = null
    let modalDiv = null
    if (isRegistered) { 
      modalDiv = <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={modalStyles} contentLabel="Register here">
                  <h2>Register</h2>
                  <p>Select which information you want to release</p>
                  <br/>
                  <form>
                    <label><input type="checkbox" /> Photo   </label>
                    <label><input type="checkbox" /> Name   </label>
                    <label><input type="checkbox" /> Email   </label>
                    <label><input type="checkbox" /> Phone   </label>
                    <label><input type="checkbox" /> Address   </label>
                    <label><input type="checkbox" /> Location   </label>
                  </form>
                  <br/>
                  <button className="button-error pure-button modal-control" onClick={this.quitRegistration}>Cancel</button>
                  <button className="button-success pure-button modal-control" onClick={this.registerEntity}>Confirm</button>
                 </Modal>
      buttonDiv = <button className="pure-button pure-button-primary info-control" onClick={this.handleRevokeClick}>Revoke Access</button>

    } else {
      buttonDiv = <button className="pure-button pure-button-primary info-control" onClick={this.handleRegisterClick}>Register</button>
    }

    return(
      <div>
        {buttonDiv}
        {modalDiv}
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
        <h2>Entities</h2>
        <p>These are places where you can register to get access to their services. You can restrict the amount of information each entity has or revoke their access to your information.</p>
        <br/>
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
            <img src={gym} className="logos" alt="Gym Town logo" /><br/>
            <ButtonController />
          </div>
          <div className="pure-u-1-3">
            <img src={cryptokitty} className="logos" alt="CryptoKitties logo" /><br/>
            <ButtonController isRegistered/>
          </div>
          <div className="pure-u-1-3">
            <img src={sobeys} className="logos" alt="Sobeys grocery store logo" /><br/>
            <ButtonController />
          </div>
          <div className="pure-u-1-3">
            <img src={dealer} className="logos" alt="Carworld car dealership logo" /><br/>
            <ButtonController isRegistered/>
          </div>
          <div className="pure-u-1-3">
            <img src={bank} className="logos" alt="Standard Chartered Bank logo" /><br/>
            <ButtonController />
          </div>
          <br/>
        </div>
      </main>
    )
  }
}

Modal.setAppElement('body');

export default Dashboard
