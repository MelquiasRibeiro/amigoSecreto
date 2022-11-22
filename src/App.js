import logo from './Group.svg';
import './App.css';
import { useSearchParams, } from "react-router-dom";

function App() {
  let [searchParams] = useSearchParams();
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Seu amigo Secreto é: <br/>
         <b>
           {searchParams.get("amigo")}
         </b>
         <br/>
         ele gostaria de ganhar: <br/> 
         <b>
          {searchParams.get("presente")}
         </b>
        </p>
      </header>
    </div>
  );
}

export default App;
