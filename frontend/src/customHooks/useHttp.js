import { useState, useEffect } from "react";

export const useHttp = (url, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (body) => {
    try {
      const response = await fetch(url, {
        method,
        body: method !== "GET" ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
      return { data, loading, error, fetchData };
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};
