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

  // function click(){
  //   const isDone = true;
  //  setInputText( isDONE ? {style: "line-through"} : NULL;)

  // }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={click}
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
