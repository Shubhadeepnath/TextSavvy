import React, { useState } from "react";

export default function Form(props) {
  const toUp = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!", "success");
  };

  const toLo = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!", "success");
  };

  const handleCopy = () => {
    console.log("copy was clicked" + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Text successfully copied!!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleonChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1> {props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="box"
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            rows={8}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={toUp}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={toLo}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text</h2>
        <h3>hello</h3>

        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>

        <p>{text.length > 0 ? text : "Enter Text to Preview"}</p>
      </div>
    </>
  );
}
