import Dashboard from './layout/Dashboard';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";
import Navi from './layout/Navi';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
         <Dashboard/>
      </Container>
     
    </div>
  );
}

export default App;
