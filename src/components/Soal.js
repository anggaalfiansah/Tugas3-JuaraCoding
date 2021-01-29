import React, { Component } from 'react';
import Score from './Score';
import Radio from "./tipeSoal/radio";
import CheckBox from './tipeSoal/checkBox';
import Essay from './tipeSoal/essay';

class Soal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soal: this.props.data,
            jawabanSoal: []
        }
    }

    // // Menambah Data Ke State SemuaJawaban
    addJawaban = (jawaban) => {
        console.log(this.state.soal)
        let semuaJawaban = this.state.jawabanSoal

        semuaJawaban.push(jawaban);

        // Menyortir data array sesuai nomor
        semuaJawaban.sort((a, b) => a.nomor - b.nomor);

        this.setState({ jawabanSoal: semuaJawaban });
    }

    // Fungsi Untuk menampilkan Radio, Checkbox, Essay untuk soal
    tempatJawaban = (data, key) => {
        // Jika Tipe Soal Berbentuk essay
        if (data.type === 'Textarea') {
            return (
                <Essay jawab={data.jawaban} nomor={key + 1} funcJawab={this.addJawaban} />
            )
        }

        // Jika Tipe Soal Berbentuk checkbox
        else if (data.type === 'Check List') {
            return (
                <CheckBox data={data} jawab={data.jawaban} nomor={key + 1} funcJawab={this.addJawaban} />
            )
        }

        // Jika Tipe Soal Berbentuk radio (a,b,c,d)
        else if (data.type === 'Radio') {
            return (
                <Radio soal={data.soal} a={data.A} b={data.B} c={data.C} d={data.D} jawab={data.jawaban} nomor={key + 1} funcJawab={this.addJawaban} />
            )
        }
    }

    render() {
        let soal = this.state.soal
        console.log(soal)
        return (
            <div>
                <div>
                    <div id="soal" style={{minHeight: '600px'}}>
                        {/* Menampilkan Soal */}
                        {/* Untuk pakai SoalData.js silahkan ganti "this.state.soal" ke "SoalData". dan jangan lupa aktifkan import SoalData*/}
                        {soal.map((data, key) => {
                            return (
                                <div className="pt-2" id={key} key={key}>
                                    <span>{key + 1}. </span><label className="form-label">{data.soal}</label>
                                    <div>
                                        {this.tempatJawaban(data, key)}
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {/* Jangan Lupa this.state.soal juga diganti "SoalData" jika ingin pakai SoalData.js sebagai basis data*/}
                        <Score dataKoreksi={this.state.jawabanSoal} dataSoal={soal} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Soal;