import Pagina from "@/app/components/Pagina"

export default function page() {
    return (
        <Pagina titulo="Pagina de fundamentos" subtitulo="Estudos"> 
            <div>
                <h1 className="text-red-500 text-6xl font-bold">Título</h1>
                <h2 className="text-green-600 text-4xl">Subtítulo</h2>
            </div>
        </Pagina>
    )
}