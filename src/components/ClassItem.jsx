import React from "react";

const ClassItem = ({ cls, pre, abs, clr }) => {
  return (
    <div className="ci" style={{ backgroundColor: clr }}>
      <h2>Class - {cls}</h2>
      <h4>Present - {pre}</h4>
      <h4>Absent - {abs}</h4>
      <h2>Total : {pre + abs}</h2>
    </div>
  );
};

export default ClassItem;
