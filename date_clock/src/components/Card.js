import React from "react";

const Card = ({ text, bgColor = "lightblue", textColor = "black" }) => {
  const boxStyle = {
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: "12px",
    padding: "40px 30px",
    margin: "5px",
    textAlign: "center",
    fontSize: "80px",
    fontFamily: "Squada One",
    display: "inline-block",
  };

  return (
    <div style={boxStyle}>
      {text}
    </div>
  );
};

export default Card;
