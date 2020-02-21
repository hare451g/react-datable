import React, { useEffect, useState } from 'react';
// helpers
import extractDeepValues from '../../helpers/extractDeepValues';
// hooks
import useFetchData from '../../hooks/useFetchData';
// components
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

function Datatable({
  tableName,
  fetchURL,
  responseFieldArray,
  columns,
  initialRequestParams
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const [
    { isFetching, error, data = [], totalPage },
    { fetchData }
  ] = useFetchData({
    url: fetchURL
  });

  useEffect(() => {
    fetchData(currentPage, responseFieldArray, initialRequestParams);
  }, [currentPage]);

  if (isFetching) {
    return <div>Loading . . . </div>;
  }

  if (error) {
    return <div>error occured: {error}</div>;
  }

  if (data) {
    const headers = columns.map(column => column.label);

    const values = data.map(person =>
      columns.map(column => {
        const extractedValue = extractDeepValues({
          fieldArray: column.field,
          object: person,
          defaultValue: column.defaultValue
        });

        return {
          type: column.type,
          value: extractedValue,
          defaultValue: column.defaultValue
        };
      })
    );

    return (
      <>
        <h2>{tableName}</h2>
        <Table headers={headers} values={values} />
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onTargetPageClick={value => {
            setCurrentPage(value);
          }}
        />
      </>
    );
  }

  return <div>Unhandled Error occured</div>;
}

export default Datatable;
