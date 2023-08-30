import { ChatCircle, Repeat, Heart, ChartLine } from 'phosphor-react'
import './Tweet.css'

export function Tweet() {
    return(
        <div className="tweet" style={{ borderRadius: 8 }}>
            <img src="https://pbs.twimg.com/profile_images/1683544762123427865/JOMVrN3W_400x400.jpg" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>jhotas</strong>
                    <span>@jhootas_</span>
                </div>

                    <p>𝐃𝐈𝐒𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐈𝐎𝐍 𝐂𝐋𝐀𝐈𝐌𝐒 𝐀𝐍𝐎𝐓𝐇𝐄𝐑 𝐋𝐈𝐅𝐄<br />

                        Even Mr World of Warcraft himself, @TrilltkoWW, was unable to counter a disconnection.<br />
                        <br />
                        Trill falls at level 42. He plans on running it back.<br />
                        <br />
                        RIP
                    </p>

                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle />
                        21
                    </button>

                    <button type='button'>
                        <Repeat />
                        6
                    </button>

                    <button type='button'>
                        <Heart />
                        355
                    </button>

                    <button type='button'>
                        <ChartLine />
                        1529
                    </button>
                </div>
            </div>
        </div>
    )
}