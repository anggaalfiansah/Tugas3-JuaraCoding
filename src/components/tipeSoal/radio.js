import React, { Component } from 'react';

class radio extends Component {
    constructor(props) {
        super(props);
        this.state = { jawaban: "", disabled: false, jawabKoreksi: "" };
    }

    eventHandler = (e) => {
        this.setState({ jawaban: e.target.value });
        this.addJawaban(e.target.value);
    }

    addJawaban = (jawab) => {
        let nomor = this.props.nomor;
        let benar = this.props.jawab;
        let boolKoreksi = ""
        if (jawab === this.props.jawab) {
            boolKoreksi = "Benar"
        } else {
            boolKoreksi = "Salah"
        }

        this.props.funcJawab({
            nomor: nomor,
            jawaban: jawab,
            jawabKoreksi: boolKoreksi,
            jawabBenar : benar

        })

    }

    jawaban = () => {
        if (this.state.jawaban === this.props.jawab) {
            return <span id="cek-jawaban" className="text-success">Jawaban Benar</span>
        } else if (this.state.jawaban === "") {
            return ""
        } else {
            return <span id="cek-jawaban" className="text-danger">Jawaban Salah, jawaban yang benar adalah {this.props.jawab}</span>
        }
    }

    autoDisable = () => {
        this.setState({ disabled: true })
    }

    render() {
        console.log(this.state.jawaban)
        return (
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.soal} value="A" disabled={this.state.disabled} onClick={this.autoDisable} onChange={this.eventHandler} />
                    <label className="form-check-label">{this.props.a}</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.soal} value="B" disabled={this.state.disabled} onClick={this.autoDisable} onChange={this.eventHandler} />
                    <label className="form-check-label">{this.props.b}</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.soal} value="C" disabled={this.state.disabled} onClick={this.autoDisable} onChange={this.eventHandler} />
                    <label className="form-check-label">{this.props.c}</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={this.props.soal} value="D" disabled={this.state.disabled} onClick={this.autoDisable} onChange={this.eventHandler} />
                    <label className="form-check-label">{this.props.d}</label>
                </div>
                <br />
                <div>
                    {this.jawaban()}
                </div>
            </div>
        );
    }
}

export default radio;