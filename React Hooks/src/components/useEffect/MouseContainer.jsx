import React, { useState } from "react";
import HookMouse from "./HookMouse";
const MouseContainer = () => {
  const [dislay, setDislay] = useState(true);
  return (
    <div>
      <button onClick={() => setDislay(!dislay)}>Toggle Display</button>
      {dislay && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
