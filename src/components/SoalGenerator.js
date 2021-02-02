import React, { Component } from 'react';
import CheckListInput from './Input/CheckListInput';
import TextareaInput from './Input/TextareaInput';
import RadioInput from './Input/RadioInput';

class SoalGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeSoal: "",
            soal: []
        }
    }

    // mengambil tipe soal
    getTypeSoal = (e) => {
        this.setState({
            typeSoal: e.target.value
        })
    }
    // mengambil data soal radio
    getSoalRadio = (data) => {
        // push data ke state.soal
        let soalRadio = data

        let soalJadi = this.state.soal
        soalJadi.push(soalRadio);

        this.setState({
            soal: soalJadi
        })

        this.props.ambildata(this.state.soal)

    }
    // mengambil data soal checklist
    getSoalCheckList = (data) => {
        let soalCheckList = data

        let soalJadi = this.state.soal
        soalJadi.push(soalCheckList)

        this.setState({
            soal: soalJadi
        })

        this.props.ambildata(this.state.soal)
    }
    // mengambil data soal textarea
    getSoalTextarea = (data) => {
        let soalTextarea = data

        let soalJadi = this.state.soal
        soalJadi.push(soalTextarea)

        this.setState({
            soal: soalJadi
        })
        this.props.ambildata(this.state.soal)
    }

    // Menampilkan Form Input Soal Sesuai Tipe
    formSoal = (x) => {
        if (x === "Radio") {
            return (
                <RadioInput tipe={this.state.typeSoal} ambilData={this.getSoalRadio} />
            )
        }
        else if (x === "Check List") {
            return (
                <CheckListInput tipe={this.state.typeSoal} ambilData={this.getSoalCheckList} />
            )
        }
        else if (x === "Textarea") {
            return (
                <TextareaInput tipe={this.state.typeSoal} ambilData={this.getSoalTextarea} />
            )
        }
    }

    render() {
        return (
            <div>
                <h3 className="text-center mb-3 text-uppercase">Input Soal</h3>
                <hr />
                {/* Pilih tipe Soal */}
                <div className="row">
                    <div className="col-4">
                        Type Soal :
                                </div>
                    <div className="col-8">
                        <select className="form-select" onChange={this.getTypeSoal}>
                            <option>Pilih Tipe Soal</option>
                            <option>Radio</option>
                            <option>Check List</option>
                            <option>Textarea</option>
                        </select>
                    </div>
                </div>
                {/* Form Input */}
                {this.formSoal(this.state.typeSoal)}
            </div>
        );
    }
}

export default SoalGenerator;
