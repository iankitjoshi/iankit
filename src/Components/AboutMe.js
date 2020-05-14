import React from 'react'

function About(){
    return(
        <div style={{marginTop:'6%'}}>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet" />




            <div className="container">

                <h4 className="about-h4">About:</h4>
                    <br />
                    <p className="about-p">I am currently working as a Full Stack Developer at <span className="techindustan"> <u><a style={{color:'#f6ac00'}} href="https://techindustan.com/" target="_blank">tecHindustan </a>  </u></span>, which is where my passion for design and development converge. I've been developing applications and making Website using Javascript, React and Node. I love to crete something diffrent like my imagination. Outside of work, I live in <span className="alwar"><u><a style={{color:'#f6ac00'}}href="https://en.wikipedia.org/wiki/Alwar" target="_blank">Alwar </a>  </u></span>. I love spending time with friends and family and i like playing and watch Cricket. I'm foody i love to eat, and Tea lover also. I like Adventures and go to where I've never been before. I'd love to get tea and get to know you, so don’t hesitate to get in touch.</p><br /><br />
                <h4 className="about-h4">Services:</h4>
                    <br />
                    <h6 className="about-h6">UI/UX DESIGN</h6>
                    <br />
                    <p className="about-p">UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience.</p><br />

                    <h6 className="about-h6">FRONT END DEVELOPMENT</h6>
                    <br />
                    <p className="about-p">Front End Development is building out the visual components of a website. Using HTML, CSS, Javascript and React, I build fast, interactive websites. This also may include integrating a CMS.</p><br />

                    <h6 className="about-h6">BACK END DEVELOPMENT</h6>
                    <br />
                    <p className="about-p">Back end Development refers to the server side of development where you are primarily focused on how the site works. I'm using NodeJS with User Authentication.</p>
    
            </div>
            <br /><br /><hr />
            
        </div>
    )
}

export default About