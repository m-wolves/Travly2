'use client'
import React, { useState } from 'react';
import PagePais from '@/components/(wikipedia)/templates/PagePais'
import Navbar from '@/components/(wikipedia)/organisms/Navbar';

const EUA = () => {
    const [activeTab, setActiveTab] = useState('sobre') // Necessário para o Menu

    const infosColuna1 = [
        { esquerda: 'Capital', direita: 'Washington, DC.' },
        { esquerda: 'Localização', direita: 'América do Norte' },
        { esquerda: 'Fuso Horário', direita: 'UTC-5 a -10' },
        { esquerda: 'Clima', direita: 'Temperado e Subtropical' }
    ]

    const infosColuna2 = [
        { esquerda: 'Idioma', direita: 'Inglês' },
        { esquerda: 'Saúde', direita: 'Dividida entre programas governamentais e planos' },
        { esquerda: 'Governo', direita: 'República Federal Presidencial' }
    ]

    const sobreTexto = `Estados Unidos ou Estados Unidos da América (EUA), como é chamado oficialmente, são um país localizado no continente americano (subcontinente América do Norte). O país é considerado o mais influente do mundo e exerce forte domínio político, econômico, militar e cultural. Os EUA participam de diversas organizações, como o Conselho das Nações Unidas; o Acordo Estados Unidos‑México‑Canadá (USMCA), antigo Nafta; a OTAN, dentre outros. A nação mantém relações diplomáticas com a maioria dos países em todas as regiões do mundo. Os Estados Unidos são também considerados uma nação multicultural. A grande extensão territorial confere ao país uma elevada biodiversidade e o encontro de diversas etnias, contribuindo para uma cultura riquíssima, repleta de particularidades em cada região do país.`

    return (

        <div className='EUA'>

           <Navbar />

            <PagePais
                    backgroundImage="/assets/paises/EUA-assets/EUA-fundo.jpeg"
                    backgroundPosition="center center"

                    nomePais='EUA'
                    imagemBandeira='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
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
                                titulo: 'Central park',
                                descricao: 'Uma grande floresta no meio da cidade cheia de prédios e arranha-céus, o Central Park se destaca no coração do bairro de Manhattan. Sendo inaugurado em 1857, foi primeiro parque público dos Estados Unidos, o parque é quase inteiramente ajardinado, possui pistas e trilhas para caminhadas, diversos campos, vários lagos artificiais, duas pistas para patinação no gelo, e um santuário vivo.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/central-park.jpeg',
                                localizacao: 'New York, NY, 5th Avenue, EUA'
                            },
                            {
                                titulo: 'Times Square',
                                descricao: 'Também chamada como a “encruzilhada do mundo”, a Times Square é uma grande praça dado a localização dela ser no cruzamento entre a Broadway e a 7th Avenue, cortada pelas ruas, tem vários cruzamentos e esquinas. Sendo um dos lugares mais visitados do mundo, o lugar possui enormes letreiros de publicidade, e significa uma das maiores concentrações de lojas, indústrias, empresas e marcas famosas.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/times-square.jpg',
                                localizacao: 'Manhattan, NY 10036, EUA'
                            },
                            {
                                titulo: 'Parque Nacional do Grand Canyon',
                                descricao: 'O famoso conjunto de de íngremes penhascos e desfiladeiros ao redor do rio Colorado é uma das mais famosas paisagens naturais visitadas pelo homem. O Grand Canyon possui uma vista encantadora, com várias trilhas a serem feitas que irão te contar diversas histórias sobre o passado e o presente da região natural.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/grand-canyon.jpg',
                                localizacao: 'Arizona, EUA'
                            },
                            {
                                titulo: 'Casa Branca',
                                descricao: 'A residência oficial para os presidentes eleitos pela sociedade estadunidense e também sede do poder executivo, a casa branca é uma das construções mais poderosas do país. Construída entre 1792 e 1800, tem 132 quartos, além de jardins e outras instalações, já foi palco de diversos fatos históricos e políticos, e chama a atenção de todos ao redor do mundo até hoje.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/casa-branca.jpg',
                                localizacao: '1600 Avenida Pensilvânia NW Washington, D.C'
                            },
                            {
                                titulo: 'Monte Rushmore',
                                descricao: 'O Monte Rushmore é esculpido com o rosto de quatro importantes presidentes dos Estados Unidos:  George Washington, Thomas Jefferson, Theodore Roosevelt e Abraham Lincoln. A escultura, que tinha como diretor o escultor Gutzon Borglum, demorou cerca de 14 anos para concluir a escultura, que tinha como intuito celebrar os 150 anos de história dos EUA.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/mount-rushmore.jpg',
                                localizacao: 'Dakota do Sul - Keystone, SD 57751'
                            },
                            {
                                titulo: 'Calçada da Fama',
                                descricao: 'Um grande passeio para ser feito caminhando é entre as estrelas das grandes estrelas que fizeram ou fazem contribuições significativas para a indústria do entretenimento, incluindo cinema, música, televisão, teatro e rádio. O lugar atrai gente de todo o mundo, sejam fãs das celebridades que tiveram seus nomes gravados nas estrelas de bronze, ou apenas turistas curiosos para verem cada uma das mais de 2.600 estrelas.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/calcada-da-fama.jpg',
                                localizacao: 'Califórnia - entre a Hollywood Boulevard e Vine Street'
                            },
                            {
                                titulo: 'Las Vegas Strip',
                                descricao: 'A famosa avenida de Las Vegas com cerca de 6,8 quilômetros, Las vegas strip é o coração e a cara de Las Vegas, e também é conhecida como a “Cidade do Pecado” por possuir dezenas de atrações noturnas, cassinos, hoteis luxuosos, resorts, bares, boates e espetáculos ao vivo para quem deseja experimentar uma noite agitada',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/las-vegas-strip.jpg',
                                localizacao: 'Las vegas Boulevard, New York'
                            },
                            {
                                titulo: 'Miami Beach',
                                descricao: 'Arquitetura Art Deco, praias e uma vida noturna reluzente podem ser encontradas em Miami Beach. Situada em uma ilha, a região é famosa por sua praia de areia branca e águas cristalinas, mas também por bairros chiques e um centro cultural, com museus, galerias e eventos.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/miami-beach.jpg',
                                localizacao: 'Miami Beach, Flórida'
                            },
                            {
                                titulo: 'Golden Gate Bridge',
                                descricao: 'Uma das pontes mais icônicas do mundo, que conecta a cidade de São Francisco à península de Marin, atravessando o estreito de Golden Gate, foi inaugurada em 1937. Além de ser um marco arquitetônico e um símbolo de São Francisco, a ponte é um importante ponto de transporte, ligando diversas áreas metropolitanas. A vista panorâmica da ponte, com o oceano e as colinas ao fundo, faz dela uma das atrações turísticas mais visitadas nos Estados Unidos.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/golden.jpg',
                                localizacao: 'Golden Gate Brg, San Francisco, CA'
                            },
                            {
                                titulo: 'Estátua da Liberdade',
                                descricao: 'Uma das primeiras coisas que vem à cabeça quando pensamos nos Estados Unidos com certeza é a estátua da liberdade, é um símbolo global de liberdade e democracia. A Estátua da Liberdade é um dos principais pontos turísticos de Nova York e um símbolo de acolhimento para imigrantes que chegavam aos EUA, representando a esperança e a liberdade. Um ponto que nenhum visitante e turista que está passando pelos EUA pode esquecer de visitar.',
                                imagemUrl: '/assets/paises/EUA-assets/pontos/estatua.webp',
                                localizacao: 'Nova York - Liberty Island'
                            }
                        ]
                    }}

                    eventosProps={{
                        eventos: [
                            {
                                titulo: 'Birthday of Martin Luther King (Aniversário de Martin Luther King)',
                                descricao: 'Martin Luther King, um dos mais importantes homens para a historia dos negros durante a segregação racial dos estados unidos, tem sua vida e honra celebrada e lembrada neste dia. Então,  desde 1986  celebra-se o aniversário do ganhador do Prêmio Nobel da Paz de 1964 pelo combate às desigualdades raciais que nunca usou da violência.',
                                imagem: '/assets/paises/EUA-assets/events/mlk-day.jpg',
                                tipo: 'FERIADO',
                                data: '3ª Segunda-Feira de Janeiro'
                            },
                            {
                                titulo: 'Valentine’s Day (Dia dos Namorados)',
                                descricao: 'Uma data especial dedicada para celebrar o amor e a amizade nos relacionamentos, o Valentine s day é amplamente comemorado pelos casais. Marcado pela troca de presentes, flores, cartões e chocolates.',
                                imagem: '/assets/paises/EUA-assets/events/valentinesday.jpg',
                                tipo: 'COMEMORATIVO',
                                data: '14 de Fevereiro'
                            },
                            {
                                titulo: 'St Patrick’s Day (Dia de São Patrício)',
                                descricao: 'Neste dia é comemorado a vida de São Patrício, o padroeiro da Irlanda. Apesar do feriado ter as suas origens irlandesas, ele se tornou uma grande febre e um momento de apreciar a cultura de um país diferente nos Estados Unidos. O feriado ganhou popularidade especialmente no século 19, quando grandes ondas de imigrantes irlandeses chegaram ao país. St. Patrick s Day é marcado por desfiles, festas e a utilização de roupas verdes, além de decorações com trevos de três folhas, alimentos e bebidas típicas, como o corned beef e cerva verde.',
                                imagem: '/assets/paises/EUA-assets/events/patrick.webp',
                                tipo: 'COMEMORATIVO',
                                data: '17 de Março'
                            },
                            {
                                titulo: 'Presidents’ Day',
                                descricao: 'O feriado que foi originalmente criado para homenagear o primeiro presidente estadunidense, George Washington, acabou se modificando ao passar dos anos e hoje, seu intuito é de comemorar e homenagear a vida de todos os presidentes que o país já teve. É marcado por uma série de eventos comemorativos, como desfiles e atividades cívicas e principalmente conhecido pelas promoções comerciais.',
                                imagem: '/assets/paises/EUA-assets/events/presidentsday.jpg',
                                tipo: 'FERIADO',
                                data: '3ª Segunda-feira de Fevereiro'
                            },
                            {
                                titulo: 'Memorial Day (Dia da Memória)',
                                descricao: 'O feriado é para homenagear a memória e vida dos soldados estadunidenses que morreram em combate enquanto serviam seu país. Surgiu após a Guerra Civil Americana e com o tempo passou a incluir todos os militares mortos nas guerras sequentes. Neste dia de reflexão, as famílias que perderam seus entes queridos no campo de batalha visitam seus túmulos nos cemitérios nacionais, e as cidades realizam desfiles para honrar os caídos.',
                                imagem: '/assets/paises/EUA-assets/events/memorialday.jpg',
                                tipo: 'FERIADO',
                                data: 'Última Segunda-feira de Maio'
                            },
                            {
                                titulo: 'Juneteenth',
                                descricao: 'O nome Juneteenth é uma combinação de "June" (junho) e "nineteenth" (dezenove) e esse feriado marca o fim da escravidao no estado do Texas, que foi o último lugar a libertar seus escravizados. É um dia de reflexão e celebração da liberdade, da cultura afro-americana e da luta pelos direitos civis. As comemorações variam de acordo com a comunidade, mas geralmente incluem desfiles, festas com música, dança, leituras de poemas, orações e reflexões sobre a história da escravidão e os avanços na luta pelos direitos. As comemorações tradicionais incluem pratos típicos como bolo de morango, frango frito, feijão, arroz e peixe frito.',
                                imagem: '/assets/paises/EUA-assets/events/juneteenth.jpg',
                                tipo: 'FERIADO',
                                data: '19 de Junho'
                            },
                            {
                                titulo: 'Independence Day (Dia da Independência)',
                                descricao: 'O dia comemora a independência das 13 colônias dos estados unidos da américa que finalmente estavam livres da Grã-Bretanha. Sendo um dos feriados mais importantes e comemorados para os Estados Unidos, neste dia as celebrações incluem desfiles, fogos de artifício, picnics e festas e muitas cidades organizam grandes desfiles, com bandas, carros alegóricos e apresentações cívicas, enquanto as famílias se reúnem para churrascos, jogos e atividades ao ar livre. A noite é marcada por espetaculares exibições de fogos de artifício, tudo para comemorar a luta pela liberdade e a celebração da independência.',
                                imagem: '/assets/paises/EUA-assets/events/independencia-eua.jpeg',
                                tipo: 'FERIADO',
                                data: '4 de Julho'
                            },
                            {
                                titulo: 'Halloween (Dia das Bruxas)',
                                descricao: 'O feriado mais esperado principalmente entre as crianças é o Halloween, um dia onde todos podem se fantasiar, fazer lanternas com abóboras e ir pelas ruas batendo de porta em porta atrás de doces ou travessuras. As paradas de Halloween também são populares em algumas cidades, como em Salem, Massachusetts, que é famosa por sua conexão com bruxas.',
                                imagem: '/assets/paises/EUA-assets/events/halloween.jpg',
                                tipo: 'COMEMORATIVO',
                                data: '31 de Outubro'
                            },
                            {
                                titulo: 'Columbus Day',
                                descricao: 'O feriado comemora a chegada de Cristóvão Colombo, o descobridor das Américas, que chegou no ano de 1492, iniciando então o contato duradouro entre as Américas e a Europa. Porém, nos últimos anos  tem sido alvo de crescente controvérsia, especialmente entre as comunidades indígenas devido aos impactos negativos da colonização. Enquanto alguns continuam a celebrar a data, outros a utilizam para promover a reflexão sobre a história das populações indígenas.',
                                imagem: '/assets/paises/EUA-assets/events/columbus.jpg',
                                tipo: 'FERIADO',
                                data: '2ª Segunda-feira de Outubro'
                            },
                            {
                                titulo: 'Dia de Ação de Graças (Thanksgiving)',
                                descricao: 'A data comemorativa é centrada em refletir e agradecer por todo o ano, tenha sido ele bom ou ruim, com muitas pessoas aproveitando a ocasião para refletir sobre o que possuem de bom em suas vidas. O Thanksgiving é acima de tudo uma grande reunião familiar, por isso é comum as pessoas viajarem grandes distâncias para estar com seus entes queridos. O grande momento do dia do feriado é um farto jantar que culturalmente é constituído por comidas como o peru assado, torta de abóbora, farofa, molhos, purê de batata e vários outros acompanhamentos.',
                                imagem: '/assets/paises/EUA-assets/events/acao-de-gracas.jpg',
                                tipo: 'FERIADO',
                                data: '4ª Quinta-feira de Novembro'
                            }
                        ]
                    }}

                    culturaProps={{
                        culturas: [
                            {
                                titulo: 'História',
                                descricao: 'Os Estados Unidos da América, hoje conhecidos como uma das maiores potências mundiais, com poder e influência sobre várias regiões do mundo tem uma história vasta de lutas, guerras, perdas e ganhos ao passar dos séculos. O grande pontapé dessa história foi com a chegada dos europeus e a colonização das 13 colônias pela Grã-Bretanha. A colonização só chega ao fim após a Revolução Americana (1775 - 1783) e um dos proximos grandes eventos na historia do pais seria a Guerra Civil (1861-1865) que culminou no fim da escravidão. Os EUA começaram a se tornar uma potência mundial já no século XIX, com a chegada da revolução industrial. No século XX, o país participou das Guerras Mundiais, superaram a Grande Depressão e se tornaram uma superpotência durante a Guerra Fria. Após a Guerra Fria, os Estados Unidos da América enfrentam desafios como o 11 de setembro de 2001, crises econômicas e questões internas sobre direitos civis e polarização política.',
                                imagem: '/assets/paises/EUA-assets/cultura/historia.jpg'
                            },
                            {
                                titulo: 'Culinária',
                                descricao: 'A culinária dos Estados Unidos é bem diversa, e é um grande exemplo a imigração e a miscigenação influenciaram no cardápio cultural do país. As comidas vêm de diferentes povos e locais como os próprios nativos americanos, africanos, italianos, latinos, asiáticos, ingleses e vários outros. Nas regiões dos Estados Unidos, alguns pratos famosos são o frango frito, costela de porco e pratos à base de milho (como o cornbread), clam chowder (sopa de marisco). Também há sobremesas como brownies, cheesecake, cupcakes, e, claro, a tradicional torta de maçã. E algumas das influências trazidas por imigrantes de todo o mundo, como a comida mexicana (tacos, burritos), italiana (pizza, massas), chinesa (arroz frito, frango agridoce) e muitas outras.Entretanto, não podemos deixar de citar um dos símbolos da comida estadunidense que é o fast food, hambúrgueres,batatas fritas, refrigerantes, a pizza e o hot dog.',
                                imagem: '/assets/paises/EUA-assets/cultura/culinaria.jpg'
                            },
                            {
                                titulo: 'Religiões',
                                descricao: 'A liberdade é uma das características e uma das maiores propagandas do país, e com isso, a liberdade religiosa também é uma característica dos estados unidos da américa. As principais religões dos EUA são o Protestantismo, Catolicismo, seguida de uma parcela de pessoas que não possuem religião, e a menor parte do todo sendo de religiões não-cristãs como o judaísmo, o islamismo, o hinduísmo e o budismo.',
                                imagem: '/assets/paises/EUA-assets/cultura/religiao.jpg'
                            },
                            {
                                titulo: 'Hábitos',
                                descricao: 'Os estadunidenses são muito conhecidos pela pontualidade com a hora marcada, pelo seu consumismo, e suas manias de jogar restos de comidas na pia e o papel higiênico dentro do vaso sanitário. Além disso, eles possuem o costume de sempre deixar gorjetas após suas compras, gorjetas generosas! E o que não podemos deixar de fora é seu café da manhã que é comumente mais reforçado do que as outras refeições do dia.',
                                imagem: '/assets/paises/EUA-assets/cultura/habitos.jpg'
                            },
                            {
                                titulo: 'Higiene',
                                descricao: 'A frequência de banho irá variar com a higiene individual de cada um, é comum nos estados unidos que, aqueles que vivem em áreas mais quentes tomem sim um ou mais banhos por dia, porém, os moradores de lugares mais frios gostam de optar por uma rotina de um banho a cada dois ou três dias. O hábito de tomar banho todos os dias, geralmente é visto como exagerado para os estadunidenses, mas em compensação, o uso de lenços umedecidos e desodorantes é bastante comum.',
                                imagem: '/assets/paises/EUA-assets/cultura/higiene.png'
                            },
                            {
                                titulo: 'Segurança',
                                descricao: 'A segurança nos Estados Unidos da América é um ponto bem discutido, mas é inegável que se trata de um país onde as pessoas se sentem seguras, já que contém um nível de segurança elevado. Isso porque, o sistema de segurança pública dos EUA é um dos mais eficientes do mundo, com um índice de resolução de crimes acima de 75%, além de completa efetividade. Entretanto, a taxa de violência anda crescendo no país, principalmente os tiroteios em massa, que se tornaram relativamente comuns nos EUA, existe uma grande discussão sobre o tema e também sobre a posse de armas para os civis.',
                                imagem: '/assets/paises/EUA-assets/cultura/seguranca.jpg'
                            },
                            {
                                titulo: 'Arte',
                                descricao: 'A arte estadunidense é marcada por uma grande diversidade de estilos, influências e movimentos, refletindo a história, a cultura e a sociedade do país. Alguns dos principais movimentos artisticos dos Estados Unidos foram o Romantismo e Paisagismo do seculo XIX, a Arte neoclassica e colonial, Arte Realista e Impressionismo, o Modernismo e Abstracionismo no início do século XX, Arte Afro-americana e Feminista, e a Pop Art, muito popular entre a decada de 50 e 60, desembocando na Arte Contemporânea.',
                                imagem: '/assets/paises/EUA-assets/cultura/arte.jpg'
                            },
                            {
                                titulo: 'Vestimentas',
                                descricao: 'As vestimentas nos Estados Unidos são diversas e variam conforme a ocasião, a região e a cultura, sendo Nova York, uma cidade muito conhecida por sua moda. No dia a dia, o estilo é geralmente casual, com roupas como jeans, camisetas e tênis sendo comuns. O "streetwear" (moda de rua) também tem grande influência. No ambiente de trabalho, as roupas podem ser formais, como ternos e vestidos, mas muitas empresas adotam um estilo mais informal com o uso de bermudas sendo permitidas, por exemplo. A diversidade cultural dos EUA também influencia a moda, com estilos variados das comunidades afro-americana, latina, asiática e outras.',
                                imagem: '/assets/paises/EUA-assets/cultura/vestimenta.jpg'
                            },
                            {
                                titulo: 'Folclore',
                                descricao: 'Assim como os Estados Unidos, seu folclore também é diverso, e possui influências de vários outros povos e grupos. Algumas das principais e mais conhecidas lendas são a do Bigfoot (pé grande), que seria uma criatura enorme e peluda, que vive nas florestas da América do Norte inteira. Outra lenda conhecida é a de Sleepy Hollow (cavaleiro sem cabeça), a lenda conta que existiu um espírito maligno de um antigo soldado que perdeu sua cabeça para uma bala de canhão, desde então ela ronda até o local da batalha numa eterna procura pela sua cabeça. E Paul Bunyan, um lenhador gigante em altura que possuía uma força estrondosa, diziam que ele desmatou florestas inteiras só com uma machadada, junto de um touro azul, o Babe The blue Ox, uma de suas maiores façanhas segundo a lenha foi de ter esculpido o Grand Canyon com seu enorme machado.',
                                imagem: '/assets/paises/EUA-assets/cultura/folclore.jpg'
                            },
                            {
                                titulo: 'Esportes',
                                descricao: 'Os esportes são muito valorizados nos EUA e fazem parte da rotina das pessoas do país, o mais popular é com certeza o Futebol Americano (NFL) que possui uma média de mais de 15 milhões de telespectadores e estádios sempre lotados. Seguido pelo Basquete (NBA), que é o verdadeiro esporte estadunidense já que foram eles próprios que inventaram. O Beisebol (MLB), considerado o passatempo nacional, tem uma longa história de tradição nos EUA. Há também o Hockey no Gelo (NHL),que é popular principalmente nas regiões mais frias do país, o hockey tem uma forte base de fãs, especialmente no norte e no meio-oeste.',
                                imagem: '/assets/paises/EUA-assets/cultura/esporte.jpg'
                            }
                        ]
                    }}
            />
        </div>
    )
}

export default EUA