import React, { useState } from "react";

function UploadPost() {
  const [formData, setFormData] = useState({
    file: null,
    caption: "",
  });
  const handleFileChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.files[0] };
    });
  };
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { file, caption } = formData;

    let formDataObj = new FormData();
    formDataObj.append("file", file);
    formDataObj.append("caption", caption);

    fetch("http://localhost:3001/posts", {
      method: "POST",
      body: formDataObj,
    })
      .then((r) => r.json())
      .then((json) => {
        // debugger;
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFileChange} name="file" type="file"></input>
        <input
          onChange={handleChange}
          value={formData.caption}
          name="caption"
          type="text"
          placeholder="caption"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UploadPost;
