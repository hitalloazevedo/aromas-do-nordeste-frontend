import './style.css'

const Button = ({value, link, width = 200, color}) => {
    return (
        <a 
            className='button' 
            href={link} 
            style={{width: width, backgroundColor: color == 1 ? 'var(--translucid-white)' : 'var(--brown)'}}
        >
            {value}
        </a>
    )
}

export default Button