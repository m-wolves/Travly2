import NavContinentes from '@/components/(wikipedia)/atoms/NavContinentes'
import TitleContinente from '@/components/(wikipedia)/atoms/TitleContinente'
import './MenuPaises.css'
import CardBandeira from '../../atoms/CardBandeira'

const MenuPaises = () => {
    return (
        <div className='MenuPaises'>
            <div className='titles'>
                <h1>PAÍSES</h1>
                <p>Separados em Continentes</p>
            </div>
            <NavContinentes />
            <div>
                <div id='norte' className='menu'>
                    <TitleContinente text='América do Norte' />
                    <div className='bandeiras'>
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png' text='Canadá' link='/Canada' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png' text='Estados Unidos' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png' text='México' link='/Empty' />
                    </div>
                </div>
                <div id='sul' className='menu'>
                    <TitleContinente text='América do Sul' />
                    <div className='bandeiras'>
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1920px-Flag_of_Argentina.svg.png' text='Argentina' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1280px-Flag_of_Bolivia_%28state%29.svg.png' text='Bolívia' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png' text='Brasil' link='/Brasil' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png' text='Chile' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png' text='Colombia' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1280px-Flag_of_Ecuador.svg.png' text='Equador' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1920px-Flag_of_Guyana.svg.png' text='Guiana' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png' text='Paraguai' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png' text='Peru' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png' text='Suriname' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png' text='Uruguai' link='/Empty' />
                        <CardBandeira img='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png' text='Venezuela' link='/Empty' />
                    </div>
                </div>
                <div id='centro' className='menu'>
                    <TitleContinente text='América Central' />
                    <span>Ops! Parece que ainda não adicionamos essa região. <br/> Tente novamente em futuras atualizações!</span>
                </div>
                <div id='africa' className='menu'>
                    <TitleContinente text='África' />
                    <span>Ops! Parece que ainda não adicionamos essa região. <br/> Tente novamente em futuras atualizações!</span>
                </div>
                <div id='aria' className='menu'>
                    <TitleContinente text='Ásia' />
                    <span>Ops! Parece que ainda não adicionamos essa região. <br/> Tente novamente em futuras atualizações!</span>
                </div>
                <div id='europa' className='menu'>
                    <TitleContinente text='Europa' />
                    <span>Ops! Parece que ainda não adicionamos essa região. <br/> Tente novamente em futuras atualizações!</span>
                </div>
                <div id='oceania' className='menu'>
                    <TitleContinente text='Oceania' />
                    <span>Ops! Parece que ainda não adicionamos essa região. <br/> Tente novamente em futuras atualizações!</span>
                </div>
                <div id='antartida' className='menu'>
                    <TitleContinente text='Antártida' />
                    <span>Ops! Parece que ainda não adicionamos essa região. <br/> Tente novamente em futuras atualizações!</span>
                </div>
            </div>
        </div>
    )
}

export default MenuPaises