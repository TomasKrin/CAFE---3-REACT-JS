import { useEffect } from "react";
import Alert from "./components/Alert/Alert";

const App = () => {
  useEffect(() => {
    fetch("https://lofi-terminal-default-rtdb.firebaseio.com/songs.json")
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });

  return (
    <div
      style={{
        display: `flex`,
        margin: `0 auto`,
        width: `500px`,
        gap: `10px`,
        flexDirection: `column`,
      }}
    >
      <Alert type="danger">This is a danger alert</Alert>
      <Alert type="warning">This is a warning alert</Alert>
      <Alert type="info">This is a info alert</Alert>
      <Alert type="success">This is a success alert</Alert>
    </div>
  );
};

export default App;
