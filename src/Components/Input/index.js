import React, { useState } from "react";
import "./input.css";

function Input({ setQuery }) {
  const [input, setInput] = useState("");
  return (
    <input
      placeholder="Where are you?"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setQuery(input);
        }
      }}
    />
  );
}

export default Input;
