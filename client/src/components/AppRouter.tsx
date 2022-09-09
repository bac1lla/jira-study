import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import NotFound from "../pages/NotFound";

const AppRouter: FC = () => {

    const isAuth = true

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path="*" element={(<NotFound/>)}/>
        </Routes>
    );
};

export default AppRouter;