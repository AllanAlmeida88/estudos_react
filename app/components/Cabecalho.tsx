export default function Header(props: any) {
    return (
        <div className={
            `
                bg-purple-600 h-44 rounded-lg
                flex flex-col justify-center items-center
            `}>

                <span className="text-4xl font-black">{props.titulo}</span>
                <span>{props.subtitulo}</span>
                

        </div>
    )
}