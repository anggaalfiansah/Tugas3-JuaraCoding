import React, { Component } from 'react';
import Hasil from './Hasil'

class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soalBelumDijawab: this.props.dataSoal.length,
            soalSudahDijawab: this.props.dataKoreksi.length,
            jawabanSalah: 0,
            jawabanBenar: 0,
            score: 0,
            hasilVisibility: true,
            buttonVisibility: false,
            buttonVisibility2: true
        }
    }
    // Memperhitungkan Semua Data
    data = () => {
        let dataSoal = this.props.dataSoal;

        let dataJawaban = this.props.dataKoreksi;

        let belumDijawab = dataSoal.length - dataJawaban.length;

        let sudahDijawab = dataJawaban.length;

        let salah = dataJawaban.filter((value) => {
            return value.jawabKoreksi === "Salah"
        });

        let benar = dataJawaban.filter((value) => {
            return value.jawabKoreksi === "Benar"
        });

        let totalScore = 100 / dataSoal.length * benar.length;

        this.setState({
            soalBelumDijawab: belumDijawab,
            soalSudahDijawab: sudahDijawab,
            jawabanSalah: salah.length,
            jawabanBenar: benar.length,
            score: totalScore.toFixed(1),
            hasilVisibility: false,
            buttonVisibility: true,
            buttonVisibility2: false
        })

        document.getElementById("soal").hidden = true

    }
    data2 = () => {
        this.setState({
            hasilVisibility: true,
            buttonVisibility: false,
            buttonVisibility2: true
        })

        document.getElementById("soal").hidden = false
    }
    render() {
        return (
            <div>
                <div className="row" >
                    <div className="col-md-5 mx-auto">
                        <button hidden={this.state.buttonVisibility} style={{ width: "100%" }} className="btn btn-primary" onClick={this.data}>Lihat Score Anda</button>
                    </div>
                </div>
                <div hidden={this.state.hasilVisibility}>
                    <h5 className="text-center mb-3">BERIKUT INI ADALAH SCORE ANDA</h5>
                    <table className="table table-success table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center text-uppercase table-success" scope="col">Sudah Dijawab</th>
                                <th className="text-center text-uppercase table-danger" scope="col">Belum Dijawab</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center fs-1 fw-bold table-success text-success">{this.state.soalSudahDijawab}</td>
                                <td className="text-center fs-1 fw-bold table-danger text-danger">{this.state.soalBelumDijawab}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-success table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center text-uppercase table-success" scope="col">Jawaban Benar</th>
                                <th className="text-center text-uppercase table-danger" scope="col">Jawaban Salah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center fs-1 fw-bold table-success text-success" >{this.state.jawabanBenar}</td>
                                <td className="text-center fs-1 fw-bold table-danger text-danger">{this.state.jawabanSalah}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-primary table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center text-uppercase" scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center fs-1 fw-bold text-primary">{this.state.score}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Hasil jawabBenarSalah={this.props.dataKoreksi} />
                    <br />
                    <div className="col-md-5 mx-auto">
                        <button hidden={this.state.buttonVisibility2} style={{ width: "100%" }} className="btn btn-primary" onClick={this.data2}>Kembali ke Soal</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Score;