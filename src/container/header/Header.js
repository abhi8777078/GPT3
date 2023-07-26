import React from 'react'
import "./header.css"
import people from '../../assests/people.png'
import group from "../../assests/Group 81.png"
function Header() {
    return (
        <div className="header_main">
            <div className="header_text">
                <h1 className="header_heading">
                    Let’s Build Something
                    amazing with GPT-3
                    OpenAI
                </h1>
                <div className="header_description">
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <div className="header_email">
                        <input type="email" placeholder='Your Email Address' />
                        <button type='button'>Get Started</button>
                    </div>
                    <div className='group'>
                        <img src={group} alt="group" />
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
            </div>
            <div className="header_img">
                <img src={people} alt="illustration.png" />
            </div>
        </div>
    )
}

export default Header
