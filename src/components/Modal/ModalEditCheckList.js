import React, { Component } from 'react';

class ModalEditCheckList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soal: this.props.data.soal,
            option: this.props.data.option,
            jawaban: this.props.data.jawaban
        }
        this.key = this.props.index
    }
    getSoal = (e) => {
        this.setState({ soal: e.target.value })
    }
    getValueByName = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value.split(",") })
    }
    updateData = () => {
        let data = this.props.data

        data.soal = this.state.soal
        data.option = this.state.option
        data.jawaban = this.state.jawaban
        let index = this.key

        this.props.update(data, index)
    }
    render() {
        return (
            <div>
                {/* <!-- Modal --> */}
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
                                    <input type="text" name="soal" className="form-control" value={this.state.soal} placeholder="Masukan Soal" onChange={this.getSoal} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Pilihan Jawaban</label>
                                    <input type="text" name="option" className="form-control" value={this.state.option.toString()} placeholder="Pilihan Dipisahkan Tanda koma(,)" onChange={this.getValueByName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Jawaban</label>
                                    <input type="text" name="jawaban" className="form-control" value={this.state.jawaban.toString()} placeholder="Jawaban Dipisahkan Tanda koma(,)" onChange={this.getValueByName} />
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
        )
    }
}

export default ModalEditCheckList;