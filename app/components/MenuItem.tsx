import Link from "next/link";

interface MenuItemProps {
    url: string,
    label: string,
    className?: string,
    icone: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className={`
            w-full rounded-md
            px-4 py-2
            text-base
            flex items-center gap-2
            hover:bg-zinc-900
        `}>
            <span>{props.icone}</span>
            <span>{props.label}</span>
            
        </Link>
    )
}