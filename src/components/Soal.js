import React, { Component } from 'react';
import Score from './Score';
import Radio from "./TempatJawaban/Radio";
import CheckList from './TempatJawaban/CheckList';
import Textarea from './TempatJawaban/Textarea';
import ModalEditTextarea from './Modal/ModalEditTextarea';
import ModalEditCheckList from './Modal/ModalEditCheckList';
import ModalEditRadio from './Modal/ModalEditRadio';

class Soal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jawabanSoal: []
        }
    }

    // // Menambah Data Ke State SemuaJawaban
    addJawaban = (jawaban) => {
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
                <Textarea jawab={data.jawaban} nomor={key + 1} funcJawab={this.addJawaban} />
            )
        }

        // Jika Tipe Soal Berbentuk checkbox
        else if (data.type === 'Check List') {
            return (
                <CheckList data={data} jawab={data.jawaban} nomor={key + 1} funcJawab={this.addJawaban} />
            )
        }

        // Jika Tipe Soal Berbentuk radio (a,b,c,d)
        else if (data.type === 'Radio') {
            return (
                <Radio soal={data.soal} a={data.A} b={data.B} c={data.C} d={data.D} jawab={data.jawaban} nomor={key + 1} funcJawab={this.addJawaban} />
            )
        }
    }
    deleteSoal = (e) => {
        let data = this.props.data
        let index = e.target.id
        data.splice(index, 1)
        this.props.updateData(data)
    }
    updateSoal = (update, index) => {
        let data = this.props.data
        data.splice(index, 1, update)
        this.props.updateData(data)
    }

    tempatModal = (data, key) => {
        // Jika Tipe Soal Berbentuk essay
        if (data.type === 'Textarea') {
            return (
                <ModalEditTextarea data={data} index={key} update={this.updateSoal} />
            )
        }

        // Jika Tipe Soal Berbentuk checkbox
        else if (data.type === 'Check List') {
            return (
                <ModalEditCheckList data={data} index={key} update={this.updateSoal}/>
            )
        }

        // Jika Tipe Soal Berbentuk radio (a,b,c,d)
        else if (data.type === 'Radio') {
            return (
                <ModalEditRadio data={data} index={key} update={this.updateSoal}/>
            )
        }
    }

    render() {
        return (
            <div>
                <h3 className="text-center mb-3 text-uppercase">Soal</h3>
                <hr/>
                <div id="soal" style={{ minHeight: 500 }}>
                    {/* Menampilkan Soal */}
                    {this.props.data.map((data, key) => {
                        return (
                            <div className="pt-2" id={key} key={key}>
                                <span>{key + 1}. </span><label className="form-label">{data.soal}</label>
                                <br />
                                <div>
                                    {this.tempatJawaban(data, key)}
                                </div>
                                <div className="mt-1">
                                    <button type="button" className="btn btn-secondary me-3" data-bs-toggle="modal" data-bs-target={`#modal-${key}`}>Edit</button>
                                    <button className="btn btn-danger" id={key} onClick={this.deleteSoal}>Hapus</button>
                                </div>
                                <br />
                                <hr />
                                {/* Modal */}
                                {this.tempatModal(data, key)}
                            </div>
                        )
                    })}
                </div>
                <div>
                    {/* Jangan Lupa this.state.soal juga diganti "SoalData" jika ingin pakai SoalData.js sebagai basis data*/}
                    <Score dataKoreksi={this.state.jawabanSoal} dataSoal={this.props.data} />
                </div>
            </div>
        );
    }
}

export default Soal;