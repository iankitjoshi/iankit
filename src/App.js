import React from 'react'
import { BrowserRouter , Route , Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import FullWeb from './Components/fullweb'


function App(props){
    return(
        <div>
            <BrowserRouter>
           
            
            
            

            <Route path="/" component={FullWeb} exact={true} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contcat} /> */}
            
            </BrowserRouter>
        </div>
    )
}

export default App