'use client'
import React, { useState } from 'react';

import CardPaisL from '@/components/molecules/CardPaisL'
import MenuPais from '@/components/molecules/MenuPais'
import ButtonFavoritar from '@/components/atoms/ButtonFavoritar'
import BoxAvaliar from '@/components/atoms/BoxAvaliar'
import ContentPais from '@/components/organisms/ContentPais'

const Playground = () => {
    const [activeTab, setActiveTab] = useState('sobre') // Necessário para o Menu

    return (
        <div className="bg-gray-400">
            <h1>Playground</h1>
            <CardPaisL
                nomePais="Brasil"
                imagemBandeira="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
            />
            <CardPaisL
                nomePais="Argentina"
                imagemBandeira="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
            />
            <MenuPais 
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <ButtonFavoritar />
            <BoxAvaliar />
            <ContentPais />
        </div>
    )
}

export default Playground