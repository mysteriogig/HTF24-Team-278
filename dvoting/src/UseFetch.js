import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: abortCont.signal });
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        const data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();

    return () => abortCont.abort(); 
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
