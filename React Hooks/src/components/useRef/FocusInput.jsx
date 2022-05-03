import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // Focus on the input elemet
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FocusInput;
