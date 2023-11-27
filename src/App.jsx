// src/App.jsx
import React from 'react';
import SimpleTable from './components/SimpleTable';
import tableHeaders from './data/headers.json';
import tableData from './data/tableData.json';
import fieldHeaderMapping from './data/fieldHeaderMapping.json';

const App = () => {

  const columnDefs = tableHeaders.map((header) => ({ header, field: fieldHeaderMapping[header] }));

  return (
    <div>
      <h1>Simple Table Example</h1>
      <SimpleTable columnDefs={columnDefs} data={tableData} />
    </div>
  );
};

export default App;
