import './App.css';
import Myfunction from './components/Myfunction';
import Counter from './components/Counter';
import Log from './components/Log';

function App() {
  const arr = ['venkat','krishna','vishnu'];
  return (
    <div>
      <h2 className="mainText">React Application</h2>
      <p>Passing the properties to the functional component: </p>
      <Myfunction myarr = {arr}/>
      <hr/>
      <Counter/>
      <hr/>
      <h2>Conditional Rendering</h2>
      <Log/>
    </div>
  );
}
export default App;
