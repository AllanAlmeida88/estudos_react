import { IconBrandReact } from "@tabler/icons-react"
import Link from "next/link"

interface LogoProps {
    className?: string
}



export default function Logo(props: LogoProps) {
    return (
        <Link href="/" className={`
            flex font-black h-16 items-center
            px-5 gap-2.5
            ${props.className}
        `}>
            <span><IconBrandReact size={30} stroke={1}/></span>
            <span  className="text-2xl">Logo</span>
        </Link>
    )
}