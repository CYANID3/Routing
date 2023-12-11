import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Main from "./Pages/Main/Main";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={"404"} />
      </Routes>
    </Layout>
  );
}

export default App;
