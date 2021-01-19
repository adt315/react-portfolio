import React, { Component } from "react";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";
import ContactResults from "../components/ContactResults";

class Contact extends Component {
  state = {
    contact: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  handleInputChange = event => {
    this.setState({ contact: event.target.value });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.contact)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Contact Me</h1>
  
          <ContactForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <ContactResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Contact;
