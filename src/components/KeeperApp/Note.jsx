import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  const note = {
    background: "#fff",
  borderRadius: "7px",
  boxShadow: "0 2px 5px #ccc",
  padding: "10px",
  width: "240px",
  margin: "16px",
  float: "left"
  }
  const noteh1 = {
    fontSize: "1.1em",
  marginBottom: "6px"
  }
   const creatbtn = {
   position: "relative",
  float: "right",
  marginRight: "10px",
  color: "#f5ba13",
  border: "none",
  width: "36px",
  height: "36px",
  cursor: "pointer",
  outline: "none"
  }
  const notep = {
      fontSize: "1.1em",
  marginBottom: "10px",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word"
  }


  return (
    <div style = {note}>
      <h1 style={noteh1}>{props.title}</h1>
      <p style={notep}>{props.content}</p>
      <button 
      style={creatbtn}
      onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
