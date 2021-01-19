import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ContactForm(props) {
  return (
    <form className="contact">
      <div className="form-group">
        <label htmlFor="breed">Breed Name:</label>
        <input
          value={props.contact}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="contact">
          Contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
