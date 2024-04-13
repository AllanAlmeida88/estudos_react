import '../../app/globals.css'
import Header from '../../app/components/Cabecalho.tsx'

export default function Page() {
    const ano = new Date().getFullYear()
    return (
        <div className={`
            flex flex-col p-4 gap-4 h-screen
        `}>
           <Header />
        </div>
    )
}