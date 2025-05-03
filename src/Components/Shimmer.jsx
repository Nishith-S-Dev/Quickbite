import React from "react";
import "./shimmer.css"

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill("").map((_, i) => (
        <div className="shimmer-card" key={i}></div>
      ))}
    </div>
  );
};

export default Shimmer;