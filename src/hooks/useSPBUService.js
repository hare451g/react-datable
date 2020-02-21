import axios from 'axios';
import { useState } from 'react';
import { BASE_SPBU_API } from '../constants/services';

function useRandomUser() {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchRandomUser = async (targetPage = 1) => {
    try {
      setError(null);
      setFetching(true);

      const config = {
        params: {}
      };

      const response = await axios.get(BASE_SPBU_API, config);

      if (response.data) {
        setData(response.data);
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
