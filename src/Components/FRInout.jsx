import React from "react";

const FRInout = React.forwardRef((_, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInout;
