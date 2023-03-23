import React, { useState } from "react";

function CreateArea() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {...prevNote, [name]: value};
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    setNotes((prevNotes) => {
      return [...prevNotes, note]
    });
    setNote({ title: "", content: "" })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
