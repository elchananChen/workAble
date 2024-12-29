import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import Contact from "./pages/Contact.tsx";
import SignUpForm from "./components/signUpForm/signUpForm.tsx";
import { LoginForm } from "./components/login-form.tsx";

import Business from "./pages/Business.tsx";
import Error from "./pages/Error.tsx";
import Layout from "./pages/Layout.tsx";
import AboutUs from "./pages/aboutUs.tsx";
import UserBusinesses from "./pages/userBusinesses.tsx";
import AddBusiness from "./pages/addBusiness.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/business/:id",
          element: <Business />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/user/businesses",
          element: <UserBusinesses />,
        },
        {
          path: "/addBusiness",
          element: <AddBusiness />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/signUp",
      element: <SignUpForm />,
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
