// src/components/SimpleTable.jsx
import React from 'react';
import '../styles/SimpleTable.css';

interface ColumnDef {
  header: string;
  field: string;
  cellRenderer?: (record: Record<string, any>) => React.ReactNode;
}

interface SimpleTableProps {
  columnDefs: ColumnDef[];
  data: Record<string, any>[];
}

const SimpleTable: React.FC<SimpleTableProps> = ({ columnDefs, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columnDefs.map((colDef, index) => (
            <th key={index}>{colDef.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, rowIndex) => (
          <tr key={rowIndex}>
            {columnDefs.map((colDef, colIndex) => (
              <td key={colIndex}>
                {colDef.cellRenderer
                  ? colDef.cellRenderer(record)
                  : record[colDef.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
