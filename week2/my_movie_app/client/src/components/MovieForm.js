import React, { useState } from "react";

export default function AddMovieForm(props) {
  const initInputs = { 
    title: props.title || "", 
    genre: props.genre || "", 
    releaseDate: props.releaseDate || "" 
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(initInputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="genre"
        value={inputs.genre}
        onChange={handleChange}
        placeholder="Genre"
      />
      <input
        type="text"
        name="releaseDate"
        value={inputs.releaseDate}
        onChange={handleChange}
        placeholder="Release Date"
      />
      <button>{props.btnText}</button>
    </form>
  );
}
      
      
