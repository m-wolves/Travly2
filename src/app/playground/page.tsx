import CardPaisL from '@/components/molecules/CardPaisL';
import MenuPais from '@/components/molecules/MenuPais';

const Playground = () => {
    return (
        <div className="bg-gray-400">
            <h1>Playground</h1>
            <CardPaisL
                nomePais="Brasil"
                imagemBandeira="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
            />
            <CardPaisL
                nomePais="Argentina"
                imagemBandeira="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
            />
            <MenuPais />
        </div>
    )
}

export default Playground