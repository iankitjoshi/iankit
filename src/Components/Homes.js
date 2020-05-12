import React from 'react'

const img = require('../Assets/Homes.jpg')

function Homes(){
    return(
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
            <div className="containers">
                <img src={img} className="home-img" />
                <h1 className="centered">Hi, i'm Ankit. Full Stack Developer, I design & build user interfaces. </h1>
            </div>

        </div>
    )
}

export default Homes