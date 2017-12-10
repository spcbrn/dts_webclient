import React, { Component } from 'react';

import './styles/app.css';

import Landing from './components/Landing';


class App extends Component {

  render() {
    return (
      <main id="app_main">
        <h1>Hello.</h1>
        <Landing />
      </main>
    )
  }
}

export default App;
