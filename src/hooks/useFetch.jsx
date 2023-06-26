import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  , [url]);

  useEffect(() => {
    getData();
  }
  , [getData]);

  return { data, loading, error };
}