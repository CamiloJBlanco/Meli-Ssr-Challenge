import React from "react";
import "./assets/css/index.scss";
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}
