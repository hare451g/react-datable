import React from 'react';

// constants
import SPBUTableSchema from '../../constants/SPBUTableSchema';
import RandomUserTableSchema from '../../constants/RandomUserTableSchema';

// components
import Datatable from '../Datatable';

function App() {
  return (
    <div>
      <Datatable {...SPBUTableSchema} />
      <Datatable {...RandomUserTableSchema} />
    </div>
  );
}

export default App;
