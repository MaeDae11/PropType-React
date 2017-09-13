import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Spaceship from './Spaceship.js';
import CrewMember from './CrewMember.js';
import BadAlien from './BadAlien.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Universe</h2>
        </div>
        <Spaceship name="Enterprise">
            <CrewMember name="Wesley Crusher" rank="Ensign"/>
            <CrewMember name="Riker" rank="Commander"/>
            <BadAlien name="Borg" species="Borg"/>
            <BadAlien name="Kahn" species="Super human"/>
        </Spaceship>
      </div>
    );
  }
}

export default App;
