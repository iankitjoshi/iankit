import React from 'react'
import Icon from './icons'

function Contcat(){
    return(
        <div style={{textAlign:'center'}}>
             <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />

            <h3 className="contact-h3" >Interested in doing a project together ?</h3>
            <a href="mailto:ankitkumarjoshi123@gmail.com" className="email-me  btn btn-outline-warning">Email Me </a>

            <h4 style={{fontFamily:"'Roboto Slab', 'serif'"}}> - Ankit Joshi -</h4> <br/>
            <Icon />
            <br /><br /> <hr />

             <h6 style={{marginTop:'3%',marginBottom:'3%'  , fontFamily:"'Roboto Slab', 'serif'"}}>Copyright Ankit Joshi 2020</h6><br/>
        </div>
    )
}

export default Contcat