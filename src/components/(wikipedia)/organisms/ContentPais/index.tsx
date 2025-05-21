import './ContentPais.css'

import SobrePais from '@/components/(wikipedia)/sections/SobrePais'
import PontosTuristicos from '@/components/(wikipedia)/sections/PontosTuristicos'
import Eventos from '@/components/(wikipedia)/sections/Eventos'

type ContentPaisProps = {
    activeTab: string
    sobreProps: {
        title: string
        infos: { esquerda: string; direita: string }[][]
        texto: string
        contatos: { numero: number; texto: string }[]
    }

    pontosProps: {
        pontos: {
            titulo: string
            descricao: string
            imagemUrl: string
            localizacao: string
        }[]
    }

    eventosProps: {
        eventos: {
            titulo: string
            descricao: string
            imagem: string
            tipo: string
            data: string
        }[]
    }
}

// Conteúdo principal da página, cada tela traz um componente diferente
const ContentPais: React.FC<ContentPaisProps> = ({ activeTab, sobreProps, pontosProps, eventosProps }) => {
    return (
        <div className='ContentPais'>
            {activeTab === 'sobre' &&
                <div className='Sobre'>
                    <SobrePais {...sobreProps}/>
                </div>
            }

            {activeTab === 'turismo' && <p>Informações sobre turismo e imigração.</p>}

            {activeTab === 'leis' && <p>Leis importantes do país.</p>}

            {activeTab === 'pontos' &&
                <div className='Pontos'>
                    <PontosTuristicos {...pontosProps} />
                </div>
            }

            {activeTab === 'eventos' &&
                <div className='Eventos'>
                    <Eventos {...eventosProps} />
                </div>
            }

            {activeTab === 'cultura' && <p>Cultura, arte e tradições.</p>}
        </div>
    )
}

export default ContentPais