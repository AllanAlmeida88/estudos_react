import Logo from './Logo'
import Menu from './Menu'

interface AreaLateralProps {
    className?: string
}

export default function AreaLateral(props: AreaLateralProps ) {
    return (
        <div className='flex flex-col gap-5'>
            <Logo className={props.className}/>
            <Menu className={props.className}/>
        </div>
    )
}