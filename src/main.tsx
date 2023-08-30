import './global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import twitterLogo from './assets/logo-twitter.svg'
import { House, MagnifyingGlass, Bell, EnvelopeSimple, ClipboardText, BookmarkSimple, User, DotsThreeCircle, Sparkle, Image, Gif, ListBullets, SmileyWink, CalendarBlank, MapPin, DotsThree } from 'phosphor-react'
import { Tweet } from './components/Tweet'

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

                <div className="profile">
                    <img src="https://github.com/jhotas.png" />
                    <div className="profile-text">
                        <p>jhotas</p>
                        <p>@jhootas_</p>
                    </div>
                    <DotsThree />
                </div>
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

                        <div className="tweet-bar">
                            <Image />
                            <Gif />
                            <ListBullets />
                            <SmileyWink />
                            <CalendarBlank />
                            <MapPin />
                            <button type='submit'>Postar</button>
                        </div>
                    </form>

                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </main>
            </div>

            <div className="sidebar-2">
                sidebar-2
            </div>
        </div>
    </React.StrictMode>
)
