import React, { Component } from "react";

class FormCrud extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <form onChange={this.props.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={(this.props.nama)} onChange={
                    (event)=> this.props.handleChange(event)
                }
              />
              <div id="emailHelp" className="form-text">
                Masukkan nama anda
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Descripsi
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={(this.props.descripsi)} onChange={
                    (event)=> this.props.handleChange(event)
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Harga
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={this.props.harga} onChange={
                    (event)=> this.props.handleChange(event)
                }
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormCrud;
