import Pagina from '@/app/components/Pagina'

export default function Page() {
    return (
        <Pagina titulo="Passando params" subtitulo="atraves de um component">
            <button className='bg-green-500 rounded-lg p-6'>Teste</button>
        </Pagina>
    )
}