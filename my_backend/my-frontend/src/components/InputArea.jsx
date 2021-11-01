import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function logOut() {
    // let history = useHistory();
    // history.push("/logout");
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.OnAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
      <button className="btn" onClick={logOut}>
        Logout
      </button>
    </div>
  );
}

export default InputArea;
