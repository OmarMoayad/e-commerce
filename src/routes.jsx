import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Products from "./components/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProtectedRouter from "./ProtectedRouter/ProtectedRouter";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";
import ProfileInfo from "./pages/Profile/ProfileInfo";
import ProfileOrders from "./pages/Profile/ProfileOrders";
import Shop from "./pages/Shop/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/cart",
                element: <ProtectedRouter>
                    <Cart />
                </ProtectedRouter>,
            },
            {
                path: "/products",
                element: <Shop />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
            {
                path: "/checkout",
                element: <ProtectedRouter>
                    <Checkout />
                </ProtectedRouter>,
            },
            {
                path: "/profile",
                element: <ProtectedRouter>
                    <Profile />
                </ProtectedRouter>,
                children: [
                    {
                        index: true,
                        element: <ProfileInfo />,
                    },
                    {
                        path: "orders",
                        element: <ProfileOrders />,
                    }
                ]
            }
        ],
    },
]);
export default router;