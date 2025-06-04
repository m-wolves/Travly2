import ButtonEntrar from '@/components/(wikipedia)/atoms/ButtonEntrar';
import Logo from '@/components/(main-site)/atoms/Logo';
import MenuPaises from '@/components/(wikipedia)/organisms/MenuPaises';

import './HomePage.css'

const HomePage = () => {
    return (
        <div className='HomePage'>
            <header>
                <ButtonEntrar isLogged={false} />
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
