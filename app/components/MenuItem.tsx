import Link from "next/link";

interface MenuItemProps {
    url: string,
    label: string,
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className={`
            bg-zinc-900 w-full rounded-md
            px-4 py-2
            text-xl
        `}>
            {props.label}
        </Link>
    )
}