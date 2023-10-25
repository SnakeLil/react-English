import React from 'react'
import './contact.scss'
export default function Contact({ doubleWord }) {

    return (
        <div className='contact'>
            <div className='contactme'>
                
                <div className="email">
                    <a href="">Email Me</a>
                    <span className='btm-contact'>lilsnake239299@gmail.com</span>
                </div>

                <div className="call">
                    <a href="">Call Me</a>
                    <span className='btm-contact'>13172202452 / vx:FF5225_</span>
                </div>
                <div className="website">
                    <a href="">My Website</a>
                    <span className='btm-contact'>https://github.com/SnakeLil</span>
                </div>
            </div>
        </div>

    )
}
