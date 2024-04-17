interface ContentProps {
    children: any,
    className?: string
}

export default function Content(props: ContentProps) {
    return (
        <div className={`
            flex flex-1
            justify-center items-center
            bg-green-500 rounded-lg 
        `}>
            {props.children}
        </div>
    )
}