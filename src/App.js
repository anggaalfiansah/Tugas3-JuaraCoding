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

  update = (data) => {
    this.setState({data : data})
  }

  render() {
    return (
      <div className="container-fluid my-3">
        <div className="bg-light">
        <div className="row">
          <div className="col-md-6 px-3 py-3">
            <div className="px-4 py-3 border border-secondary" style={{minHeight : 650}}>
            <Soal data={this.state.data} updateData={this.update}/></div>
          </div>
          <div className="col-md-6 px-3 py-3">
            <div className="px-4 py-3 border border-secondary" style={{minHeight : 650}}>
            <SoalGenerator ambildata={this.ambilData}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;