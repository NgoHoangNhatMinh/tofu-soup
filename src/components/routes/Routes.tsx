import App from "../../App";
import Home from "../home/Home";
import IndexProducts from "../product/IndexProducts";
import ErrorPage from "../error/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/products",
                element: <IndexProducts/>
            },
            {
                path: "/*",
                element: <ErrorPage/>
            }
        ]
    }
];

export default routes;