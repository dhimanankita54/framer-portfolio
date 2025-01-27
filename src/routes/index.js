import { useRoutes } from "react-router-dom";
import Layout from "../container/components/Layout";
import Loader from "../container/components/Loader";
import Main from "../container/Pages/Main";

const Router = () => {

    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "", element: <Loader /> },
                { path: "/home", element: <Main /> },
            ]
        }
    ])
}

export default Router;