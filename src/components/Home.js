import Films from "./Films"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="mb-4">
                <Link to='/'>Главная</Link>
                <h1 className="text-center">Фильмы</h1>
            </div>
            <Films />
        </>
    );
};

export default Home;