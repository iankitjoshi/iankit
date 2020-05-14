import React from 'react'
import { BrowserRouter , Route , Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import FullWeb from './Components/fullweb'

import ReactGA from 'react-ga'

function initizeAnalytics(){
    ReactGA.initialize('UA-166692253-1')
    ReactGA.pageview('/')
}

function App(props){
    return(
        <div>
            <BrowserRouter>


            <Route path="/" component={FullWeb} exact={true} />
           
            </BrowserRouter>
        </div>
    )
}

export default App