import './App.css';
// import './Component/classbase.css'
import {FirstClass} from './Component/classbase';
import FirstFun from './Component/functionBase';
import Useprops from './Component/useprops';

function App() {
  return (
    <div className="App">
      <h1>Hello Deep!!!!😊😊😊</h1>
      <FirstFun/>
      <FirstClass/>
      <Useprops myname="deep" mysurname="mesare"/>
    </div>
  );
}

export default App;
