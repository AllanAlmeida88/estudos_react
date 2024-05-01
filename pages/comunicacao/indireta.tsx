import Pagina from '../../app/components/Pagina'
import Valor from '../../app/components/comunicacao/indireta/Valor'

export default function ComunicacaoIndireta() {
    return (
        <Pagina titulo='Comunicação' subtitulo='Comunicação indireta'>
            <div className='flex justify-center items-center w-full h-full'>
                <Valor />
            </div>
        </Pagina>
    )
}