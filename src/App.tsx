import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log(item +" " + index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
