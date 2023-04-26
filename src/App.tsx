import ListGroup from "./components/ListGroup";


function App() {
const items = [
  'New York',
  'San Francisco',
  'Tokyo',
  'London',
  'Paris'
]


return (
  
  <>
      <h1>List</h1>
      <ul>
        {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
  </>
  );
}
export default App;
