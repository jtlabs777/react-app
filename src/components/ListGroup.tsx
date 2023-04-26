import { useState } from "react";

// {items: [], heading: string }
interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup(props: ListGroupProps) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);



  //Event handler
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;