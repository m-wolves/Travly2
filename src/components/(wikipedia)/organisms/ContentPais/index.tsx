import './ContentPais.css'

import SobrePais from '@/components/(wikipedia)/sections/SobrePais'
import PontosTuristicos from '@/components/(wikipedia)/sections/PontosTuristicos'
import Eventos from '@/components/(wikipedia)/sections/Eventos'
import Cultura from '@/components/(wikipedia)/sections/Cultura'

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

    TurismoSection: React.ComponentType;
    LeisSection: React.ComponentType;

    eventosProps: {
        eventos: {
            titulo: string
            descricao: string
            imagem: string
            tipo: string
            data: string
        }[]
    }

    culturaProps: {
        culturas: {
            titulo: string
            descricao: string
            imagem: string
        }[]
    }
}

// Conteúdo principal da página, cada tela traz um componente diferente
const ContentPais: React.FC<ContentPaisProps> = ({ activeTab, sobreProps, TurismoSection, LeisSection, pontosProps, eventosProps, culturaProps }) => {
    return (
        <div className='ContentPais'>
            {activeTab === 'sobre' &&
                <div className='Sobre'>
                    <SobrePais {...sobreProps}/>
                </div>
            }

            {activeTab === 'turismo' &&
                <div className='Turismo'>
                    <TurismoSection />
                </div>
            }

            {activeTab === 'leis' &&
                <div className='Leis'>
                    <LeisSection />
                </div>
            }

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

            {activeTab === 'cultura' &&
                <div className='Cultura'>
                    <Cultura {...culturaProps} />
                </div>
            }
        </div>
    )
}

export default ContentPais