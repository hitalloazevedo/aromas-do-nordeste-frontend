import { useRef, useState } from 'react'
import './style.css'

const Header = () => {
    const [estadoMenu, setEstadoMenu] = useState('deactivated');

    const menuIconRef = useRef<HTMLElement>(null);

    const handleClick = () => {
      if (menuIconRef.current) {
        const element = menuIconRef.current;
        element.classList.toggle('fa-bars');
        element.classList.toggle('fa-x');
        if (element.classList.contains('fa-x')) {
          setEstadoMenu('activated');
        } else {
          setEstadoMenu('deactivated');
        }
      }
    };

    return (
        <div className="header">
            <i className="fa-solid fa-bars" id='menuIcon' ref={menuIconRef} onClick={handleClick}></i>

            <div className={`menu ${estadoMenu}`}>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Cardapio</a></li>
                        <li><a href="#">Fazer pedido</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;