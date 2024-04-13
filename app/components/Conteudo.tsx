export default function Content(props: any) {
    return (
        <div className={`
            flex justify-center items-center
            bg-green-500 h-screen rounded-lg
        `}>
            {props.children}
        </div>
    )
}