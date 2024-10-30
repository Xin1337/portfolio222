import React from 'react';

function About() {
  return (
    <section className="about">
        <div className="about-content">
            <h2>About Me</h2>
            <p> <br />
                I'm a passionate and skilled website designer,<br /> 
                Graphic designer, and intermediate web developer with a strong <br/ >
                focus on creating visually appealing and user-friendly, <br />
                designs.<br /><br/>
            </p>
            <p>
                I have a keen eye for detail and a love for crafting <br />
                innovative solutions that exceed client expectations.
            </p>    
        </div>  
        <div className="profile">
            <img src="profile.avif" alt="Reymhar Nufable Funclara" width={350} height={360} />
        </div>
    </section>
  );
}

export default About;