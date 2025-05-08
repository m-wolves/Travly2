import NavPais from "@/components/(wikipedia)/organisms/NavPais"
import ContentPais from "@/components/(wikipedia)/organisms/ContentPais"
import ActionsPais from "@/components/(wikipedia)/organisms/ActionsPais"

import './PagePais.css'

type PagePaisProps = {
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
    }
}

// Template para todas as telas de países, as props são definidas diretamente na página de cada país.
const PagePais: React.FC<PagePaisProps> = ({
    // Props da NavPais
    nomePais,
    imagemBandeira,
    activeTab,
    onTabChange,

    // Props do ContentPais
    sobreProps
}) => {
    return (
        <div className="PagePais">
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
                />
                <ActionsPais />
            </div>
        </div>
    )
}

export default PagePais