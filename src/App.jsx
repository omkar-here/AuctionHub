import { useState } from "react";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import Cards from "./Components/Cards";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  // Link,
  // NavLink,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <MainPage /> */}
      <div className="mt-6 w-full h-full border-2 flex flex-row flex-wrap justify-evenly">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
