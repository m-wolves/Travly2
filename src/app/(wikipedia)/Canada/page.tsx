'use client'
import React, { useState } from 'react';
import PagePais from '@/components/(wikipedia)/templates/PagePais'

const Canada = () => {
    const [activeTab, setActiveTab] = useState('sobre') // Necessário para o Menu

    const infosColuna1 = [
        { esquerda: 'Capital', direita: 'Ottawa' },
        { esquerda: 'Localização', direita: 'América do Norte' },
        { esquerda: 'Fuso Horário', direita: 'GMT-4' },
        { esquerda: 'Clima', direita: 'Temperado e Ártico' }
    ]

    const infosColuna2 = [
        { esquerda: 'Idioma', direita: 'Inglês e Francês' },
        { esquerda: 'Saúde', direita: 'Pública (Medicare)' },
        { esquerda: 'Governo', direita: 'Monarquia Constitucional e Parlamentarismo' }
    ]

    const sobreTexto = `Canadá, oficialmente Reino do Canadá, é o segundo maior país do mundo em área territorial, ficando atrás apenas da Rússia. Localizado na América do Norte, faz fronteira ao sul com os Estados Unidos e é banhado pelos oceanos Atlântico, Pacífico e Ártico. O país tem duas línguas oficiais, o inglês e o francês, sendo uma das nações mais bilíngues e multiculturais do mundo, resultado de uma longa história de colonização e imigração de diversos povos. O Canadá é uma monarquia constitucional com regime parlamentarista, tendo como chefe de Estado o monarca britânico, representado no país por um governador-geral, e como chefe de governo o primeiro-ministro. É uma federação composta por dez províncias e três territórios, cada um com seus próprios governos e certa autonomia administrativa.`

    return (
        <div className='Canada'>
            <PagePais
                    backgroundImage="/assets/paises/canada-assets/canada-fundo.avif"
                    backgroundPosition="center center"

                    nomePais='Canada'
                    imagemBandeira='https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg'
                    activeTab={activeTab}
                    onTabChange={setActiveTab}

                    sobreProps={{
                        title: 'Sobre',
                        infos: [infosColuna1, infosColuna2],
                        texto: sobreTexto,
                        contatos: [
                            { numero: 911, texto: 'Polícia' },
                            { numero: 911, texto: 'Ambulância' },
                            { numero: 911, texto: 'Bombeiros' }
                        ]
                    }}

                    pontosProps={{
                        pontos: [
                            {
                                titulo: 'Cataratas de Niágara',
                                descricao: 'Um dos lugares mais procurados e frequentados pelos turistas, as Cataratas de Niágara são um conjunto de grandes cataratas, localizadas entre a fronteira do Canadá e Estados Unidos.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/cataratas.jpg',
                                localizacao: 'Niagara Falls, NY 14303, Estados Unidos'
                            },
                            {
                                titulo: 'Parque Nacional de Banff',
                                descricao: 'É o parque nacional mais velho do Canadá, sendo estabelecido em 1885 entre as montanhas Rochosas. O cenário é lindo, sendo composto por altas montanhas e lindos lagos, ótimo para aqueles que querem ver as belezas naturais e também um simples piquenique.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/banff.jpeg',
                                localizacao: 'Improvement District No. 9, AB T0L, Canadá'
                            },
                            {
                                titulo: 'A Velha cidade de Quebec',
                                descricao: 'Quebec, considerada uma das cidades mais antigas do Canadá e também o Patrimônio Mundial da Unesco, tem uma vasta história em sua parte mais antiga, que remonta aos séculos XVII e XIX com construções de arquitetura francesa. Há muito o que se ver nas ruas de Old Quebec.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/quebec.jpg',
                                localizacao: 'Quebec, Canadá'
                            },
                            {
                                titulo: 'Ilha de Orleães',
                                descricao: 'A ilha que fica no Rio São Lourenço, a poucos quilômetros do centro de Quebec, lá é possível desfrutar da cultura e da estética vindas do século XIX.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/ilha.jpg',
                                localizacao: 'Rio Saint Lawrence'
                            },
                            {
                                titulo: 'Jardim Botânico de Montreal',
                                descricao: 'Considerado o segundo maior jardim botânico do mundo, o Jardim Botânico de Montreal conta com mais de 22 mil espécies de flores e plantas. Capaz de proporcionar uma experiência incrível com seus jardins temáticos, lá é possível desfrutar da beleza natural da natureza.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/jardim.jpg',
                                localizacao: '4101 R. Sherbrooke E, Montréal, QC H1X 2B2, Canadá'
                            },
                            {
                                titulo: 'Vilarejo de Tadoussac',
                                descricao: 'Um pequeno vilarejo, com menos de 1.000 habitantes, localizado no Rio Saint Lawrence. Bastante procurado para a vista e observação de baleias. Também há alguns parques nacionais, com isso, Tadoussac oferece uma linda visão com montanhas, rios, lagos, rochedos e vegetação.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/vilarejo.jpeg',
                                localizacao: 'Quebec, Canadá'
                            },
                            {
                                titulo: 'Cn Tower',
                                descricao: 'A Torre Cn faz sucesso desde sua inauguração no ano de 1970, com mais de 550 metros de altura, se categorizando como a 3 maior torre do mundo, de lá é possível ter uma visão incrível e panorâmica de toda a cidade de Toronto, no topo, também é possível encontrar restaurantes que oferecem uma experiência única.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/cn.webp',
                                localizacao: '290 Bremner Blvd, Toronto, ON M5V 3L9, Canadá'
                            },
                            {
                                titulo: 'Stanley Park',
                                descricao: 'Sendo o Stanley Park o maior parque urbano do Canadá, ele oferece em sua grande área belos bosques e até mesmo praias, lá é possível andar de bicicleta, correr, caminhar e praticar atividades físicas livremente.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/stanley.jpg',
                                localizacao: 'Vancouver, BC V6G 1Z4, Canadá'
                            },
                            {
                                titulo: 'Estação Whistler',
                                descricao: 'A estação que oferece duas montanhas para a prática de esqui na neve, sendo considerada como uma das 10 melhores do planeta para a prática do esporte, Whistler oferece mais de 200 pistas para esqui e cinco parques, se tornando um paraíso para os entusiastas de ski e para os turistas e visitantes.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/estacao.png',
                                localizacao: '4545 Blackcomb Way, Whistler, BC V0N 1B4, Canadá'
                            },
                            {
                                titulo: 'Ripley’s Aquarium of Canada',
                                descricao: 'O aquário contém várias e várias espécies de vida aquática, peixes, águas-vivas e seres da água exóticos. Proporciona um dia incrível praticamente imerso dentro de um tanque submerso.',
                                imagemUrl: '/assets/paises/canada-assets/pontos/aquario.jpg',
                                localizacao: '288 Bremner Blvd, Toronto, ON M5V 3L9, Canadá'
                            }
                        ]
                    }}

                    eventosProps={{
                        eventos: [
                            {
                                titulo: 'New Year’s Day (Ano Novo)',
                                descricao: 'O primeiro feriado do ano no Calendário do Canadá e de vários outros países, apesar disso, o ano novo não é comemorado tão fervorosamente pelos canadenses pelo fato de acontecer durante o inverno, todos preferem, portanto, estar dentro de lugares quentinhos ao invés de comemorar pelas ruas.',
                                imagem: '/assets/paises/canada-assets/events/anonovo.jpg',
                                tipo: 'FERIADO NACIONAL',
                                data: '01 de Janeiro'
                            },
                            {
                                titulo: 'Chinese New Year (Ano Novo Chinês)',
                                descricao: 'Apesar de não ser um feriado nacional, o ano novo chines é popularmente comemorado pela grande comunidade chinesa que reside no país.',
                                imagem: '/assets/paises/canada-assets/events/anochines.jpeg',
                                tipo: 'FERIADO',
                                data: '16 de fevereiro'
                            },
                            {
                                titulo: 'St Patrick’s Day (Dia de São Patrício)',
                                descricao: 'O Dia de São Patrício tem uma forte influência cultural no Canadá mesmo sendo de origem irlandesa. Como costuma ser comemorado, os canadenses colocam roupas verdes e chapéus temáticos, além de bares e pubs ficarem lotados para o consumo de cerveja.',
                                imagem: '/assets/paises/canada-assets/events/patrick.webp',
                                tipo: 'FERIADO',
                                data: '17 de março'
                            },
                            {
                                titulo: "Victoria's Day (Dia da Rainha Victoria)",
                                descricao: 'Sendo comemorado somente no Canadá, o aniversário da rainha Victoria sempre é comemorado pelos Canadenses pelo fato de que, a monarca foi uma das mais importantes das rainhas e também influenciou a história do país.',
                                imagem: '/assets/paises/canada-assets/events/victoria.jpeg',
                                tipo: 'FERIADO',
                                data: '23 de maio'
                            },
                            {
                                titulo: 'National Indigenous Peoples Day (Dia dos Povos Nativos)',
                                descricao: 'Este feriado, apesar de ter um cunho importante para a lembrança dos povos originários que estavam na terra antes dos colonos, é comemorado somente nos Territórios da região Noroeste do Canadá. No dia é relembrado, danças, comidas típicas, rituais e línguas para manter a lembrança e a cultura desses povos vivos.',
                                imagem: '/assets/paises/canada-assets/events/indigenous.jpg',
                                tipo: 'FERIADO',
                                data: '21 de junho'
                            },
                            {
                                titulo: 'Canada Day (Dia do Canadá)',
                                descricao: 'O aniversário do Canadá é um dos feriados mais comemorados por todos os Canadenses, a celebração é comumente feita e marcada pela queima de vários fogos no céu.',
                                imagem: '/assets/paises/canada-assets/events/canada.webp',
                                tipo: 'FERIADO NACIONAL',
                                data: '1 de julho'
                            },
                            {
                                titulo: 'Thanksgiving Day (Dia de Ação de Graças)',
                                descricao: 'O feriado feito para lembrar das coisas boas e das graças alcançadas durante a vida ocorre sempre na segunda segunda-feira de Outubro no Canadá. O feriado que é característico por ser uma data familiar onde todos se reúnem para uma janta especial é um dos mais comemorados no país.',
                                imagem: '/assets/paises/canada-assets/events/thanks.jpg',
                                tipo: 'FERIADO NACIONAL',
                                data: 'Segunda segunda-feira de outubro'
                            },
                            {
                                titulo: 'Halloween (Dia das Bruxas)',
                                descricao: 'Conhecido por todos, apesar da data não ser considerada como um feriado no território do Canadá, é um evento bastante amado e festejado principalmente pelas crianças.',
                                imagem: '/assets/paises/canada-assets/events/halloween.jpg',
                                tipo: 'FERIADO',
                                data: '31 de outubro'
                            },
                            {
                                titulo: 'Remembrance Day (Dia da Recordação ou Dia da Lembrança)',
                                descricao: 'O feriado, criado para homenagear os veteranos de guerras canadenses carrega um simbolismo enorme, é comum que as pessoas dias antes da data já comecem a usar broches da flor vermelha papoula que é o símbolo de respeito e lembrança a todos que fizeram parte das guerras.',
                                imagem: '/assets/paises/canada-assets/events/remembrance.jpg',
                                tipo: 'FERIADO',
                                data: '11 de novembro'
                            },
                            {
                                titulo: 'Boxing Day',
                                descricao: 'Semelhante ao dia da Black Friday, o Boxing Day é um dia onde o comércio e lojas oferecem grandes descontos que não chegam perto dos oferecidos durante todo o ano. Conhecido por ser melhor do que a própria Black Friday por ter descontos maiores e melhores, os canadenses preferem fazer suas compras no Boxing Day.',
                                imagem: '/assets/paises/canada-assets/events/boxing.jpeg',
                                tipo: 'FERIADO NACIONAL',
                                data: '26 de dezembro'
                            }
                        ]
                    }}

                    culturaProps={{
                        culturas: [
                            {
                                titulo: 'História',
                                descricao: 'OO Canadá tem uma história longa, que tem como ponto importante a colonização dos franceses e ingleses em seu território. Mas, no ano de 1867 as três colônias britânicas da américa do norte decidiram se unir em uma só confederação formando assim o Canadá, mas somente no ano de 1982 o Canadá se livrou da dependência jurídica britânica quando então, promulgou a Carta Canadense de Direitos e Liberdades. O Canadá é até hoje um país diverso e multicultural, que tem como o inglês e o francês suas duas línguas oficiais, sua cultura é uma grande mistura dos colonizadores franceses e ingleses com os povos originários canadenses.',
                                imagem: '/assets/paises/canada-assets/cultura/historia.webp'
                            },
                            {
                                titulo: 'Culinária',
                                descricao: 'Sua culinária é igualmente diversa, tendo vários aspectos e influências nos franceses, ingleses, nativos e até mesmo chineses. Sua gastronomia é diversificada e também atrai os turistas todos os anos. Um dos mais famosos e procurados é o clássico Maple Syrup (Xarope de Bordo), uma bebida de origem nativa e um dos grandes símbolos da culinária canadense. Outros pratos famosos são o Poutine (prato típico do Quebec) e o Bagel Montreal, um dos pães mais consumidos do Canadá.',
                                imagem: '/assets/paises/canada-assets/cultura/culinaria.jpg'
                            },
                            {
                                titulo: 'Religiões',
                                descricao: 'De forma geral, o Catolicismo é a maior e principal religião do país, porém, por se tratar de um país multiétnico e multicultural, existem várias outras que possuem uma grande comunidade no Canadá como o Protestantismo, Islã, Hinduísmo, Budismo,  Sikhismo, Judaismo e outras mais.',
                                imagem: '/assets/paises/canada-assets/cultura/religiao.jpeg'
                            },
                            {
                                titulo: 'Hábitos',
                                descricao: 'Os canadenses são conhecidos por ser um povo muito pontual que gosta de chegar na hora marcada em seus compromissos, outro hábito comum canadense porém que costuma ser mais visto em países orientais é o dia tirar os calçados antes de entrar nas casas. As tradições como a comemoração da grande festa do Halloween e o amor pelo hóquei no gelo também são características dos canadenses.',
                                imagem: '/assets/paises/canada-assets/cultura/habitos.jpeg'
                            },
                            {
                                titulo: 'Higiene',
                                descricao: 'De forma geral, não é da cultura dos canadenses tomarem banhos todos os dias, normalmente preferem tomar banho após dois ou três dias, e comumente banhos rápidos de até 10 minutos. Lá, os canadenses jogam o papel higiênico dentro do vaso pelo fato de as tubulações serem grandes e reforçadas, o que não causa nenhum entupimento, é o lugar correto para o descarte. Os conhecidos hands sanitizers são populares entre os cidadãos, e é comum todo canadense carregar consigo mesmo uma embalagem desta para limpar as mãos.',
                                imagem: '/assets/paises/brasil-assets/cultura/higiene.png'
                            },
                            {
                                titulo: 'Segurança',
                                descricao: 'O canadá foi colocado na 11 posição em relação aos países mais seguros para se viver de acordo com a Global Peace Index de 2023, mesmo sem ser classificado, é de senso comum que o país é muito seguro e isso se reflete no comportamento das pessoas e nas estruturas dos bairros residenciais, onde é raro ver alguma casa com muros altos ou sistemas de segurança afim de evitar algum tipo de crime.',
                                imagem: '/assets/paises/brasil-assets/cultura/seguranca.png'
                            },
                            {
                                titulo: 'Arte',
                                descricao: 'A arte do Canadá começa muito antes de sua colonização, os povos indígenas nativos da terra já produziam suas próprias belezas artísticas. Uma das artes mais conhecidas e lembradas, é com certeza os Totem Pole, postes entalhados e esculpidos em formas de entidades e de animais que os povos originários acreditavam e cultuavam, os totens eram feitos e usados pelos nativos na intenção de proteção como um talismã. O canadá foi berço de vários outros artistas como o conhecido “O Grupo dos Sete”, um grupo formado por pintores paisagistas que influenciaram as artes durante o século XX.',
                                imagem: '/assets/paises/canada-assets/cultura/arte.jpeg'
                            },
                            {
                                titulo: 'Vestimentas',
                                descricao: 'No Canadá é comum que as pessoas vistam e saiam com as roupas amassadas, sem se preocupar em passá-las, é um dos costumes Canadenses mais interessantes, porém o inverno no Canadá é castigante, então nessa estação é necessário redobrar a atenção no momento de se vestir para continuar mantendo o corpo aquecido. Os canadenses vestem em épocas mais frias roupas grossas e que cubram todo o corpo como luvas reforçadas, jaquetas e casacos impermeáveis, toucas, calças para frio reforçadas, meias e calçados fechados.',
                                imagem: '/assets/paises/brasil-assets/cultura/vestimentas.png'
                            },
                            {
                                titulo: 'Folclore',
                                descricao: 'Assim como todo o país do Canadá, seu folclore é bastante diverso e envolve lendas e histórias dos povos franceses, ingleses e indígenas. Algumas das histórias mais conhecidas e populares no território são a dos Sasquatch, uma criatura alta que vive nas florestas de British Columbia, a lenda vem dos nativos da região. Existem outras lendas como a do Loup-Garou que tem origem francesa, o Ogopogo que é descrito como uma serpente enorme com escamas verdes ou pretas que habita no lago Okanagan, e o Windigo, um monstro que devora pessoas, também de origem indigena.',
                                imagem: '/assets/paises/canada-assets/cultura/folclore.jpg'
                            },
                            {
                                titulo: 'Esportes',
                                descricao: 'Os canadenses curtem viver um estilo de vida mais ativo, com a prática de exercícios e esportes incluídas na rotina do dia a dia. Com isso, vários esportes são populares no Canadá como o futebol, baseball, basquete, escaladas, natação. Há também os esportes que se tornaram populares pelos fatores climáticos do país como o hockey, snowboarding, patinação no gelo e o lacrosse.',
                                imagem: '/assets/paises/canada-assets/cultura/esportes.jpg'
                            }
                        ]
                    }}
            />
        </div>
    )
}

export default Canada