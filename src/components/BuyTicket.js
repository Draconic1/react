import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "./Form";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const Films = () => {
    let {id} = useParams();
    const films = useSelector((state) => state.toolkit.films);
    const loading = useSelector((state) => state.toolkit.isLoading);
    let film = films ? films.find((x) => x.id == id) : null;

    const [seats, setSeats] = React.useState([])


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'http://127.0.0.1:8000/api/v1/seats/'
                )
                console.log(data)

                setSeats(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])


    return (
        <div style={{display: 'block'}}>
            {loading && 'Загрузка...'}

            <div><Link to='/'>Главная</Link> / <Link to={`/films/${film.id}`}>Купить билет</Link>
                <p></p></div>

            <div style={{
                display: 'flex',
                overflow: 'auto',
            }}>

                <p>Выбрать место: </p>
                {seats.map(el => (
                    <div key={el.id} className='' style={{margin: 2}}>
                        <Button variant="outline-primary" style={{}}>{el.id}</Button>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex',
                overflow: 'auto'
            }}>
                <p>Ввести данные:</p></div>
            <Form/>
        </div>
    )
}

export default Films