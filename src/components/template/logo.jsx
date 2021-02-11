import './logo.css'
import React from 'react'
/* import logo from '../../assets/images/logo.png' */
import {Link} from 'react-router-dom'

const Logo = props => 
    <aside className="logo">
        <Link to="/" className="logo">
          {/*   <img src={logo} alt="logo"/> */}
        </Link>
    </aside>

export default Logo;