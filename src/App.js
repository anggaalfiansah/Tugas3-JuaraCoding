import React, { Component } from 'react';
import SoalGenerator from './components/SoalGenerator';
import Soal from './components/Soal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  ambilData = (data) => {
    this.setState({ data: data })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="container-fluid px-4 my-3">
        <div className="row">
          <div className="col-md-6 px-2 py-3 border border-secondary bg-light ">
            <Soal data={this.state.data} />
          </div>
          <div className="col-md-6 px-2 py-3 border border-secondary bg-light ">
            <SoalGenerator ambildata={this.ambilData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;