import { IconBrandJavascript, IconBraces, IconFileCheck, IconSitemap, IconCode, IconH1, IconForms  } from '@tabler/icons-react'
import MenuItem from './MenuItem'

interface MenuProps {
    className?: string
}

export default function Menu(props: MenuProps) {
    return (
        <div className={`
            flex flex-col justify-start items-center
            w-72 text-3xl
            p-2 gap-2
        `}>

            <span  className="text-sm text-zinc-500 self-start pl-3 pt-4">Comunicação</span>
            <MenuItem icone={<IconCode />} url="/comunicacao/direta" label="Comunicação direta"/>
            <MenuItem icone={<IconCode />} url="/comunicacao/indireta" label="Comunicação indireta"/>

            <span  className="text-sm text-zinc-500 self-start pl-3 pt-4">Desafios</span>
            <MenuItem icone={<IconCode />} url="/desafios/sem_passo" label="Desafio contador sem passo"/>
            <MenuItem icone={<IconCode />} url="/desafios/com_passo" label="Desafio contador com passo"/>
            <MenuItem icone={<IconCode />} url="/desafios/calcular" label="Desafio calcular usando estado"/>

            <span  className="text-sm text-zinc-500 self-start pl-3 pt-4">Estado</span>
            <MenuItem icone={<IconCode />} url="/estado/sem" label="Componenet sem estado"/>
            <MenuItem icone={<IconCode />} url="/estado/com" label="Componenet com estado"/>
            <MenuItem icone={<IconForms />} url="/estado/campoTexto" label="Campo de Texto"/>

            <span  className="text-sm text-zinc-500 self-start pl-3 pt-4">Fundamentos</span>
            <MenuItem icone={<IconFileCheck />} url="/home" label="Pagina #1"/>
            <MenuItem icone={<IconSitemap />} url="/fundamentos/pagina" label="Pagina #2"/>
            <MenuItem icone={<IconBrandJavascript />} url="/fundamentos/funcoes" label="Funções"/>

            <span  className="text-sm text-zinc-500 self-start pl-3 pt-4">Fundamentos</span>
            <MenuItem icone={<IconCode />} url="/fundamentos/basico" label="Básico"/>
            <MenuItem icone={<IconH1 />} url="/fundamentos/titulo" label="Título"/>
            <MenuItem icone={<IconBraces />} url="/fundamentos/soma" label="Soma"/>
        </div>
    )
}