import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AppLayout from "./Layout/AppLayout";
import { Contact, ErrorPage, Home, Movie } from "./Pages";
import AboutUs from "./Pages/AboutUs";
import { getMoviesData } from "./api/getMoviesData";
import MovieDetail from "./components/MovieDetail";
import { getMovieDetail } from "./api/getMovieDetail";
import { getUserData } from "./api/getUserData";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <AboutUs />,
          },
          {
            path: "/contact",
            element: <Contact />,
            action: getUserData,
          },
          {
            path: "/movie",
            element: <Movie />,
            loader: getMoviesData,
          },
          {
            path: "/movie/:movieId",
            element: <MovieDetail />,
            loader: getMovieDetail,
          },
          
        ],
      },
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
