import Pagina from '@/app/components/Pagina'
import '../../app/globals.css'


export default function Page() {
    return (
        <Pagina titulo="Passando params" subtitulo="atraves de um component">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </Pagina>
    )
}