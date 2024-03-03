import React from 'react'
import BanQuestLogo from '../../Assets/BanQuestLogo.png'
import "./Navbar.css"

const Navbar = () => {
    return (
        <section className = 'navBarSection'>
            <div className = "header">
                <div className = "logoDiv">
                   <img src = {BanQuestLogo} alt = "Logo" width={275} height={180}/>
                </div>
            </div>
        </section>
    )
}

export default Navbar