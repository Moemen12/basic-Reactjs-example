import React from "react";

function Title({ title, subTitle }) {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
}

export default Title;
