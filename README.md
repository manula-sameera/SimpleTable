# React Simple Table Component

This is a reusable React component for rendering tables with customizable columns and cell rendering. The component allows users to define column characteristics and provides an option to use a custom cell renderer for each column.

## Usage

To use the `SimpleTable` component, you need to provide two props:

- **`columnDefs`:** An array of objects that define the columns of the table. Each object should have the following properties:
  - `header`: The text to display in the header of the column.
  - `field`: The property of the data object to display in the cells of the column.
  - `cellRenderer` (optional): A function that takes a data object and returns a React node to display in the cells of the column. If not provided, the component will display the value of the `field` property of the data object.
- **`data`:** An array of objects to display in the table. Each object should have properties that correspond to the `field` properties of the `columnDefs` objects.

Here is an example of how to use the `SimpleTable` component:

```jsx
import SimpleTable from './SimpleTable';

const columnDefs = [
  { header: 'Name', field: 'name' },
  { header: 'Age', field: 'age' },
  { header: 'Email', field: 'email' },
];

const data = [
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
];

function App() {
  return <SimpleTable columnDefs={columnDefs} data={data} />;
}

export default App;

```

In this example, the SimpleTable component will display a table with three columns ("Name", "Age", and "Email") and two rows of data.

## Styling

The SimpleTable component uses a CSS file for styling. You can customize the appearance of the table by modifying the SimpleTable.css file.