import React ,{useEffect} from 'react'
import { BrowserRouter , Route , Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import FullWeb from './Components/fullweb'
import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga'


function App(props){

    useEffect(() => {
        ReactGA.initialize('UA-166692253-1')
        ReactGA.pageview('/')
    } , [])
    return(
        <div>
            
            
            <BrowserRouter>


            <Route path="/" component={FullWeb} exact={true} />
           
            </BrowserRouter>
        </div>
    )
}

export default App