import React from 'react'
import { Link } from 'react-router-dom'
import logo_RickMorty from '../assets/img/Rick_and_Morty_logo.png'
import '../assets/styles/pages/Home.scss'

const Home = () => {
    return (
        <div className = "HomeContainer">
            
            <Link to='/api' className='HomeContainer__Cards HomeContainer--RickMorty'>
                <img src={logo_RickMorty} alt="logo_RickMorty" />

            </Link>

            <Link to='/filter' className='HomeContainer__Cards'>
                <h1>Filtros</h1>

            </Link>
        </div>
    )
}

export default Home
