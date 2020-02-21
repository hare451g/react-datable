import React from 'react';

// constants
import SPBUTableSchema from '../../constants/SPBUTableSchema';
import RandomUserTableSchema from '../../constants/RandomUserTableSchema';
import RMTableSchema from '../../constants/RMTableSchema';

// containers
import Datatable from '../Datatable';

function App() {
  return (
    <div>
      <Datatable {...SPBUTableSchema} />
      <Datatable {...RandomUserTableSchema} />
      <Datatable {...RMTableSchema} />
    </div>
  );
}

export default App;
