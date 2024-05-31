import React, { useState, useRef } from 'react'
import { ImMenu, ImCross } from "react-icons/im";

const Landing = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const handleStyle = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />

            <div id='landing'>
                <header>
                    <nav>
                        <div className="left">
                            <img src='./rs.jpg'/>
                            </div>
                        <div className="right">
                            <div className='menu1'>
                                <ul>
                                    <a href='#landing'><li>Home</li></a>
                                    <a href='#abomain'><li>About</li></a>
                                    <a href='#promain'><li>Projects</li></a>
                                    <a href='#contact'><li>Contact</li></a>
                                </ul>
                                <ImMenu className='menu' onClick={handleStyle} />
                                <div className='menu2' ref={menuRef} style={{ display: menuVisible ? 'block' : 'none' }}>
                                    <ImCross onClick={handleStyle} />
                                    <a href='#landing'><li>Home</li></a>
                                    <a href='#abomain'><li>About</li></a>
                                    <a href='#promain'><li>Projects</li></a>
                                    <a href='#contact'><li>Contact</li></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

            </div>

        </>
    )
}

export default Landing
