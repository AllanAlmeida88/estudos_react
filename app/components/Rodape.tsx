interface FooterProps {
    textoL: string,
    textoR: string,
    className?: string
}
export default function Footer(props: any) {
    return (
        <div className={`
            flex justify-between items-center px-10
            h-16 text-base text-zinc-500
            border-t border-zinc-800 bg-zinc-900
        `}>
            <span>{props.textoL}</span>
            <span>{props.textoR}</span>
        </div>
    )
}