import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dd>{props.img}</dd>
      <dt>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
      <dd>{props.description2}</dd>
    </div>
  );
}

export default Entry;