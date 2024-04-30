import Pagina from '../../app/components/Pagina'

export default function PaginaSemEstado() {

    let numero = 0;
    function incrementar() {
        numero += 1
        console.log(numero)
    }

    return (
        <Pagina titulo="Estados" subtitulo='Component sem estado'>
            <div className='flex flex-col'>
                <span>Valor: {numero}</span>
                <button className='bg-blue-500 rounded-lg p-2' onClick={incrementar}>Incrementar</button>

            </div>
        </Pagina>
    )
}