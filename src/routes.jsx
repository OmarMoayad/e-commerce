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
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CodeVerification from "./pages/CodeVerification/CodeVerification";
import NewPassword from "./pages/NewPassword/NewPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsofService from "./pages/TermsofService/TermsofService";
import Faq from "./pages/Faq/Faq";
import Contactus from "./pages/Contactus/Contactus";
import NotFound from "./pages/404/404";

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
                path: "/contact",
                element: <Contactus />,
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
                path: "/privacypolicy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/terms",
                element: <TermsofService />,
            },
            {
                path: "/faq",
                element: <Faq />,
            },
            {
                path: "ForgotPassword",
                element: <ForgotPassword />,
            },
            {
                path: "/CodeVerification",
                element: <CodeVerification />,
            },
            {
                path: "/NewPassword",
                element: <NewPassword />,
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
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ],
    },
]);
export default router;