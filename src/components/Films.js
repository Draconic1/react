import React, {useEffect} from "react";
import {Button, Container, Col, Row, Card} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadFilms, setLoading} from "./reducerSlice";


const Films = () => {
    const films = useSelector(state => state.toolkit.films);
    const loading = useSelector(state => state.toolkit.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get("http://127.0.0.1:8000/api/v1/films/");
                console.log(data);

                dispatch(loadFilms(data));
            } catch (error) {
                console.log(error);
            }

            dispatch(setLoading(false));
        };

        fetchData();
    }, []);

    return (
        <Container>
            {loading && "Загрузка..."}

            <div className='Row' style={{
                display: 'flex',
                overflow: 'auto'
            }}>
                {films.map((el) => (
                    <Col key={el.id} xs="12" sm="6" md="6" lg="4" xl="3">
                        <Card>
                            <Card.Img variant="top" src={el.image}/>
                            <Card.Body>
                                <Card.Title className="text-center">{el.name}</Card.Title>
                                <Card.Text className="text-center">{el.description}</Card.Text>
                                <Button
                                    as={Link}
                                    to={`/films/about/${el.id}`}
                                    variant="outline-secondary"
                                >
                                    Подробнее
                                </Button>
                                <Button
                                    as={Link}
                                    to={`/films/${el.id}`}
                                    variant="outline-primary"
                                >
                                    Купить билет
                                </Button>{" "}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </Container>
    );
};

export default Films;