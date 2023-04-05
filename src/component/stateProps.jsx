import React, { Component } from "react";
import Operann from "./Operan";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "bakso",
    };
  }
//   gantimakan(makananBaru){
//       this.setState({
//           makanan : makananBaru
//       })
//   }
  render() {
    // const {makanan} = this.props  (opsi jika tidak inin gunakan this.props trus)
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={()=> this.setState({makanan:"soto"})}>Ganti makanan</button>
        <Operann makanan={this.state.makanan}/>
      </div> //kita gunakan arrow function untuk mengubah state nya gantimakan("soto")

    );
  }
}
