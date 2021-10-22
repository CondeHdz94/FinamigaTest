import React from 'react'
import { Link } from 'react-router-dom'
import logo_RickMorty from '../assets/img/Rick_and_Morty_logo.png'
import '../assets/styles/pages/Home.scss'
import contactListIcon from "../assets/icons/contact-list.svg";

const Home = () => {
    return (
        <div className = "HomeContainer">
            
            <Link to='/api' className='HomeContainer__Cards HomeContainer--RickMorty'>
                <img src={logo_RickMorty} alt="logo_RickMorty" />

            </Link>

            <Link to='/contacts' className='HomeContainer__Cards'>
                <img src={contactListIcon} alt="userIcon" className=" HomeContainer__Cards--iconList"/>
                <h1>Contactos</h1>

            </Link>
        </div>
    )
}

export default Home
