export default function Content(props: any) {
    return (
        <div className={`
            flex justify-center items-center flex-1
            bg-green-500 rounded-lg
        `}>
            
            {props.children}
        </div>
    )
}