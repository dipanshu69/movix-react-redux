import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getApiConf, getGenres } from "./store/slice";
import { fetchDataFromApi } from "./utils/api";

import Home from "./pages/home/home.page";
import Details from "./pages/details/details.page";
import SearchResult from "./pages/searchResult/searchresult.page";
import Explore from "./pages/explore/explore.page";
import PageNotFound from "./pages/404/404.page";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);

  useEffect(() => {
    const apiTesting = () => {
      fetchDataFromApi("/configuration").then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConf(url));
      });
    };
    apiTesting();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
