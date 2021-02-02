import React, { Component } from 'react';

class ModalEditRadio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soal: this.props.data.soal,
            A: this.props.data.A,
            B: this.props.data.B,
            C: this.props.data.C,
            D: this.props.data.D,
            jawaban: this.props.data.jawaban
        }
        this.key = this.props.index
    }
    getValueByName = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }
    updateData = () => {
        let data = this.props.data

        data.soal = this.state.soal
        data.A = this.state.A
        data.B = this.state.B
        data.C = this.state.C
        data.D = this.state.D
        data.jawaban = this.state.jawaban
        let index = this.key

        this.props.update(data, index)
    }
    render() {
        return (
            <div>
                <div className="modal fade" id={`modal-${this.props.index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit Soal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
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
                                <br/>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.updateData} data-bs-dismiss="modal">Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalEditRadio;