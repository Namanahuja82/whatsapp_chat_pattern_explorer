
"use client"
import React, { useState } from 'react';

const PatternExplorer = () => {
  const [analysis, setAnalysis] = useState(null);
  const [file, setFile] = useState(null);

  // Handle file change (upload)
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Read the file content
  const readFile = async (file) => {
    const text = await file.text();
    return text;
  };

  // Handle upload and send data to the API for analysis
  const handleUpload = async () => {
    if (!file) {
      alert('Please upload a file');
      return;
    }

    try {
      const fileContent = await readFile(file);

      // Send the content to the API for analysis
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: fileContent }),
      });

      const result = await response.json();

      // Update state with the dynamic analysis structure
      if (result.analysis) {
        setAnalysis(result.analysis); // The analysis will now be dynamic
      } else {
        setAnalysis({ overallSummary: 'No analysis available.' });
      }
    } catch (error) {
      console.error('Error uploading or analyzing file:', error);
      setAnalysis({ overallSummary: 'Failed to analyze content.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-black flex items-center justify-center">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">WhatsApp Chat Pattern Explorer</h1>
        
        {/* File input styled */}
        <div className="flex justify-center">
          <input
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className="file:border file:border-gray-500 file:text-gray-100 file:bg-purple-600 file:py-2 file:px-4 file:rounded-lg file:cursor-pointer hover:file:bg-purple-500 focus:outline-none"
          />
        </div>
        
        {/* Upload Button */}
        <div className="flex justify-center">
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 focus:outline-none mt-4"
          >
            Analyze Chat
          </button>
        </div>

        {/* Render dynamic analysis sections */}
        {analysis && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md space-y-6">
            {/* Dynamically render key themes */}
            {analysis.keyThemes && (
              <>
                <h2 className="text-xl font-semibold mb-4">Key Themes</h2>
                <ul>
                  {analysis.keyThemes.map((item, index) => (
                    <li key={index} className="mb-4">
                      <strong>{item.category}:</strong>
                      <p>{item.analysis}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Dynamically render specific activities and insights */}
            {analysis.specificActivities && (
              <>
                <h2 className="text-xl font-semibold mb-4">Specific Activities & Insights</h2>
                <ul>
                  {analysis.specificActivities.map((item, index) => (
                    <li key={index} className="mb-4">
                      <strong>{item.category}:</strong>
                      <p>{item.analysis}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Dynamically render potential areas for improvement */}
            {analysis.potentialImprovements && (
              <>
                <h2 className="text-xl font-semibold mb-4">Potential Areas for Improvement</h2>
                <ul>
                  {analysis.potentialImprovements.map((item, index) => (
                    <li key={index} className="mb-4">
                      <strong>{item.category}:</strong>
                      <p>{item.analysis}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Dynamically render the overall summary */}
            {analysis.overallSummary && (
              <>
                <h2 className="text-xl font-semibold mb-4">Overall Summary</h2>
                <p>{analysis.overallSummary}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatternExplorer;
