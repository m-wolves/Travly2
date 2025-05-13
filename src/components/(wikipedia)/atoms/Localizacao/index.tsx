import { MapPinned } from 'lucide-react'
import './Localizacao.css'

type LocalizacaoProps = {
  texto: string
}

const Localizacao: React.FC<LocalizacaoProps> = ({ texto }) => {
  return (
    <div className="Localizacao">
      <MapPinned className='iconMap' />
      <p>{texto}</p>
    </div>
  )
}

export default Localizacao