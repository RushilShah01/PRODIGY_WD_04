import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import Typed from 'typed.js'
import CardComponent from './CardComponent';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Learner.", "Coder.", "Web Developer."],
      startDelay: 0,
      typeSpeed: 75,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div class="parallax">
      <div className='home' id='home'>
        <main>
          <section className="firstSection">
            <div className="leftSection">
              <div>My name is <span class="purple">Rushil Shah.</span></div><div className='text'> I am a passionate</div>
              <span ref={el}></span>
              <div className="buttons">
                <a href='Rushil Resume.pdf'><button className="btn">Download Resume</button></a>
                <a href='https://github.com/RushilShah01'><button className="btn">Visit Github</button></a>
              </div>
            </div>
            {/* <div className="rightSection">
              <img src="./rushil.jpg" alt="Rushil Shah" />
            </div> */}
          </section>
          
          <hr />
          <section className="secondSection">
            <span className="text-gray">What I have done so far</span>
            <h1>Work Experience</h1>
            <div className="box">
              <div className="vertical">
                <img className="image-top" src="./greatlearning-brand.svg" alt="Great Learning" />
                <div className="vertical-title">
                  Campus Ambassador
                  <h3> (Aug '21 to Aug '22)</h3>
                </div>
                <div className="vertical-desc">
                  Served as a campus ambassador for Great Learning Academy while pursuing my diploma degree.
                </div>
              </div>
              <div className="vertical">
                <img className="image-top" src="./logo.svg" alt="Prodigy Infotech" />
                <div className="vertical-title">
                  Web Development Intern
                  <h3> (May '24 to Jun '24)</h3>
                </div>
                <div className="vertical-desc">
                  Worked as a web-development intern at Prodigy Infotech where I was responsible for developing
                  several front-end projects.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home