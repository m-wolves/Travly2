import NavPais from "@/components/(wikipedia)/organisms/NavPais"
import ContentPais from "@/components/(wikipedia)/organisms/ContentPais"
import ActionsPais from "@/components/(wikipedia)/organisms/ActionsPais"

import './PagePais.css'

type PagePaisProps = {
    backgroundImage: string
    backgroundPosition?: string

    // NavPais
    nomePais: string
    imagemBandeira: string
    activeTab: string
    onTabChange: (tab: string) => void

    // ContentPais
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

    culturaProps: {
        culturas: {
            titulo: string
            descricao: string
            imagem: string
        }[]
    }
}

// Template para todas as telas de países, as props são definidas diretamente na página de cada país.
const PagePais: React.FC<PagePaisProps> = ({
    backgroundImage,
    backgroundPosition = 'center top',

    // Props da NavPais
    nomePais,
    imagemBandeira,
    activeTab,
    onTabChange,

    // Props do ContentPais
    sobreProps,
    pontosProps,
    eventosProps,
    culturaProps

}) => {
    return (
        <div className="PagePais"
            style={{
                background: `url(${backgroundImage}) ${backgroundPosition} no-repeat fixed`,
                backgroundSize: 'cover'
            }}
            >
            <div className="Content">
                <NavPais 
                    nomePais={nomePais}
                    imagemBandeira={imagemBandeira}
                    activeTab={activeTab}
                    onTabChange={onTabChange}
                />
                <ContentPais
                    activeTab={activeTab}
                    sobreProps={sobreProps}
                    pontosProps={pontosProps}
                    eventosProps={eventosProps}
                    culturaProps={culturaProps}
                />
                <ActionsPais />
            </div>
        </div>
    )
}

export default PagePais