import React from 'react'
import BanQuestLogo from '../../Assets/BanQuestLogo.png'

const Navbar = () => {
    return (
        <section className = 'navBarSection'>
            <div className = "header">
                <div className = "logoDiv">
                   <img src = {BanQuestLogo} alt = "Logo" width={300} height={150}/>
                </div>
            </div>
        </section>
    )
}

export default Navbar