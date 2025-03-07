import App from "../../App";
import Home from "../home/Home";
import IndexProducts from "../product/IndexProducts";

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
            }
        ]
    }
];

export default routes;