import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getApiConf, getGenres } from "./store/slice";

import Home from "./pages/home/home.page";
import Details from "./pages/details/details.page";
import SearchResult from "./pages/searchResult/searchresult.page";
import Explore from "./pages/explore/explore.page";
import PageNotFound from "./pages/404/404.page";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
