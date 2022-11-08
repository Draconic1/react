import React from "react";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <div><Link to='/'>Главная</Link> / <Link to="/about">О кинотеатре</Link>
                <p></p></div>
            <h2>О кинотеатре</h2>
            <p></p>
            <div><p>Адрес: г. Москва, ул.2-я Бауманская, д.5, стр.1</p>
                <p>Часы работы: 10:00 - 22:00</p></div>
        </div>
    )
}


export default About