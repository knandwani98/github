import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import data from "./data.json";

import Sidebar from "./Components/Sidebar";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path="/" exact element={<App />} />
    </Routes>

    <Routes>
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Routes>
      <Route path="/blogs" element={<Blogs />} />
    </Routes>

    <Routes>
      <Route path="/articles" element={<Articles data={data} />} />
    </Routes>

    <Routes>
      <Route
        path="/articles/:slug"
        component={SingleArticle}
        element={<SingleArticle data={data} />}
      />
    </Routes>
  </BrowserRouter>
);
