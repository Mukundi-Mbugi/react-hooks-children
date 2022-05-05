import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "", // possible values: vertical, horizontal
  contentPosition = "", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div>
        {contentPosition}
        {children}
      </div>
    </div>
  );
}

export default Container;
