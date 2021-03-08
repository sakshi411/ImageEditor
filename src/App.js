import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // colors: ["red", "yellow", "blue", "green"],
      selectedColor: "#0000ff",
      textValue: "",
      enableInput: false
    }
  }
  toggleField() {
    this.setState({ enableInput: !this.state.enableInput })
  }
  render() {
    const { colors, selectedColor, textValue, enableInput } = this.state;
    return (
      <div>
        {/* <input  type="text" value={textValue} onChange={(event) => {
          this.setState({ textValue: event.target.value })
        }} /> */}
        <div className="preview">
          <input id="colorPicker" type="color" value={selectedColor} onChange={(event) => {
            this.setState({ selectedColor: event.target.value })
          }} />

          {enableInput ?<input className="text" onBlur={()=> this.toggleField()}  type="text" value={textValue} onChange={(event) => {
            this.setState({ textValue: event.target.value })
          }} /> :
          <div onClick={() => this.toggleField()} className="text">{textValue ?  textValue : "Type Here..."}</div>  }
          
         <img src="images/Image.jpg"></img>
           {/* <a className="iconUpload" href="#"><span className="fa fa-upload fa-5x"></span></a>
         <img style={{ background: selectedColor }} className="imageIcon" src="./images/square.svg" />  */}
        </div>
      </div>
    );

  }

}

export default App;
