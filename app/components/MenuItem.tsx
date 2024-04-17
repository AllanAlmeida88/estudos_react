import Link from "next/link";

export default function MenuItem(props: any) {
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