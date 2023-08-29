import './global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import twitterLogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='layout'>
            <aside className='sidebar'>
                <img className='logo' src={twitterLogo} alt="Logo" />

                <nav className='main-navigation'>
                    <a href="">Página Inicial</a>
                    <a href="">Explorar</a>
                    <a href="">Notificações</a>
                    <a href="">Mensagens</a>
                    <a href="">Listas</a>
                    <a href="">Itens Salvos</a>
                    <a href="">Perfil</a>
                    <a href="">Mais</a>
                </nav>

                <button className='new-tweet' type='button'>
                    Tweet
                </button>
            </aside>
            <div className="content">
                content
            </div>
        </div>
    </React.StrictMode>
)
