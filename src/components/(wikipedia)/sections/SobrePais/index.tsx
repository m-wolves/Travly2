import Title from '../../atoms/Title'
import BoxInfoPais from '@/components/(wikipedia)/molecules/BoxInfoPais'

import './SobrePais.css'

type SobrePaisProps = {
    title: string
    infos: { esquerda: string; direita: string }[][]
    texto: string
}

const SobrePais: React.FC<SobrePaisProps> = ({ title, infos, texto }) => {
    return (
        <div className='SobrePais'>
            <div className='Infos'>
                <div className='ColunaInfo'>
                    {infos.map((coluna, i) => (
                            <BoxInfoPais key={i} linhas={coluna} />
                    ))}
                </div>
                <div className='ColunaInfo'>
                    <p>gatinhos!</p>
                    <p>gatinhos!</p>
                </div>
            </div>
            <div className='TextContent'>
                <hr/>
                <Title text={title} />
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default SobrePais