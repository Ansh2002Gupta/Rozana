import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Product from "./Pages/Product.jsx";
import Layout from "./Design/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Homepage",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return (
    // TODO: add a fallbackElement
    <RouterProvider router={router} />
  );
};

export default App;
