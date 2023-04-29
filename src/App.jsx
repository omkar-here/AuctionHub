import { useState } from "react";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
