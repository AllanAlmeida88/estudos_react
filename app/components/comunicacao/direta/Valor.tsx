interface ValorProps {
    texto: string
}
export default function Valor(props: ValorProps) {
    return (
        <div className="text-8xl font-black">
            Texto: {props.texto}
        </div>
    )
}