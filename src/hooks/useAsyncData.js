import { useEffect, useState } from "react";

const useAsyncData = (request, parameter) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response =
          parameter === undefined
            ? await request()
            : await request(parameter);

        if (isActive) setData(response);
      } catch (requestError) {
        if (isActive) setError(requestError);
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isActive = false;
    };
  }, [request, parameter]);

  return { data, isLoading, error };
};

export default useAsyncData;
