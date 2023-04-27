import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showButton, setShowButton] = useState(false);



  return (
    <div>
      {showButton && (
        <Alert onClose={() => setShowButton(false)}>
          <span>My Alert</span>
        </Alert>
      )}

      <Button color="danger" handleClick={() => setShowButton(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
