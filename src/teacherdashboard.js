import React, { useState } from "react";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Add logic for processing input
    setOutput(`Processed: ${inputValue}`);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">React UI Component</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border p-2 rounded mb-4"
        placeholder="Enter something..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
      {output && <p className="mt-4 text-lg">{output}</p>}
    </div>
  );
};

export default MyComponent;
