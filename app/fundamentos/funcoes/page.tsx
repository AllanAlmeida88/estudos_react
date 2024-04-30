import Pagina from "@/app/components/Pagina"

export default function page() {

    function renderizarTitulo() {
        return (
            <div>
                <h1>Título</h1>
                <h2>Subtítulo</h2>
            </div>
        )
    }

    function renderizarConteudo() {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }

    return (

        <Pagina titulo="Pagina de fundamentos" subtitulo="Estudos">
            <div className="flex flex-col gap-4">
                {renderizarTitulo()}
                <hr />
                {renderizarConteudo()}
            </div>
        </Pagina>
       
    )
}