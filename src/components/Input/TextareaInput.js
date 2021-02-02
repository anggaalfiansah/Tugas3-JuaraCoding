import React, { Component } from 'react';

class TextareaInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: this.props.tipe,
            soal: "",
            jawaban: ""
        }
    }
    getValueByName =(e) => {
        let name = e.target.name
        this.setState({[(name)] : e.target.value})
    }
    getSoalTextarea = () => {
        this.props.ambilData(this.state)
        this.setState({
            soal: "",
            jawaban: ""
        })
    }
    render() {
        return (
            <div>
                <div className="mb-3">
                    <label className="form-label">Soal</label>
                    <input type="text" name="soal" className="form-control" value={this.state.soal} placeholder="Masukan Soal" onChange={this.getValueByName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Jawaban</label>
                    <input type="text" name="jawaban" className="form-control" value={this.state.jawaban} placeholder="Masukan Jawaban" onChange={this.getValueByName}/>
                </div>
                <button className="btn btn-primary" onClick={this.getSoalTextarea}>Submit</button>
            </div>
        );
    }
}

export default TextareaInput;