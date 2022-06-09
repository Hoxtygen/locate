import axios from "axios";
import { useState } from "react";

const osmtogeojson = require("osmtogeojson");

export default function useFetch() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const makeRequest = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const osmDTransform = osmtogeojson(response.data);
      setData(osmDTransform.features);
      setError(null)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
    }
  };
  return { makeRequest, error, data, loading };
}
