import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

import { useDispatch, useSelector } from "react-redux";
import { getApiConf, getGenres } from "./store/slice";

import "./App.css";

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    const apiTesting = () => {
      fetchDataFromApi("/movie/popular").then((res) => {
          dispatch(getApiConf(res));
      });
    };
    apiTesting();
  }, []);

  return <div className="App"></div>;
}

export default App;
