import '../../app/globals.css'
import Header from '../../app/components/Cabecalho.tsx'
import Content from '../../app/components/Conteudo'
import Footer from '../../app/components/Rodape'
export default function Page() {
    const ano = new Date().getFullYear()
    return (
        <div className={`
            flex flex-col p-4 gap-4 h-screen
        `}>
           <Header titulo="Minha página" subtitulo="Estou na pasta pages"/>
           <Content>
                <button className='bg-blue-700 w-40 h-20 rounded-lg'>Botão teste</button>
           </Content>
           <Footer textoL="Desenvolvido" textoR={`Desenvolvido ${ano}`}  />
        </div>
    )
}