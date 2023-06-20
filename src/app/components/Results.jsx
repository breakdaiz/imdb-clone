import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results.map(res => (
        <div key={res.id}>{res.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
