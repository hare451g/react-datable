import axios from 'axios';
import { useState } from 'react';
import extractDeepValues from '../helpers/extractDeepValues';

function useFetchData({ url = '' }) {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const fetchData = async (
    targetPage = 1,
    responseFieldArray = ['data'],
    initialRequestParams = {}
  ) => {
    try {
      setError(null);
      setFetching(true);

      const config = {
        params: { ...initialRequestParams, page: targetPage }
      };

      const response = await axios.get(url, config);

      if (response.data) {
        const extractedData = extractDeepValues({
          fieldArray: responseFieldArray,
          object: response,
          defaultValue: '-'
        });

        if (response.data.info) {
          setTotalPage(response.data.info.pages || 0);
        }

        setData(extractedData);
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
      data,
      totalPage
    },
    {
      fetchData
    }
  ];
}

export default useFetchData;
