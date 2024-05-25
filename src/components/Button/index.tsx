import './style.css'

interface ButtonProps {
    value: string
    link: string
    width: number
}

const Button = ({value, link, width = 200}: ButtonProps) => {
    return (
        <a className='button' href={link} style={{width: width}}>{value}</a>
    )
}

export default Button