import React, { useState } from "react";
import PropTypes from 'prop-types' ;


export default function Textform(props) {
  const [text, setText] = useState("Enter Text Here");
  const onClickFunc = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const onChangeFunc = (event) =>{
    setText(event.target.value);
  }
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={onChangeFunc}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={onClickFunc}>click to update</button>
      </div>
    </div>
  );
}

Textform.propTypes= {
    heading : PropTypes.string
}