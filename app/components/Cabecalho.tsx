interface CabecalhoPropos {
    className: string,
    titulo: string,
    subtitulo: string
}


export default function Header(props: CabecalhoPropos) {
    return (
        <div className={
            `
                ${props.className ?? `
                    bg-purple-600 h-24 rounded-lg
                    flex flex-col justify-center items-center
                ` }
                
            `}>

                <span className="text-4xl font-black">{props.titulo}</span>
                <span>{props.subtitulo}</span>
        </div>
    )
}