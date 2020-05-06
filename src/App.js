import React from 'react'
import { BrowserRouter , Route , Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


import Home from './Components/Home'
import About from './Components/AboutMe'
import Contcat from './Components/Contact'

function App(props){
    return(
        <div>
            <BrowserRouter>
           
            
            
            

            <Route path="/" component={Home} exact={true} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contcat} /> */}
            
            </BrowserRouter>
        </div>
    )
}

export default App