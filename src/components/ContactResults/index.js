import React from "react";
import "./style.css";

function ContactResults(props) {
  return (
    <ul className="list-group contact-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default ContactResults;
