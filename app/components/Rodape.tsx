interface FooterProps {
    textoL: string,
    textoR: string,
    className?: string
}
export default function Footer(props: any) {
    return (
        <div className={`
            flex p-4 justify-between items-center
            bg-cyan-600 h-16 rounded-lg text-2xl
        `}>
            <span>{props.textoL}</span>
            <span>{props.textoR}</span>
        </div>
    )
}