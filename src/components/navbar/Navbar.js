import React from 'react'
import "./navbar.css"
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

const Menu = () => (
    <>
        <p><a href="#Home">Home</a></p>
        <p><a href="#">What is GPT?</a></p>
        <p><a href="#">Open AI</a></p>
        <p><a href="#">Case Studies</a></p>
        <p><a href="#">Library</a></p>
    </>
)


const Navbar = () => {
    const [toggle, settoggle] = useState(false);
    return (
        <>
            <div className="navabar_main">
                <div className="navbar_logo">GPT3</div>
                <div className="navbar_links">
                    <Menu />
                </div>
                <div className="navbar_sign">
                    <p>SignIn</p>
                    <button type='button'>SignUp</button>
                </div>
                <div className="navbar_menu">
                    {toggle
                        ? <CloseIcon color='#fff' onClick={() => settoggle(false)} />
                        : <DehazeIcon color='#fff' onClick={() => settoggle(true)} />
                    }
                    {toggle && (
                        <div className="menu_res">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is GPT3?</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        /* <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <p><a href="#home">Home</a></p>
                                <p><a href="#wgpt3">What is GPT3?</a></p>
                                <p><a href="#possibility">Open AI</a></p>
                                <p><a href="#features">Case Studies</a></p>
                                <p><a href="#blog">Library</a></p>
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div> */
                    

                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar
