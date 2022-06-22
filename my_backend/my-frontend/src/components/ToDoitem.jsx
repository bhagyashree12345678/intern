import React from "react";

function ToDoItem(props) {
  return (
    <div style={{textDecoration: "line-through"}}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
