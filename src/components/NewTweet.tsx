import { Image, Gif, ListBullets, SmileyWink, CalendarBlank, MapPin } from 'phosphor-react'
import './NewTweet.css'

export function NewTweet() {
    return (
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
    )
}