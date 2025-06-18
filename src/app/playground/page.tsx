'use client'
import React, { useState } from 'react';

import ButtonLogin from '@/components/(main-site)/atoms/ButtonLogin';
import TitleLogin from '@/components/(main-site)/atoms/TitleLogin';
import LinkLogin from '@/components/(main-site)/atoms/LinkLogin';
import InputLogin from '@/components/(main-site)/atoms/InputLogin';
import CardLogin from '@/components/(main-site)/organisms/CardLogin';

const Playground = () => {
    const [activeTab, setActiveTab] = useState('sobre') // Necessário para o Menu
    const [mode, setMode] = useState<'login' | 'register' | 'forgot' | 'emailSent' | 'reset'>('login');

    return (
        <div className="bg-white">
            <h1>Playground</h1>
            <ButtonLogin text='teste' />
            <TitleLogin text='teste' />
            <LinkLogin text='test ' txtLink='link' link='#' />
            <LinkLogin txtLink='link' link='#' />
            <div style={{width: 190}}>
                <InputLogin type='text' placeholder='texto' error={true} errorMessage='O nome de usuário já existe.<br/>teste' />
            </div>
            <InputLogin type='password' placeholder='senha' />
            <CardLogin mode={mode} onChangeMode={setMode} />
        </div>
    )
}

export default Playground