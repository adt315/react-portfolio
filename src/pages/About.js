import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Angela Tooley</h1>
        <h2>Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hi there!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            My name is Angela Tooley, and I am currently a student in the UConn Coding Boot Camp.  My career goal is to become a Full Stack Web Developer.  I am excited to learn all about Web Development, as it will allow me to be both creative and analytical.  I have a Bachelor's Degree in Business Administration from Texas Tech University, and most recently I worked as a Therapeutic Recreation Director in long-term care.
            </p>
            <p>
            Currently I live in Connecticut with my husband and toddler son, Owen.  In my free time I enjoy making jewelry and crafts and teaching jewelry-making classes to people of all ages.  
            </p>
            <p>
            To learn more about me, please check out my <a target="_blank" href="../public/Resume.pdf">resume.</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
