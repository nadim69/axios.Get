import React, { Component } from 'react';
import Flat from './components/Flat'
import axios from 'axios'
import GoogleMapReact from 'google-map-react'
import './App.css';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }
  componentDidMount() {
    // console.log("didmount")
    // const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    // fetch(url)
    //   .then(response => response.json())
    //   .then((data) => {
    //     this.setState({
    //       flats: data
    //     })
    //   })
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    axios.get(url)
      .then(res => {
        console.log(res)
        const flats = res.data
        console.log("flats", flats)
        this.setState({ flats })
      })
  }
  render() {

    const center = {
      lat: 48.866667,
      lng: 2.333333
    }
    return (

      <div className="App">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => <Flat flat={flat} />)}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            defaultZoom={11}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
