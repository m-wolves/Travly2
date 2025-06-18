import './BoxContatos.css'
import { PhoneCall } from 'lucide-react'

type Contato = {
    numero: number
    texto: string
}

type ContatosProps = {
    contatos: Contato[]
}

const BoxContatos: React.FC<ContatosProps> = ({ contatos }) => {
    return (
        <div className="BoxContatos">
            <h3>Números de Emergência</h3>
            <div>
                <PhoneCall className='iconPhone' />
                <ul>
                    {contatos.map((contato, index) => (
                        <li key={index}>
                            {contato.numero} — {contato.texto}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BoxContatos