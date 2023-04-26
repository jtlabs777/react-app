import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items = [];

  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
  }

  return (
    <>
      <h1>List</h1>
      <ul>
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
