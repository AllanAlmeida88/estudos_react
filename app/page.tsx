import Pagina from "./components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
    return (
        <Pagina titulo="Fundamentos" subtitulo="Estudando React" >
            <div className={`
                flex flex-col justify-center items-center
                h-full w-full
                text-zinc-500
            `}>
                <span><IconBrandReact size={100} stroke={1}/></span>
                <span className="font-black">Testando</span>
                <span className="text-sm">aqui</span>
            </div>
        </Pagina>
    )
}
