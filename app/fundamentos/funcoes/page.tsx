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
        <div>
            {renderizarTitulo()}
            <hr />
            {renderizarConteudo()}
        </div>
    )
}