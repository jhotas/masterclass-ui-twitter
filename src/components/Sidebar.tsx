import { House, MagnifyingGlass, Bell, EnvelopeSimple, ClipboardText, BookmarkSimple, User, DotsThreeCircle, DotsThree } from 'phosphor-react'
import twitterLogo from '../assets/logo-twitter.svg'
import './Sidebar.css'

export function Sidebar() {
    return(
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
                    <DotsThree width={18} height={18} />
                </div>
            </aside>
    )
}