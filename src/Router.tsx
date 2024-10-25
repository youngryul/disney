import {createBrowserRouter} from "react-router-dom";
import Disney from "./screens/Disney";
import Character from "./screens/Character";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Disney />,
    },
    {
        path: "/character/:id",
        element: <Character />
    }
])

export default router;