import { useRef, useState } from 'react'
import './style.css'

const Header = () => {
    const [estadoMenu, setEstadoMenu] = useState('deactivated');
    const [scrollState, setScrollState] = useState(0)

    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      if (window.scrollY > 750){
        setScrollState(1)
      } else {
        setScrollState(0)
      }
    })

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

    const hideMenu = () => {
      const element = menuIconRef.current;
      setEstadoMenu('deactivated')
      element?.classList.toggle('fa-x')
      element?.classList.toggle('fa-bars')
    }
    return (
        <div className={`header ${scrollState == 1 ? 'scroll' : ''}`}>
            <i className="fa-solid fa-bars" id='menuIcon' ref={menuIconRef} onClick={handleClick}></i>
            <h1 className={`${scrollState == 1 ? 'scrolltitle' : ''}`}>AROMAS DO NORDESTE</h1>
            <div className={`menu ${estadoMenu}`}>
                <nav>
                    <ul>
                        <li><a href="#home" onClick={hideMenu}>Início</a></li>
                        <li><a href="#aboutus" onClick={hideMenu}>Sobre nós</a></li>
                        <li><a href="#" onClick={hideMenu}>Cardapio</a></li>
                        <li><a href="#" onClick={hideMenu}>Fazer pedido</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;