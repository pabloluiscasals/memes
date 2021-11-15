import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [image, setImage] = useState();
  const onChangeLine1 = function(e){
    setLine1(e.target.value)
  }
  const onChangeLine2 = function(e){
    setLine2(e.target.value)
  }
  const onChangeImage = function(e){
    setImage(e.target.value)
  }
  const onClickExport = function(){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }
  return (
    <div className="App">
      {/* Select pícker memes */}
      <select onChange={onChangeImage}>
        <option value="fire">Flame house</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>{" "}
      <br />

      {/* Input text first line */}
      <input onChange={onChangeLine1} type="text" placeholder="upper line" /> <br />
      
      {/* Input text last line */}
      <input onChange={onChangeLine2} type="text" placeholder="last line" /> <br />
      
      {/* Export button */}
      <button onClick={onClickExport}>Export</button>
      
      {/* Finished meme */}
      <div className="meme" id="meme">
        <span>{line1}</span> <br />
        <span>{line2}</span>
        <img src={`/memes/${image}.jpg`} alt="" />
      </div>
    
    </div>
  );
}

export default App;
