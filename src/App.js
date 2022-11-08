import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import AboutFilm from "./components/AboutFilm";
import BuyTicket from "./components/BuyTicket";
import Layout from "./components/Layout";
import Page404 from "./components/Page404";

import { store } from "./components/store";

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Page404 />} />

                    <Route path="/films/about/:id" element={<AboutFilm />} />
                    <Route path="/films/:id" element={<BuyTicket />} />
                </Route>
            </Routes>
        </Provider>
    );
};

export default App;