import React from 'react'
import './About.scss'
export default function About({ doubleWord }) {

    return (
        <div className='About'>
            <h1 className='about-title'>WELCOM TO MY WEBSITE</h1>
            <div className='contact'>
                
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
