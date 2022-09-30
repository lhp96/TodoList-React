import React, { useState, useEffect } from "react";
export function Form() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect");
    document.title = `You clicked ${count} times`;
  }, []);
  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}
