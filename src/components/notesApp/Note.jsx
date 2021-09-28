import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "./styles.css";
import {NoteBody,Notecontainer,Noteheading,Noteh1,Note,Icon} from "./NoteElemnets";


function NotesApp() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <NoteBody>
    <Notecontainer>
    <Icon to="/">RamziWebsite</Icon>
      <Noteheading>
        <Noteh1>To-Do List</Noteh1>
      </Noteheading>
      <InputArea onAdd={addItem} />
      <Note>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </Note>
    </Notecontainer>
    </NoteBody>
  );
}

export default NotesApp;
