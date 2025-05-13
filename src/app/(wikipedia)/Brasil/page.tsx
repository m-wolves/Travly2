'use client'
import React, { useState } from 'react';
import PagePais from '@/components/(wikipedia)/templates/PagePais'

const Brasil = () => {
    const [activeTab, setActiveTab] = useState('sobre') // Necessário para o Menu

    const infosColuna1 = [
        { esquerda: 'Capital', direita: 'Brasília' },
        { esquerda: 'Localização', direita: 'América do Sul' },
        { esquerda: 'Fuso Horário', direita: 'GTM-2~5' },
        { esquerda: 'Clima', direita: 'Tropical' }
    ]

    const infosColuna2 = [
        { esquerda: 'Idioma', direita: 'Português Brasileiro' },
        { esquerda: 'Saúde', direita: 'Pública (SUS)' },
        { esquerda: 'Governo', direita: 'Presidencialismo' }
    ]

    const sobreTexto = `Brasil, oficialmente República Federativa do Brasil, é o maior país da América do Sul e da região da América Latina, sendo o quinto maior do mundo em área territorial. É o único país na América onde se fala majoritariamente a língua portuguesa e o maior país lusófono do planeta, além de ser uma das nações mais multiculturais e etnicamente diversas, em decorrência da forte imigração oriunda de variados locais do mundo. Sua atual Constituição, concebe o Brasil como uma república federativa presidencialista, formada pela união dos 26 estados, do Distrito Federal e dos 5.571 municípios.`

    return (
        <div className='Brasil'>
            <PagePais
                    nomePais='Brasil'
                    imagemBandeira='https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg'
                    activeTab={activeTab}
                    onTabChange={setActiveTab}

                    sobreProps={{
                        title: 'Sobre',
                        infos: [infosColuna1, infosColuna2],
                        texto: sobreTexto,
                        contatos: [
                            { numero: 190, texto: 'Polícia' },
                            { numero: 192, texto: 'Ambulância' },
                            { numero: 193, texto: 'Bombeiros' }
                        ]
                    }}

                    pontosProps={{
                        pontos: [
                            {
                                titulo: 'Cristo Redentor',
                                descricao: 'O Cristo Redentor, presente dado pelos Franceses ao País Brasileiro no ano de 1931, é um monumento  localizado no Morro do Corcovado. A estátua de 38 metros de altura representa a figura de Jesus Cristo.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/cristo.jpg',
                                localizacao: 'Parque Nacional da Tijuca - Rio de Janeiro'
                            }
                        ]
                    }}
            />
        </div>
    )
}

export default Brasil