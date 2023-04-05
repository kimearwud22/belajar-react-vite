import { useState } from "react";
const ReactState = () => {
  const [Test, setTest] = useState(0); //untuk merubah isinya pakai yang depan,kalau pakai yang belakang merubah variablenya
  let x = 0;
  const tambah = () => {
      setTest(Test + 1);
      
  }
  const kurang = () => {
      setTest(Test - 1);
  }
  return (
    <div>
      <p>state={Test}</p>
      <p>variable= {x}</p>
      <button className="btn btn-primary" onClick={tambah} type="submit">Tambah</button>
      <button className="btn btn-primary" onClick={kurang} type="submit">Kurang</button>
    </div>
  );
};

export default ReactState;

