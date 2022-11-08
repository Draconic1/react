import React, {useEffect} from "react";
import {Col, Row, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadFilms, setLoading} from "./reducerSlice";

const Films = () => {
    let {id} = useParams();
    const films = useSelector((state) => state.toolkit.films);
    const loading = useSelector((state) => state.toolkit.isLoading);
    let film = films ? films.find((x) => x.id == id) : null;

    return (
        <>
            <div><Link to='/'>Главная</Link> / <Link to={`/films/about/${film.id}`}>{film.name}</Link><p></p></div>
            {film && <h2 className="mb-3">{film.name}</h2>}

            <Row>
                {loading && "Загрузка..."}

                {film && (
                    <>
                        <Col xs="12" md="6" lg="4" xl="3">
                            <img src={film.image} alt={`${film.name} постер`}  class="img-thumbnail" />
                        </Col>
                        <Col xs="12" md="6" lg="4" xl="3">
                            <h5 className="fw-bold">Жанры</h5>
                            <p>{film.genres}</p>
                            <h5 className="fw-bold">Сюжет</h5>
                            <p>{film.description}</p>
                            <h5 className="fw-bold">Страна производства</h5>
                            <p>{film.country}</p>
                            <h5 className="fw-bold">Год релиза</h5>
                            <p>{film.year}</p>
                        </Col>
                    </>
                )}
            </Row>
        </>
    );
};

export default Films;

