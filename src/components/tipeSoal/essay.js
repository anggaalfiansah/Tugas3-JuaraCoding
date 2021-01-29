/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';

class essay extends Component {
    constructor(props) {
        super(props);
        this.state = { jawaban: "", disabled: false, hidden: false, jawabanVisibility: true };
        this.inputText = "";
    }

    eventHandler = (e) => {
        this.inputText = e.target.value;
    }

    addJawaban = (a) => {
        let jawab = a;
        let nomor = this.props.nomor;
        let benar = `Jawaban Yang benar Adalah ${this.props.jawab}`;
        let boolKoreksi = ""
        if (jawab.toLowerCase() === this.props.jawab.toLowerCase()) {
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
        let jawaban = this.state.jawaban;
        if (jawaban.toLowerCase() === this.props.jawab.toLowerCase()) {
            return <span id="cek-jawaban" className="text-success">Jawaban Benar</span>
        } else {
            return <span id="cek-jawaban" className="text-danger">Salah, Jawaban yang benar adalah {this.props.jawab}</span>
        }
    }

    submitButton = () => {
        let fn = this.inputText
        this.setState({ jawaban: fn, disabled: true, hidden: true, jawabanVisibility: false })
        console.log(this.state.jawaban)
        {this.addJawaban(fn)}
    }

    render() {
        return (
            <div>
                <textarea onChange={this.eventHandler} className="form-control" disabled={this.state.disabled} placeholder={`Jawab dengan benar`}></textarea>
                <button className="btn btn-primary mt-2" hidden={this.state.hidden} onClick={this.submitButton}>Submit</button>
                <br />
                <div hidden={this.state.jawabanVisibility}>
                    {this.jawaban()}
                </div>
            </div>
        );
    }
}

export default essay;