import React, { useEffect } from 'react';
// helpers
import extractDeepValues from '../../helpers/extractDeepValues';
import dataTypeSelectors from '../../helpers/dataTypeSelectors';
// hooks
import useFetchData from '../../hooks/useFetchData';
// components
import Table from '../../components/Table';

function Datatable({
  tableName,
  fetchURL,
  responseFieldArray,
  columns,
  initialRequestParams
}) {
  const [{ isFetching, error, data = [] }, { fetchData }] = useFetchData({
    url: fetchURL
  });

  useEffect(() => {
    fetchData(1, responseFieldArray, initialRequestParams);
  }, []);

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

        return dataTypeSelectors({
          type: column.type,
          value: extractedValue,
          defaultValue: column.defaultValue
        });
      })
    );

    return (
      <div>
        <h2>{tableName}</h2>
        <Table headers={headers} values={values} />
      </div>
    );
  }

  return <div>Unhandled Error occured</div>;
}

export default Datatable;
