import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio";
import Dashboard from "./pages/dashboard";
import EditPlate from './pages/editPlate'
import NewPlate from "./pages/newPlate";

const router = createBrowserRouter([
    {
        path: '/aromas-do-nordeste-frontend',
        element: <Home/>,
    },
    {
        path: '/cardapio',
        element: <Cardapio/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/dashboard/edit/:id',
        element: <EditPlate/>
    },
    {
        path: '/dashboard/new',
        element: <NewPlate/>
    }
])

export default router;