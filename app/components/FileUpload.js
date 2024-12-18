
"use client";

import React, { useState } from "react";

const FileUpload = ({ onFileUpload }) => {
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.name.endsWith(".txt")) {
      setError("Please upload a valid .txt file.");
      return;
    }
    setError("");
    const reader = new FileReader();
    reader.onload = (event) => {
      onFileUpload(event.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-4 border rounded shadow">
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
