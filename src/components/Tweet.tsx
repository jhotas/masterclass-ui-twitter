import { ChatCircle, Repeat, Heart, ChartLine } from 'phosphor-react'
import './Tweet.css'

interface TweetProps {
    content: string
}

export function Tweet(props: TweetProps) {
    return(
        <div className="tweet" style={{ borderRadius: 8 }}>
            <img src="https://pbs.twimg.com/profile_images/1649140917465411588/RBT6D-aT_400x400.jpg" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>jhotas</strong>
                    <span>@jhootas_</span>
                </div>

                    <p>{props.content}</p>

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