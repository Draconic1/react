import Header from "./Header";
import { Outlet } from "react-router";

import { Container } from "react-bootstrap";

const Layout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </div>
    );
};

export default Layout;