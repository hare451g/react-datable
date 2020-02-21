import React, { useEffect } from 'react';

import Table from '../Table';
import tableSchema from '../../constants/tableSchema';
import extractDeepValues from '../../helpers/extractDeepValues';
import useRandomUser from '../../hooks/useRandomUser';

function RandomUserTable() {
  const [{ isFetching, error, data }, { fetchRandomUser }] = useRandomUser();

  useEffect(() => {
    fetchRandomUser(1);
  }, []);

  if (isFetching) {
    return <div>Loading . . . </div>;
  }

  if (error) {
    return <div>error occured: {error}</div>;
  }

  if (data) {
    const headers = tableSchema.map(columns => columns.label);
    const values = data.map(person =>
      tableSchema.map(columns =>
        extractDeepValues({
          fieldArray: columns.field,
          object: person,
          defaultValue: columns.defaultValue
        })
      )
    );

    return <Table headers={headers} values={values} />;
  }

  return <div>random user</div>;
}

export default RandomUserTable;
