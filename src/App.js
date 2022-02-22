import standartMain from "./standartPage/main";
import './App.css';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Route path="/" component={standartMain}/>
    </div>
  );
}

export default App;
