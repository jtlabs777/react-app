import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelection = (item: string) => {
    console.log(item + " was selected");
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelection}
      />
    </>
  );
}
export default App;
