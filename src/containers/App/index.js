import React from 'react';

// constants
import RMTableSchema from '../../constants/RMTableSchema';

// containers
import Datatable from '../Datatable';

function App() {
  return (
    <div>
      <Datatable {...RMTableSchema} />
    </div>
  );
}

export default App;
