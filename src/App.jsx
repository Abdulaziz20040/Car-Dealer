import React from "react";
import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { Router } from "./routes/AppRoutes";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
