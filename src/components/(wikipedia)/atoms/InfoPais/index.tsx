import './InfoPais.css'

type InfoPaisProps = {
    esquerda: React.ReactNode // Conteúdo da coluna da esquerda
    direita: React.ReactNode  // Conteúdo da coluna da direita
}

// Componente funcional que recebe conteúdo para duas colunas e renderiza em uma linha
const InfoPais: React.FC<InfoPaisProps> = ({ esquerda, direita }) => {
    return (
        <div className="InfoPais"> {/* Container da linha */}
            <div className="coluna esquerda">{esquerda}</div>
            <div className="coluna direita">{direita}</div>
        </div>
    )
}

export default InfoPais