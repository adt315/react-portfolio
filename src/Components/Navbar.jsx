import React from "react";


function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-sm navbar-light bg-light container-fluid">
        <span className="navbar-brand mb-0 h1 text-white">Angela Tooley</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link active" href="index.html">About</a>
                <a className="nav-item nav-link" href="portfolio.html">Portfolio</a>
                <a className="nav-item nav-link" href="contact.html">Contact</a>
                <a target="_blank" className="nav-item nav-link" href="./assets/Resume.pdf">Resume</a>
            </div>
        </div>
    </nav> 
</div>     
    )
};

export default Navbar;