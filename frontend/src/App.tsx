import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "./pages"
import { AppLayout } from "./layouts"

const router = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
])

export const App = () => {
    return <RouterProvider router={router} />
}
