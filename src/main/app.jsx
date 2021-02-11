import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './app.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './route'

import Logo from '../components/template/logo'
import Nav from '../components/template/nav'

import Footer from '../components/template/footer'

const App = props => 
    <BrowserRouter>
        <div className="App">
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>

export default App;