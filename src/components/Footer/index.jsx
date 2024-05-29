import Button from "../Button";
import './style.css'
import './media.css'
import { Link } from "react-router-dom";

const Footer = ({option}) => {
    return (
        <div id="footer">
        <p>E aí, já decidiu?</p>

        {option ? <>
            <Button value='Faça aqui seu pedido' link='#' width={250} color={1}/>
            <p>Ou</p>
            <Link to={'/cardapio'}>Acessar Cardápio</Link>
        </>
        :
        <Button value='Faça aqui seu pedido' link='#' width={250} color={1}/>}
        </div>
    )
}

export default Footer;