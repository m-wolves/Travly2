'use client'
import React, { useState } from 'react';

import CardPaisL from '@/components/(wikipedia)//molecules/CardPaisL'
import MenuPais from '@/components/(wikipedia)//molecules/MenuPais'
import ButtonFavoritar from '@/components/(wikipedia)/atoms/ButtonFavoritar'
import BoxAvaliar from '@/components/(wikipedia)/atoms/BoxAvaliar'
import ContentPais from '@/components/(wikipedia)/organisms/ContentPais'
import NavPais from '@/components/(wikipedia)/organisms/NavPais'
import ActionsPais from '@/components/(wikipedia)/organisms/ActionsPais';
import PagePais from '@/components/(wikipedia)/templates/PagePais';
import BoxInfoPais from '@/components/(wikipedia)/molecules/BoxInfoPais';

const Playground = () => {
    const [activeTab, setActiveTab] = useState('sobre') // Necessário para o Menu

    return (
        <div className="bg-gray-400">
            <h1>Playground</h1>
            <BoxInfoPais 
                linhas={[
                    { esquerda: 'Capital', direita: 'Brasília'},
                    { esquerda: 'Localização', direita: 'América do Sul'}
                ]}
            />
        </div>
    )
}

export default Playground