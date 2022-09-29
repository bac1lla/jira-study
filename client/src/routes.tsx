import {IRoute} from "./types/types";
import {
    BOARD_ROUTE,
    DESKTOP_ROUTE,
    LOGIN_ROUTE,
    MESSENGER_ROUTE, PERSONALISED_BOARD_ROUTE,
    REGISTRATION_ROUTE,
    STATISTIC_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth"
import Board from "./pages/Board";
import Messenger from "./pages/Messenger";
import Statistic from "./pages/Statistic";
import Desktop from "./pages/Desktop";
import PersonalBoard from "./pages/PersonalBoard";

export const publicRoutes: IRoute[] = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
]

export const authRoutes: IRoute[] = [
    {
        path: DESKTOP_ROUTE,
        Component: <Desktop />
    },
    {
        path: BOARD_ROUTE,
        Component: <Board />
    },
    {
        path: PERSONALISED_BOARD_ROUTE + "/:id",
        Component: <PersonalBoard />
    },
    {
        path: MESSENGER_ROUTE,
        Component: <Messenger />
    },
    {
        path: STATISTIC_ROUTE,
        Component: <Statistic />
    },
]