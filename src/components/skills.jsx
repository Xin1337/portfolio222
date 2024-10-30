import React from 'react';

function Skills() {
  return (
    <section className="skills">
            <h2>Skills</h2>
        <div className="skill-cards">
            <div className="skill-card">
                <div className="skill-percentage">95%</div>
                    <p>Website Design</p>
            </div>
            <div className="skill-card">
                <div className="skill-percentage">30%</div>
                    <p>UI/UX Design</p>
            </div>
            <div className="skill-card">
                <div className="skill-percentage">60%</div>
                    <p>Web Development</p>
            </div>
            <div className="skill-card">
                <div className="skill-percentage">50%</div>
                    <p>React.js</p>
            </div>
        </div>
    </section>
  );
}

export default Skills;
