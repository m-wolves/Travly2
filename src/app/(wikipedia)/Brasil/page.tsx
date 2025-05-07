'use client'
import React, { useState } from 'react';

import CardPaisL from '@/components/molecules/CardPaisL'
import MenuPais from '@/components/molecules/MenuPais'
import ButtonFavoritar from '@/components/atoms/ButtonFavoritar'
import BoxAvaliar from '@/components/atoms/BoxAvaliar'
import ContentPais from '@/components/organisms/ContentPais'

import './Brasil.css'

const Brasil = () => {
    const [activeTab, setActiveTab] = useState('sobre') // Necessário para o Menu

    return (
        <div className='Background'>
            <div className='Content'>
                <div className='LeftSection'>
                    <CardPaisL
                        nomePais="Brasil"
                        imagemBandeira="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
                    />
                    <MenuPais
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                </div>
                <ContentPais />
                <div className='RightSection'>
                    <ButtonFavoritar />
                    <BoxAvaliar />
                </div>
            </div>
        </div>
    )
}

export default Brasil