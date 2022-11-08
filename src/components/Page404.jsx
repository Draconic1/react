import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <h2>Ничего не найдено</h2>
            <p>
                <Link to="/">Вернуться на домашнюю страницу</Link>
            </p>
        </div>
    );
};

export default Page404;