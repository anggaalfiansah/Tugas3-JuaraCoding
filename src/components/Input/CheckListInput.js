import React, { Component } from 'react';

class CheckListInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: this.props.tipe,
            soal: "",
            option: [],
            jawaban: []
        }
    }
    getSoal = (e) => {
        this.setState({soal : e.target.value})
    }
    getValueByName = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value.split(",") })
    }
    getSoalCheckList = () => {
        let data = (this.state)
        this.props.ambilData(data)
        this.setState({
            soal: "",
            option: "",
            jawaban: ""
        })
    }
    render() {
        return (
            <div>
                <div className="mb-3">
                    <label className="form-label">Soal</label>
                    <input type="text" name="soal" className="form-control" value={this.state.soal} placeholder="Masukan Soal" onChange={this.getSoal} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pilihan Jawaban</label>
                    <input type="text" name="option" className="form-control" value={this.state.option.toString()} placeholder="Pilihan Dipisahkan Tanda koma(,)" onChange={this.getValueByName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Jawaban</label>
                    <input type="text" name="jawaban" className="form-control" value={this.state.jawaban.toString()}  placeholder="Jawaban Dipisahkan Tanda koma(,)" onChange={this.getValueByName} />
                </div>
                <button className="btn btn-primary" onClick={this.getSoalCheckList}>Submit</button>
            </div>
        );
    }
}

export default CheckListInput;