import React from 'react'

import CardPaisL from '@/components/(wikipedia)/molecules/CardPaisL'
import MenuPais from '@/components/(wikipedia)/molecules/MenuPais'

import './NavPais.css'

type NavPaisProps = {
    nomePais: string
    imagemBandeira: string
    activeTab: string
    onTabChange: (tab: string) => void
}

// Section lateral esquerda, onde fica o card do pais e o menu para escolher a tela de informações
const NavPais: React.FC<NavPaisProps> = ({ nomePais, imagemBandeira, activeTab, onTabChange }) => {
    return (
        <div className='NavPais'>
            <CardPaisL
                nomePais={nomePais}
                imagemBandeira={imagemBandeira}
            />
            <MenuPais
                activeTab={activeTab}
                onTabChange={onTabChange}
            />
        </div>
    )
}

export default NavPais