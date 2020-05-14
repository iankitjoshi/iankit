import React from 'react'
import Homes from './Homes'
import Home from './icons'
import About from './AboutMe'
import Contcat from './Contact'

function FullWeb(){
    return(
        <div style={{border: '6px solid rgb(73,70,71)'}}>

            <Homes />

            <About />

            <Contcat />

            {/* <Home /> */}

        </div>
    )
}

export default FullWeb