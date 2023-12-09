import Home from "./Pages/Home.jsx";
import Achivements from "./Pages/Achivements.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/achivements",
    element: <Achivements />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    // TODO: add a fallbackElement
    <RouterProvider router={router} />
  );
};

export default App;
