import { createBrowserRouter } from "react-router-dom";
import Rotlayout from "../layouts/Rotlayout";
import Home1 from "../pages/home/Home1";
import Home2 from "../pages/home/Home2";
import Home3 from "../pages/home/Home3";
import Home4 from "../pages/home/Home4";
import Home5 from "../pages/home/Home5";
import Home6 from "../pages/home/Home6";
import Home7 from "../pages/home/Home7";
import Home8 from "../pages/home/Home8";
import Home9 from "../pages/home/Home9";
import Home10 from "../pages/home/Home10";
import ListV1 from "../pages/List/ListV1";
import ShopPage from "../pages/Shop/ShopPage";
import FAQsPage from "../pages/Others/FAQsPage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import LoginPage from "../pages/Auth/LoginPage";
import BlogV1 from "../pages/Blog/BlogV1";
import BlogV2 from "../pages/Blog/BlogV2";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Rotlayout />,
    children: [
      {
        index: true,
        element: <Home1 />,
      },
      {
        path: "Home-1",
        element: <Home1 />,
      },
      {
        path: "Home-2",
        element: <Home2 />,
      },
      {
        path: "Home-3",
        element: <Home3 />,
      },
      {
        path: "Home-4",
        element: <Home4 />,
      },
      {
        path: "Home-5",
        element: <Home5 />,
      },
      {
        path: "Home-6",
        element: <Home6 />,
      },
      {
        path: "Home-7",
        element: <Home7 />,
      },
      {
        path: "Home-8",
        element: <Home8 />,
      },
      {
        path: "Home-9",
        element: <Home9 />,
      },
      {
        path: "Home-10",
        element: <Home10 />,
      },
      // Listings1

      {
        path: "Listings",
        element: <ListV1 />,
      },
      {
        path: "Listings1",
        element: <ListV1 />,
      },

      // Blog

      {
        path: "blog",
        element: <BlogV1 />,
      },
      {
        path: "blog-v1",
        element: <BlogV1 />,
      },
      {
        path: "blog-v2",
        element: <BlogV2 />,
      },

      // Pages
      {
        path: "Pages",
        element: <ShopPage />,
      },
      {
        path: "Pages1",
        element: <ShopPage />,
      },
      {
        path: "Pages2",
        element: <FAQsPage />,
      },
      // others

      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "signin",
        element: <LoginPage />,
      },
      {
        path: "submitListing",
        element: <LoginPage />,
      },
    ],
  },
]);
