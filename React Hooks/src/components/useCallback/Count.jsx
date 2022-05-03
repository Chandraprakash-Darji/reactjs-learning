import React, { memo } from "react";

const Count = ({ text, count }) => {
  console.log(`Renderinng ${text}`);
  return (
    <>
      {text} - {count}
    </>
  );
};

export default memo(Count);
