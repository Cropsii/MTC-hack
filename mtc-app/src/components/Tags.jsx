import React from "react";
import "../componentsStyle/Tag.css";

const Tag = ({ text, onClick }) => {
  return <div className="tag" onClick={onClick}>{text}</div>;
};

export default Tag;