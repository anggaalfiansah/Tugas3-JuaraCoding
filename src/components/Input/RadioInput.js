import React, { Component } from 'react';


class RadioInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: this.props.tipe,
            soal: "",
            A: "",
            B: "",
            C: "",
            D: "",
            jawaban: "Pilih jawaban"
        }
    }
    getValueByName = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    getSoalRadio = () => {
        let data = (this.state)
        this.props.ambilData(data)
        this.setState({
            soal: "",
            A: "",
            B: "",
            C: "",
            D: "",
            jawaban: "Pilih jawaban"
        })
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <label className="form-label">Soal</label>
                    <input name="soal" type="text" className="form-control" placeholder="Masukan Soal" value={this.state.soal} onChange={this.getValueByName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pilihan A</label>
                    <input name="A" type="text" className="form-control" placeholder="Masukan Pilihan A" value={this.state.A} onChange={this.getValueByName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pilihan B</label>
                    <input name="B" type="text" className="form-control" placeholder="Masukan Pilihan B" value={this.state.B} onChange={this.getValueByName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pilihan C</label>
                    <input name="C" type="text" className="form-control" placeholder="Masukan Pilihan C" value={this.state.C} onChange={this.getValueByName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pilihan D</label>
                    <input name="D" type="text" className="form-control" placeholder="Masukan Pilihan D" value={this.state.D} onChange={this.getValueByName} />
                </div>
                <div className="row">
                    <div className="col-4">
                        Jawaban
                    </div>
                    <div className="col-8">
                        <select name="jawaban" className="form-select" onChange={this.getValueByName} value={this.state.jawaban}>
                            <option>Pilih jawaban</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.getSoalRadio}>Submit</button>
            </div>
        );
    }
}

export default RadioInput;