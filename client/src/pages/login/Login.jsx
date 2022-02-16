import React from 'react'

import logo from '../../assets/logo/logo.png'
import logoText from '../../assets/logo/logo-text.png'
import { Button } from '@material-ui/core'

const Login = () => {
    const signIn = () => {
        //sign in...
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="" />
                <img src={logoText} style={{ transform: "scale(0.3)"}} alt="" />
            </div>
            <Button type="submit" onClick={signIn}>

            </Button>
        </div>
    )
}

export default Login