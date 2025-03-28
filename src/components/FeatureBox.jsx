import React from "react";
import "./FeatureBox.css";

const FeatureBox = ({ feature, onClick }) => {
  return (
    <div className="feature-box" onClick={onClick}>
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
    </div>
  );
};

export default FeatureBox;
