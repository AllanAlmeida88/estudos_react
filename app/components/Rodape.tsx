export default function Footer(props: any) {
    return (
        <div className={`
            flex p-4 justify-between items-center
            bg-cyan-600 h-40 rounded-lg text-2xl
        `}>
            <span>{props.textoL}</span>
            <span>{props.textoR}</span>
        </div>
    )
}