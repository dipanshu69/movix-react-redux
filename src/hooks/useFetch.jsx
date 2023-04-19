import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api.js";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    async function fetchData() {
      try {
        const res = await fetchDataFromApi(url);
        setLoading(false);
        setData(res);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
