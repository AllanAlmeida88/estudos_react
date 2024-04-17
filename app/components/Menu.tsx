import MenuItem from './MenuItem'
export default function Menu() {
    return (
        <div className={`
            bg-zinc-700 rounded-lg
            flex justify-start items-center
            w-60 text-3xl
            flex-col p-2 gap-2
        `}>
            <MenuItem url="/home" label="Pagina #1"/>
            <MenuItem url="/fundamentos/pagina" label="Pagina #2"/>
        </div>
    )
}