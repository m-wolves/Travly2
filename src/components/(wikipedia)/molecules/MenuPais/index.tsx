import ButtonMenu from '@/components/(wikipedia)/atoms/ButtonMenu'
import './MenuPais.css'

type MenuPaisProps = {
    activeTab: string
    onTabChange: (tab: string) => void
}

// Menu de telas, que irá mudar apenas o conteudo central, de acordo com o botão selecionado
const MenuPais: React.FC<MenuPaisProps> = ({ activeTab, onTabChange }) => {
    return (
        <nav className='menuPais'>
            <ButtonMenu
                title='Sobre'
                isActive={activeTab === 'sobre'}
                onClick={() => onTabChange('sobre')}
            />
            <ButtonMenu
                title='Turismo e Imigração'
                isActive={activeTab === 'turismo'}
                onClick={() => onTabChange('turismo')}
            />
            <ButtonMenu
                title='Leis'
                isActive={activeTab === 'leis'}
                onClick={() => onTabChange('leis')}
            />
            <ButtonMenu
                title='Pontos Turísticos'
                isActive={activeTab === 'pontos'}
                onClick={() => onTabChange('pontos')}
            />
            <ButtonMenu
                title='Eventos'
                isActive={activeTab === 'eventos'}
                onClick={() => onTabChange('eventos')}
            />
            <ButtonMenu
                title='Cultura'
                isActive={activeTab === 'cultura'}
                onClick={() => onTabChange('cultura')}
            />
        </nav>
    )
}

export default MenuPais