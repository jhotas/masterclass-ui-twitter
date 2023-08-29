import './global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import twitterLogo from './assets/logo-twitter.svg'
import { House, MagnifyingGlass, Bell, EnvelopeSimple, ClipboardText, BookmarkSimple, User, DotsThreeCircle } from 'phosphor-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='layout'>
            <aside className='sidebar'>
                <img className='logo' src={twitterLogo} alt="Logo" />

                <nav className='main-navigation'>
                    <a className='active' href="">
                        <House weight='fill' />
                        Página Inicial
                    </a>
                    <a href="">
                        <MagnifyingGlass />
                        Explorar
                    </a>
                    <a href="">
                        <Bell />
                        Notificações
                    </a>
                    <a href="">
                        <EnvelopeSimple />
                        Mensagens
                    </a>
                    <a href="">
                        <ClipboardText />
                        Listas
                    </a>
                    <a href="">
                        <BookmarkSimple />
                        Itens Salvos
                    </a>
                    <a href="">
                        <User />
                        Perfil
                    </a>
                    <a href="">
                        <DotsThreeCircle />
                        Mais
                    </a>
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
