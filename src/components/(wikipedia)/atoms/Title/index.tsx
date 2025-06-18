import './Title.css'

interface TitleProps {
    text: string; // A propriedade 'text' deve ser uma string
}

const Title = (props: TitleProps) => {
    return (
        <div className="Title">
            {props.text}
        </div>
    )
}

export default Title