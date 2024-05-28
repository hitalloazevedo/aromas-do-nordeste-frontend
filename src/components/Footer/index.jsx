import Button from "../Button";
import './style.css'
import './media.css'

const Footer = ({option}) => {
    return (
        <div id="footer">
        <p>E aí, já decidiu?</p>

        {option ? <>
            <Button value='Faça aqui seu pedido' link='#' width={250} color={1}/>
            <p>Ou</p>
            <a href="#">Acessar Cardápio</a>
        </>
        :
        <Button value='Faça aqui seu pedido' link='#' width={250} color={1}/>}
        </div>
    )
}

export default Footer;