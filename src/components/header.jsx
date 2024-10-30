import React from 'react';

function Header() {
  return (
    <header className="header">
        <div className="logo_content">
                <img src="Hire-Front-End-Developer.avif" alt="Reymhar Nufable Funclara" width={350} height={350} />
            <h1>Hello there! <br />
                <span className="name">
                    I'm, Reymhar Nufable Funclara
                </span>
            </h1>
        </div>
        <div className="focus">
            <div className="G">
                <p>
                    Website Designer
                </p>
            </div>
            <div className="U">
                <p>
                    Graphic Designer
                </p>
            </div>
            <div className="F">
                <p>
                    Web Developer
                </p>
            </div>
        </div>
    </header>
  );
}

export default Header;