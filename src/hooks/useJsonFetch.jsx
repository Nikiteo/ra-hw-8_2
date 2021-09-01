import { useState, useEffect } from "react";
import axios from 'axios';

export default function useJsonFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios(url)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
        setError(false);
      })
      .catch(e => {
        setData(false);
        setIsLoading(false);
        setError(e);
      })
  }, [url]);
  return [data, isLoading, error];
}