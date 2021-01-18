import React from 'react';

function Contact() {
  return (
    <div>
        <p className="my-info">My Email: angela_dyan@hotmail.com</p>
        <p className="my-info">My Phone: (817)944-9024</p>
        <button type="button" className="btn btn-info"><a className="a-button" href="https://www.linkedin.com/in/angela-tooley-7107468/" target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a></button>  
        <button type="button" className="btn btn-info"><a className="a-button" href="https://github.com/adt315" target="_blank"><i class="fab fa-github-square"></i>GitHub</a></button>  
        <hr /> 
        <h1>Contact Me</h1>
        <label>Your Name</label>
        <input type="text" className="form-control" placeholder="Name" />
        <label>Your Email</label>
        <input type="email" className="form-control" placeholder="Email">
        <label>Message</label>   
        <textarea className="form-control" placeholder="Message"></textarea>
        <a href="#" className="btn btn-secondary">Submit</a>
    </div>
    );
}

export default Contact;
