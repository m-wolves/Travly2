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
                            },
                            {
                                titulo: 'Pelourinho',
                                descricao: 'Contendo várias partes da época Brasil Colonial, o Pelourinho guarda a arquitetura e a história de séculos passados, com suas ruas em paralelepípedo e várias atrações e manifestações culturais popularmente Brasileiras.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/pelourinho.jpg',
                                localizacao: 'Salvador - Bahia'
                            },
                            {
                                titulo: 'Porto de Galinhas',
                                descricao: 'Uma das praias mais famosas do Brasil, Porto de Galinhas se destaca pelas piscinas naturais e água límpida de cor esverdeada. A região da praia de Porto de Galinhas é extremamente convidativa aos viajantes pela quantidade de bares e hoteis..',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/porto.jpg',
                                localizacao: 'Ipojuca - Pernambuco'
                            },
                            {
                                titulo: 'Lençóis maranhenses',
                                descricao: 'Contendo uma área de cerca de 1.500 quilômetros quadrados, os lençois maranhenses carregam o título de maior campo de dunas da América do Sul. A paisagem fala por si só, contendo lagoas de água doce, dunas e uma areia incrivelmente branca.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/lencois.jpg',
                                localizacao: 'Barreirinhas - Maranhão'
                            },
                            {
                                titulo: 'teatro amazonas',
                                descricao: 'Um dos mais importantes teatros para o Brasil, o teatro amazonas foi erguido no ano de 1896 e se tornou o cartão postal do estado brasileiro de Manaus. A construção remonta a arquitetura do século XIX com suas fortes influências na cultura barroca.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/teatroamazonas.jpg',
                                localizacao: 'Largo de São Sebastião - Manaus'
                            },
                            {
                                titulo: 'gruta da lagoa azul',
                                descricao: 'O monumento natural é formado por duas cavernas de formação calcária, foi descoberta no ano de 1924 por um Indigena da etnia Terena. É um dos mais importantes patrimônios nacionais e um dos grandes atrativos naturais do estado brasileiro do Mato Grosso do Sul.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/gruta.jpg',
                                localizacao: 'Bonito - Mato Grosso do Sul'
                            },
                            {
                                titulo: 'PARQUE ESTADUAL DO JALAPão',
                                descricao: 'É o maior parque do estado brasileiro do Tocantins, a vegetação do parque é variada, contendo também diversas espécies de animais silvestres. A paisagem do Parque Estadual do Jalapão é lugar de belezas naturais incomuns, capazes de maravilhar qualquer um.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/jalapao.jpg',
                                localizacao: 'Mateiros - Tocantis'
                            },
                            {
                                titulo: 'CENTRO HISTóRICO DE OURO PRETO',
                                descricao: 'Conhecida pela arquitetura barroca, a cidade colonial de Ouro Preto já foi o palco da incansável busca pelo ouro entre os séculos XVII e XVIII, no Brasil. A cidade que guarda um pedaço importante para a história do estado de Minas Gerais, possui uma beleza secular, contendo fontes, pontes e praças.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/ouropreto.jpg',
                                localizacao: 'Ouro Preto - Minas Gerais'
                            },
                            {
                                titulo: 'CATARATAS DO IGUAçu',
                                descricao: 'Um dos espetáculos mais lindos do Brasil, é a queda do Rio Iguaçu, que forma as Cataratas do Iguaçu. As Cataratas do Iguaçu, que é considerada Patrimônio da Humanidade, possuem cerca de 275 pontos de quedas de água, atingindo 80 metros.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/cataratas.png',
                                localizacao: 'Foz do Iguaçu - Paraná'
                            },
                            {
                                titulo: 'MUSEU NACIONAL DA REPúBLICA',
                                descricao: 'O Museu Nacional da República, que foi projetado em formato de semi esfera, e inaugurado no ano de 2006, tem como principal missão promover as artes visuais para todos os públicos, de forma dialógica, e ser um espaço de incentivo à curiosidade, sensibilização do olhar e produção de conhecimento, por meio de ações de formação do acervo, salvaguarda, pesquisa, comunicação e educação.',
                                imagemUrl: '/assets/paises/brasil-assets/pontos/museunacionaldarepublica.jpg',
                                localizacao: 'Brasília - Distrito Federal'
                            }
                        ]
                    }}

                    eventosProps={{
                        eventos: [
                            {
                                titulo: 'reveillon',
                                descricao: 'Criado em 1967, pelo Papa Paulo VI, esse feriado tem o objetivo de celebrar a união e a paz mundial. Apesar de ter sido criado por um religioso, a data é comemorada em todo o mundo e por diversas religiões.',
                                imagem: '/assets/paises/brasil-assets/events/reveillon.png',
                                tipo: 'FERIADO NACIONAL',
                                data: '01 de Janeiro'
                            },
                            {
                                titulo: 'carnaval',
                                descricao: 'O Carnaval é um período de festas populares realizadas durante o dia e à noite. As comemorações ocorrem todos os anos, nos meses de fevereiro ou março, começando no sábado e estendendo-se até a Terça-feira de Carnaval. As celebrações carnavalescas terminam na Quarta-feira de Cinzas, dia que marca o início da Quaresma — período de 40 dias que segue até a Sexta-feira Santa, dois dias antes da Páscoa.',
                                imagem: '/assets/paises/brasil-assets/events/carnaval.png',
                                tipo: 'PONTO FACULTATIVO',
                                data: 'Fevereiro / Março'
                            },
                            {
                                titulo: 'sexta-feira santa',
                                descricao: 'A Semana Santa é uma tradição cristã que faz parte da celebração da Páscoa. É o momento que os cristãos relembram e celebram a última semana da vida de Jesus Cristo, passando por sua prisão, crucificação e ressurreição. Os eventos dessa semana são parte do que os cristãos chamam de Paixão de Cristo.',
                                imagem: '/assets/paises/brasil-assets/events/semana-santa.png',
                                tipo: 'FERIADO',
                                data: 'Março / Abril'
                            },
                            {
                                titulo: 'tiradentes',
                                descricao: 'Este feriado é em homenagem a um herói brasileiro, Joaquim José da Silva Xavier – Tiradentes, que lutou pela independência do país na Inconfidência Mineira. Esse dia lembra a data da sua morte.',
                                imagem: '/assets/paises/brasil-assets/events/tiradentes.png',
                                tipo: 'FERIADO',
                                data: '21 de Abril'
                            },
                            {
                                titulo: 'sao joao',
                                descricao: 'Festa Junina é uma festividade popular que é realizada no Brasil durante o mês de junho. A Festa Junina é marcada por festividades ao longo de todo o mês de junho, sendo caracterizadas por comidas típicas, muitas delas à base de milho e amendoim. As Festas Juninas possuem danças típicas, como a quadrilha, possuem fogueiras e são decoradas com bandeirolas. As pessoas costumam usar roupas que se associam com vestimentas caipiras, como camisas xadrez.',
                                imagem: '/assets/paises/brasil-assets/events/sao-joao.png',
                                tipo: 'FERIADO',
                                data: '24 de Junho'
                            },
                            {
                                titulo: 'Dia mundial do trabalho',
                                descricao: 'O dia de trabalho ficou marcado depois de manifestações de trabalhadores americanos que reivindicavam melhorias. Aqui no Brasil é um feriado nacional e bastante valorizado pela classe trabalhadora.',
                                imagem: '/assets/paises/brasil-assets/events/dia-trabalho.png',
                                tipo: 'FERIADO NACIONAL',
                                data: '01 de Maio'
                            },
                            {
                                titulo: 'independencia do brasil',
                                descricao: 'O 7 de setembro é uma das datas comemorativas mais importantes do Brasil, justamente por abrigar um dos principais acontecimentos da história do país: a independência. Foi nesse dia, em 1822, que d. Pedro deu início a nossa trajetória como nação independente. Atualmente, o 7 de setembro é um feriado nacional que é marcado por comemorações públicas nas grandes cidades.',
                                imagem: '/assets/paises/brasil-assets/events/indepedencia-brasil.png',
                                tipo: 'FERIADO NACIONAL',
                                data: '07 de Setembro'
                            },
                            {
                                titulo: 'nossa senhora aparecida',
                                descricao: 'Feriado religioso utilizado para homenagear Nossa Senhora Aparecida, considerada a Padroeira do Brasil. Na mesma data é comemorado o dia das crianças, o que faz muita gente confundir o motivo do feriado.',
                                imagem: '/assets/paises/brasil-assets/events/nossa-senhora.png',
                                tipo: 'FERIADO',
                                data: '12 de Outubro'
                            },
                            {
                                titulo: 'finados',
                                descricao: 'Um dos rituais mais tradicionais desse dia é a visita aos túmulos e cemitérios, esse feriado foi criado para homenagear as pessoas que já faleceram.',
                                imagem: '/assets/paises/brasil-assets/events/finados.png',
                                tipo: 'FERIADO',
                                data: '02 de Novembro'
                            },
                            {
                                titulo: 'Consciencia Negra',
                                descricao: 'A consciência negra é, basicamente, o orgulho da cor da pele negra. A ideia foi extraída dos movimentos sociais que lutam contra o racismo e pela igualdade racial. O Dia da Consciência Negra é também um dia de luta pela igualdade racial.',
                                imagem: '/assets/paises/brasil-assets/events/consciencia-negra.png',
                                tipo: 'FERIADO NACIONAL',
                                data: '20 de Novembro'
                            },
                            {
                                titulo: 'natal',
                                descricao: 'Feriado religioso e muito especial dedicado ao nascimento de Jesus Cristo. É uma data em que sentimentos de amor, gratidão e humildade são mais expressados, promovendo maior interação e carinho entre as pessoas.',
                                imagem: '/assets/paises/brasil-assets/events/natal.png',
                                tipo: 'FERIADO NACIONAL',
                                data: '25 de Dezembro'
                            }
                        ]
                    }}
            />
        </div>
    )
}

export default Brasil