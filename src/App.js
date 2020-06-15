import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errMessage: ""
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => {

        this.setState({ lat: position.coords.latitude })
      },
      // failure callback
      (err) => this.setState({ errMessage: err.message })

    )
  }
  render() {
    // Get users current location




    return (
      <div className="App">
        {/* <div> {(this.state.lat === null && this.state.errMessage.length <= 0) && "Loading"}
          {(this.state.lat != null && this.state.errMessage.length <= 0) && `Latitude : ${this.state.lat}`}</div> */}
        {(this.state.errMessage.length <= 0 && this.state.lat === null) && <Spinner />}
        {(this.state.errMessage.length <= 0 && this.state.lat != null) &&
          <SeasonDisplay lat={this.state.lat} errMessage={this.state.errMessage} />}

        {this.state.errMessage.length > 0 && <p> {this.state.errMessage}</p>}
      </div>
    );
  }
}

export default App;
