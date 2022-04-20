import { useState } from "react";
import "./App.css";
import LoginBox from "./LoginBox";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? (
        <>Welcome</>
      ) : (
        <LoginBox logInFunc={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
