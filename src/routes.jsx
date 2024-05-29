import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/cardapio',
        element: <Cardapio/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
])

export default router;