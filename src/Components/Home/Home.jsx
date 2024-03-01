import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to SignUp component */}
                    <Link to="/SignUp">SignUp</Link>
                </li>
        </ul>
    )
}

export default Home