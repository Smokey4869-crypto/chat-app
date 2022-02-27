import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo/logo.png'
import logoText from '../../assets/logo/logo-text.png'
import { Button, CircularProgress } from '@material-ui/core'

const Login = () => {

    
    const handleClick = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} style={{marginTop: "50px"}} alt="" />
                <img src={logoText} style={{ transform: "scale(0.3)"}} alt="" />
            </div>
            <div className='login__input' > 
                <div className="login__input__top">
                    <input type="text" placeholder='Email address or phone number'/>
                    <input type="text" placeholder='Password' />
                    <Button type="submit" onSubmit={handleClick}>
                        Login
                    </Button>
                    <h4>
                        <Link to='/'>Forgotten Password?</Link>
                    </h4>
                </div>
                <hr/>
                <div className="login__input__bottom">
                    <Button type="submit" style={{fontSize: "0.6rem"}} onSubmit={handleClick}>
                        Create new account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login