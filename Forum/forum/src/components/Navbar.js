import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h1>
                <a href='#'><img src='./logo-removebg-preview.png'/></a>
            </h1>
            <ul>
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="http://127.0.0.1:5500/Pagina%20Principal/Reconhecimento%20IA/Heroiverso.html">
                    <li className='li-ia'>IA</li>
                </a>
                <a href="#">
                    <li className='li-sobre'>Sobre</li>
                </a>
                <a href="http://127.0.0.1:5500/Pagina%20Principal/paginaInicial.html">
                    <li className='li-heroiverso'>Heroiverso</li>
                </a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar