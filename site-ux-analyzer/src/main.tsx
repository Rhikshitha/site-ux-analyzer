import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Insights from "./pages/Insights";
import Goals from "./pages/Goals";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
