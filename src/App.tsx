import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("this works");
  };

  return (
    <div>
      <Button handleClick={handleClick}>My Button</Button>
    </div>
  );
}
export default App;
