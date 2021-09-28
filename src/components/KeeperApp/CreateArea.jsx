import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";



function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  const creatnote = {
    position: "relative",
  width:"25rem",
  margin: "30px  auto 20px auto",
  background: "#fff",
  padding: "15px",
  borderRadius: "7px",
  boxShadow: "0 1px 5px rgb(138, 137, 137)"
  }
  const cretnoti = {
 width: "100%",
  border: "none",
  padding: "4px",
  outline: "none",
  fontSize: "1.2em",
  fontFamily: "inherit",
  resize: "none"
  }
  const btntry = {
  
    position: "absolute",
  right: "18px",
  bottom: "-18px",
  background: "#f5ba13",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  outline: "none"
  }
 
  return (
    <div>
      <form style={creatnote}>
        {isExpanded && (
          <input
          style={cretnoti}
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
        style={cretnoti}
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <button style={btntry} onClick={submitNote}>Add</button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
