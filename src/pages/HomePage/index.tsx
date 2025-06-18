import ButtonEntrar from '@/components/(main-site)/atoms/ButtonEntrar';
import Logo from '@/components/(main-site)/atoms/Logo';
import MenuPaises from '@/components/(wikipedia)/organisms/MenuPaises';

import './HomePage.css'

const HomePage = () => {
    return (
        <div className='HomePage'>
            <header>
                <ButtonEntrar isLogged={false} link='/Login' />
            </header>

            <main>
                <section className='LogoSection'>
                    <Logo />
                </section>
                <section className='ContentSection'>
                    <MenuPaises />
                </section>
            </main>
        </div>
    )
}

export default HomePage;
