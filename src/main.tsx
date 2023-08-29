import './global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import twitterLogo from './assets/logo-twitter.svg'
import { House, MagnifyingGlass, Bell, EnvelopeSimple, ClipboardText, BookmarkSimple, User, DotsThreeCircle, Sparkle } from 'phosphor-react'

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
                    Postar
                </button>
            </aside>

            <div className="content">
                <main className="timeline">
                    <div className="timeline-header">
                        Página Inicial
                        <Sparkle />
                    </div>

                    <form className="new-tweet-form">
                        <label htmlFor="tweet">
                            <img src="https://github.com/jhotas.png" alt="Foto de perfil" />
                            <textarea id='tweet' placeholder='O que está acontecendo?' />
                        </label>

                        div.
                        <button type='submit'>Postar</button>
                    </form>
                </main>
            </div>

            <div className="sidebar-2">
                sidebar-2
            </div>
        </div>
    </React.StrictMode>
)
