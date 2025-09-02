import { useState } from "react";
import { getAsteroids } from "../api/nasa";

export function useFetchNasaData<T>(): {
  data: T | null;
  fetchData: any;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (s?: Date, e?: Date) => {
    console.log("Fetching data with", s, e);
    if (s && e && e < s) {
      setError("End date cannot be before start date.");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const result = await getAsteroids(
        s ? s.toISOString().split("T")[0] : undefined,
        e ? e.toISOString().split("T")[0] : undefined
      );
      setData(result);
    } catch (error) {
      const err = error as any;
      setError(err.response?.data?.error || err.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, fetchData, loading, error };
}
