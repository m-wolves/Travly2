import './ButtonMenu.css';

// Definindo os tipos das props do componente
type ButtonMenuProps = {
    title: string;           // Texto exibido no botão
    isActive?: boolean;      // Se o botão está ativo
    onClick?: () => void;    // Função chamada ao clicar
};

const ButtonMenu: React.FC<ButtonMenuProps> = ({ title, isActive = false, onClick }) => {
    return (
    <button
        className={`buttonMenu ${isActive ? 'active' : ''}`} // Classe dinâmica: adiciona 'active' se isActive for true
        // onClick={onClick} // Chama a função passada quando clicar
    >
        {title}
    </button>
    )
}

export default ButtonMenu;
