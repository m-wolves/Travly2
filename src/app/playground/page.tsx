'use client'
import React, { useState } from 'react';

import CardPaisL from '@/components/(wikipedia)/molecules/CardPaisX'
import MenuPais from '@/components/(wikipedia)/molecules/MenuPais'
import ButtonFavoritar from '@/components/(wikipedia)/atoms/ButtonFavoritar'
import BoxAvaliar from '@/components/(wikipedia)/atoms/BoxAvaliar'
import ContentPais from '@/components/(wikipedia)/organisms/ContentPais'
import NavPais from '@/components/(wikipedia)/organisms/NavPais'
import ActionsPais from '@/components/(wikipedia)/organisms/ActionsPais';
import PagePais from '@/components/(wikipedia)/templates/PagePais';
import BoxInfoPais from '@/components/(wikipedia)/molecules/BoxInfoPais';
import ButtonLogin from '@/components/(main-site)/atoms/ButtonLogin';
import TitleLogin from '@/components/(main-site)/atoms/TitleLogin';
import LinkLogin from '@/components/(main-site)/atoms/LinkLogin';
import InputLogin from '@/components/(main-site)/atoms/InputLogin';
import AceitarTermos from '@/components/(main-site)/atoms/AceitarTermos';
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
            <InputLogin type='text' placeholder='texto' />
            <InputLogin type='password' placeholder='senha' />
            <AceitarTermos />
            <CardLogin mode={mode} onChangeMode={setMode} />
        </div>
    )
}

export default Playground