interface ContentProps {
    children: any,
    className?: string
}

export default function Content(props: ContentProps) {
    return (
        <div className={`flex items-start flex-1 p-4 bg-zinc-900 ${props.className}`}>
            {props.children}
        </div>
    )
}