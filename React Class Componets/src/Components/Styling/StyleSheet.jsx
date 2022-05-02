import React from "react";
import "./myStyles.css";

const StyleSheet = ({ primary }) => {
  return (
    <div>
      <h1 className={primary ? `primary font-xl` : ""}>Style</h1>
    </div>
  );
};

export default StyleSheet;
