import './AceitarTermos.css'
import { AceitarTermosProps } from './types'

import { FC } from 'react'

const AceitarTermos:FC <AceitarTermosProps> = () => {
    return (
        <label className='AceitarTermos'>
            <input type="checkbox" className="checkbox-termos" />
            <span className="custom-checkbox"></span>
            <span>
                Aceito os <a href='#'>termos de uso.</a>
            </span>
        </label>
    )
}

export default AceitarTermos