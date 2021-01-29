import React, { Component } from 'react';
import Soal from './Soal';

class SoalGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeSoal: "",
            soal: []
        }

        this.soal = "";
        this.radioA = "";
        this.radioB = "";
        this.radioC = "";
        this.radioD = "";
        this.pilihanCheckBox = [];
        this.JawabanCheckBox = [];
        this.jawaban = "";
    }

    // mengambil tipe soal
    getTypeSoal = (e) => {
        this.setState({
            typeSoal: e.target.value
        })
    }
    // mengambil data soal radio
    getSoalRadio = () => {
        this.soal = document.getElementById("soalRadio").value
        this.radioA = document.getElementById("a").value
        this.radioB = document.getElementById("b").value
        this.radioC = document.getElementById("c").value
        this.radioD = document.getElementById("d").value
        this.jawaban = document.getElementById("jawaban").value

        // Reset Inputan
        document.getElementById("soalRadio").value = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
        document.getElementById("d").value = ""
        document.getElementById("jawaban").value = ""

        // push data ke state.soal

        let soalRadio = {
            type: this.state.typeSoal,
            soal: this.soal,
            A: this.radioA,
            B: this.radioB,
            C: this.radioC,
            D: this.radioD,
            jawaban: this.jawaban
        }

        let soalJadi = this.state.soal
        soalJadi.push(soalRadio);

        this.setState({
            soal: soalJadi
        })
        console.log(this.state.soal)

    }
    // mengambil data soal checklist
    getSoalCheckList = () => {
        this.soal = document.getElementById("soalCheckList").value
        this.pilihanCheckBox = document.getElementById("checklist").value.split(",")
        this.jawaban = document.getElementById("jawabanChecklist").value.split(",")

        // Reset Inputan
        document.getElementById("soalCheckList").value = ""
        document.getElementById("checklist").value = ""
        document.getElementById("jawabanChecklist").value = ""

        let soalCheckList = {
            type: this.state.typeSoal,
            soal: this.soal,
            option: this.pilihanCheckBox,
            jawaban: this.jawaban
        }

        let soalJadi = this.state.soal
        soalJadi.push(soalCheckList)

        this.setState({
            soal: soalJadi
        })
        console.log(this.state.soal)
    }

    // mengambil data soal textarea
    getSoalTextarea = () => {
        this.soal = document.getElementById("soalTextarea").value
        this.jawaban = document.getElementById("jawaban").value

        // Reset Inputan
        document.getElementById("soalTextarea").value = ""
        document.getElementById("jawaban").value = ""

        let soalTextarea = {
            type: this.state.typeSoal,
            soal: this.soal,
            jawaban: this.jawaban
        }

        let soalJadi = this.state.soal
        soalJadi.push(soalTextarea)

        this.setState({
            soal: soalJadi
        })
    }

    // Menampilkan Form Input Soal Sesuai Tipe
    formSoal = (x) => {
        if (x === "Radio") {
            return (
                <div>
                    <div className="mb-3">
                        <label className="form-label">Soal</label>
                        <input id="soalRadio" type="text" className="form-control" placeholder="Masukan Soal" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pilihan A</label>
                        <input id="a" type="text" className="form-control" placeholder="Masukan Pilihan A" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pilihan B</label>
                        <input id="b" type="text" className="form-control" placeholder="Masukan Pilihan B" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pilihan C</label>
                        <input id="c" type="text" className="form-control" placeholder="Masukan Pilihan C" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pilihan D</label>
                        <input id="d" type="text" className="form-control" placeholder="Masukan Pilihan D" />
                    </div>
                    <div className="row">
                        <div className="col-4">
                            Jawaban
                    </div>
                        <div className="col-8">
                            <select id="jawaban" className="form-select">
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
            )
        }
        else if (x === "Check List") {
            return (
                <div>
                    <div className="mb-3">
                        <label className="form-label">Soal</label>
                        <input type="text" id="soalCheckList" className="form-control" placeholder="Masukan Soal" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pilihan Jawaban</label>
                        <input type="text" id="checklist" className="form-control" placeholder="Pilihan Dipisahkan Tanda koma(,)" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jawaban</label>
                        <input type="text" id="jawabanChecklist" className="form-control" placeholder="Jawaban Dipisahkan Tanda koma(,)" />
                    </div>
                    <button className="btn btn-primary" onClick={this.getSoalCheckList}>Submit</button>
                </div>
            )
        }
        else if (x === "Textarea") {
            return (
                <div>
                    <div className="mb-3">
                        <label className="form-label">Soal</label>
                        <input type="text" id="soalTextarea" className="form-control" placeholder="Masukan Soal" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jawaban</label>
                        <input type="text" id="jawaban" className="form-control" placeholder="Masukan Jawaban" />
                    </div>
                    <button className="btn btn-primary" onClick={this.getSoalTextarea}>Submit</button>
                </div>
            )
        }
    }

    render() {
        let soal = this.state.soal
        return (
            <div>
                <div className="container-fluid px-3 py-3">
                    <div className="row">
                        <div className="col-md-6 px-2 py-3 border border-secondary bg-light ">
                            <Soal data={soal} />
                        </div>
                        <div className="col-md-6 px-2 py-3 border border-secondary bg-light">
                            <h3 className="text-center mb-3 text-uppercase">Input Soal</h3>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default SoalGenerator;
