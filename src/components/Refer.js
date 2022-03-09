import React, { useEffect, useRef } from "react";

const Refer = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>React App</h1>
      <input
        type="text"
        className="text"
        ref={inputRef}
        placeholder="Enter your name"
      />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Refer;
