import React, {FC} from 'react';
import {NotFoundStyled} from "../styles/NotFoundStyled";
import {Container} from "../styles/components";
import {Link} from "react-router-dom";
import {DESKTOP_ROUTE} from "../utils/consts";

const NotFound: FC = () => {
    return (
        <Container display="flex">
            <NotFoundStyled>
                <h1>Error <span className="errorcode">404</span></h1>
                <p>The page you are looking for might have been removed, had its name changed or is
                    temporarily unavailable.</p>
                <p>Try to return to the <Link to={DESKTOP_ROUTE}>homepage</Link></p>
                <p>Good luck.</p>
            </NotFoundStyled>
        </Container>
    );
};

export default NotFound;