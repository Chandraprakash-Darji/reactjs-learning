import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  const logMousePosition = (e) => {
    console.log("Mouse moved");
    setCords({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    // When Componet Unmount the it will remove the event Listener
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {cords.x} Y - {cords.y}
    </div>
  );
};
export default HookMouse;
