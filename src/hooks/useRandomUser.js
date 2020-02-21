import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '../constants/services';

function useRandomUser() {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchRandomUser = async (targetPage = 1) => {
    try {
      setError(null);
      setFetching(true);

      const config = {
        params: { page: targetPage, results: 10 }
      };

      const response = await axios.get(BASE_API_URL, config);

      if (response.data && response.data.results) {
        setData(response.data.results);
      } else {
        throw new Error('Server returned with empty result');
      }

      setError(null);
      setFetching(false);
    } catch (error) {
      if (error.response) {
        setError(error.response);
      } else if (error.request) {
        setError(error.request);
      } else {
        setError(error.messages);
      }
      setFetching(false);
    }
  };

  return [
    {
      isFetching,
      error,
      data
    },
    {
      fetchRandomUser
    }
  ];
}

export default useRandomUser;
