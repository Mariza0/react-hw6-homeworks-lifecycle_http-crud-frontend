import "./App.css"
import "./index.css"
import { Notes } from "./components/Notes";


const App = () => {

  return (
    <>
      <Notes url={`http://localhost:7070/notes`}/>
    </>
  );
};

export default App;
