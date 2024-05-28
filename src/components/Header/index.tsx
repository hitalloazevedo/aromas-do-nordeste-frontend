import { useEffect, useRef, useState } from 'react'
import './style.css'
import './media.css'

const Header = () => {
    const [estadoMenu, setEstadoMenu] = useState('');
    const [scrollState, setScrollState] = useState(0)
    const [viewportHeight, setViewPortHeight] = useState(window.visualViewport?.height || Number(window.visualViewport?.height))
    const [viewportWidth, setViewPortWidth] = useState(window.visualViewport?.width || Number(window.visualViewport?.width))
    const [estadoNav, setEstadoNav] = useState('deactivatedNav')

    
    window.addEventListener("DOMContentLoaded", () => {
      setViewPortHeight(Number(window.visualViewport?.height))
      setViewPortWidth(Number(window.visualViewport?.width))
      if (viewportWidth > 1000){
        setEstadoMenu('')
      } else {
        setEstadoMenu('deactivated')
      }
    })
    
    window.addEventListener('resize', () => {
      setViewPortWidth(Number(window.visualViewport?.width))
      if (viewportWidth > 1000){
        setEstadoMenu('')
      } else {
        setEstadoMenu('deactivated')
        setEstadoNav('deactivatedNav')
      }
    })

    useEffect(() => {
      if (viewportWidth < 1000){
        setEstadoMenu('deactivated')
      }
    }, [])
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > (viewportHeight - (viewportHeight * 0.18))){
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
          setEstadoNav('activatedNav')
        } else {
          setEstadoMenu('deactivated');
          setEstadoNav('deactivatedNav')
        }
      }
    };

    const hideMenu = () => {
      const element = menuIconRef.current;
      if (viewportWidth < 1000){
        setEstadoMenu('deactivated')
        setEstadoNav('deactivatedNav')
        element?.classList.toggle('fa-x')
        element?.classList.toggle('fa-bars')
      }
    }
    return (
        <div className={`header ${scrollState == 1 ? 'scroll' : ''}`}>
            <i className="fa-solid fa-bars" id='menuIcon' ref={menuIconRef} onClick={handleClick}></i>
            <h1 className={`${scrollState == 1 ? 'scrolltitle' : ''}`}>AROMAS DO NORDESTE</h1>
            <div className={`menu ${estadoMenu}`}>
                <nav>
                    <ul>
                        <li><a href="#home" onClick={hideMenu} className={estadoNav}>Início</a></li>
                        <li><a href="#aboutus" onClick={hideMenu} className={estadoNav}>Sobre nós</a></li>
                        <li><a href="#" onClick={hideMenu} className={estadoNav}>Cardapio</a></li>
                        <li><a href="#" onClick={hideMenu} className={estadoNav}>Fazer pedido</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;