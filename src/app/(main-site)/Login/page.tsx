'use client'
import { useState } from 'react';
import './Login.css'

import Logo from "@/components/(main-site)/atoms/Logo"
import CardLogin from "@/components/(main-site)/organisms/CardLogin"

const Login = () => {
    const [mode, setMode] = useState<'login' | 'register' | 'forgot' | 'emailSent' | 'reset'>('login');

    return (
        <div className="LoginPage">
            <div className='logo'>
                <Logo />
            </div>
            <div>
                <CardLogin mode={mode} onChangeMode={setMode} />
            </div>
        </div>
    )
}

export default Login