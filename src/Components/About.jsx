import React from 'react'

const About = () => {
  return (
    <>
      <div id='abomain'>
        <div className='skills'>
          <p>Skills acquired so far</p>
          <h1>Skillset</h1>
          <div className='skillset'>

            <img src='html5.webp' />
            <img src='CSS.svg' className='css' />
            <img src='javascript.webp' className='js' />
            <img src='nodejs.webp' className='node' />
            <img src='react.png' className='react' />
            <img src='express.png' className='express' />
            <img src='mongodb.png' className='mongodb' />

          </div>
          <div class="parallax2">
            <div className='abouts'>
              <p className='abop'>Get To Know Me</p>
              <h2 className='abo'>About Me</h2>
              <div className='about' id='about'>
                <p>Hi, I'm Rushil Shah, a passionate web developer specializing in creating stunning, user-friendly websites that drive engagement and conversions.</p>
                <p className='purple'>With a degree in Computer Science from Parul University, I have honed my skills in front-end and back-end development, ensuring a seamless user experience.</p>
                <p>I specialize in HTML, CSS, JavaScript, React, Node.js, and Python. I have extensive experience with responsive design, API integration, and database management.</p>
              </div>
              <div className='edu'>
                <h1>Education</h1>
                <h3>Diploma in Computer Engineering (2019-2022)</h3>
                <h3>Batchelors in Computer Science and Engineering (2022 - Present)</h3>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
