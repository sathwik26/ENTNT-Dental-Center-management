import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
      setFile(null);
    }
  };

  return (
    <div>
      <h3>Upload File</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
