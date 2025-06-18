import Title from '@/components/(wikipedia)/atoms/Title'
import BoxInfoPais from '@/components/(wikipedia)/molecules/BoxInfoPais'
import BoxContatos from '@/components/(wikipedia)/molecules/BoxContatos'

import './SobrePais.css'

type SobrePaisProps = {
    title: string
    infos: { esquerda: string; direita: string }[][]
    texto: string
    contatos: { numero: number; texto: string }[]
}

const SobrePais: React.FC<SobrePaisProps> = ({ title, infos, texto, contatos }) => {
    return (
        <div className='SobrePais'>
            <div className='Infos'>
                <div className='ColunaInfo'>
                    {infos.map((coluna, i) => (
                            <BoxInfoPais key={i} linhas={coluna} />
                    ))}
                </div>
                <div className='ColunaInfo'>
                    <BoxContatos 
                        contatos={contatos}
                    />
                    <p>Conversão de Moedas aqui.</p>
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