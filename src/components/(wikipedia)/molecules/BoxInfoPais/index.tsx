import React from 'react'
import InfoPais from '@/components/(wikipedia)/atoms/InfoPais'
import './BoxInfoPais.css'

// Define o tipo para cada linha da lista (duas colunas com conteúdo flexível)
type Linha = {
    esquerda: React.ReactNode 
    direita: React.ReactNode
}

type BoxInfoPaisProps = {
    linhas: Linha[] // Array com todas as linhas da lista
    className?: string // Classe CSS opcional para estilização externa
}

// Componente funcional que renderiza uma lista de linhas de duas colunas
const BoxInfoPais: React.FC<BoxInfoPaisProps> = ({ linhas, className }) => {
    return (
        <div className={`BoxInfoPais ${className || ''}`}>
            {linhas.map((linha, index) => ( // Cada item do array de linhas
                <InfoPais
                    key={index}
                    esquerda={linha.esquerda}
                    direita={linha.direita}
                />
            ))}
        </div>
    )
}

export default BoxInfoPais