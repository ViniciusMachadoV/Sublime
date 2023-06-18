import { useEffect, useState } from "react";

export function useFetch(dataFetchFn) {
  const [data, setData] = useState(null);

  const [isFetching, setIsFetching] = useState(false);

  const fetchData = () => {
    setIsFetching(true);

    dataFetchFn()
      .then((response) => {
        if (response === null) return;

        setData(response);
      })
      .finally(() => setIsFetching(false));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchData(), []);

  return { data, isFetching, refreshData: fetchData };
}
