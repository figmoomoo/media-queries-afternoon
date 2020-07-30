import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      dropDownVisible: false
    }
  }

  toggleDropDown = () => {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible
    })
  }

  render(){
    return (
      <div className="App">
        <header className="main=header">
          <img className="logo"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
            alt="Start Bootstrap"
          />
          <nav className="desktop-menu">
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
          <div className="dropdown" onClick={this.toggleDropDown}>MENU &#9776; </div>
          {this.state.dropDownVisible ? (
            <nav className="desktop-menu">
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
          ) : null}
        </header>
        <main>
          <body>
            {/* <image src=""/> */}
          </body>
        </main>
      </div>
    );
  }
}

export default App;
