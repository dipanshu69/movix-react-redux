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
  console.log(url);

  useEffect(() => {
    const apiTesting = () => {
      fetchDataFromApi("/movie/popular").then((res) => {
        dispatch(getApiConf(res));
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
