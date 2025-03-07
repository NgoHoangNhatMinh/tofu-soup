import App from "../../App";
import Home from "../home/Home";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
        ]
    }
];

export default routes;