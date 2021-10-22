import React, { useState } from "react";

function UploadPost() {
  const [formData, setFormData] = useState({
    file: {},
    caption: "",
  });
  const handleFileChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.files[0] };
    });
  };
  return (
    <div>
      <form onChange={handleFileChange}>
        <input name="file" type="file"></input>
        <input name="caption" type="text" placeholder="caption"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UploadPost;
