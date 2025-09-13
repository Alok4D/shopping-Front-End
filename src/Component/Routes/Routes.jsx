import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import Register from "../Pages/Authentication/Register/Register";
import Wishlist from "../Wishlist/Wishlist";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutPage from "../Checkout/Checkout";
import Checkout from "../Checkout/Checkout";
import BlogPage from "../Pages/Blog/BlogPage/BlogPage";
import SingleBlog from "../Pages/Blog/SingleBlog/SingleBlog";
import ShopPage from "../Pages/ShopPage/ShopPage";
import About from "../Pages/Home/HomePage/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/shops',
        element: <ShopPage/>
      },
      {
        path: "/productDetails", // ✅ dynamic route
        element: <ProductDetails />,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
      {
        path: '/blog',
        element: <BlogPage/>
      },
      {
        path: '/singleBlog',
        element: <SingleBlog/>
      },
      {
        path: '/aboutUS',
        element: <About/>
      },
      {
        path: '/contactUs',
        element: <ContactUs/>
      }
    ],
  },
]);
