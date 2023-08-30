import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Tweet } from './components/Tweet'
import { NewTweet } from './components/NewTweet'

const tweets = [
    'Meu primeiro tweet',
    'Teste',
    'Deu certo!',
]

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='layout'>
            <Sidebar />

            <div className="content">
                <main className="timeline">
                    <Header title='Página Inicial' />

                    <NewTweet />

                    {tweets.map(tweet => {
                        return <Tweet key={tweet} content={tweet} />
                    })}
                </main>
            </div>

            <div className="sidebar-2">
                sidebar-2
            </div>
        </div>
    </React.StrictMode>
)
