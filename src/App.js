import './App.css';
import ContextData from './Utility/ContextData';
import RouterCompo from './Utility/Route';


function App() {
  return (
    <>
      <h1 className='text-center my-3'><span className="main-head">The</span> Siren</h1>
      <hr/>
      <ContextData>
        <RouterCompo/>
      </ContextData>
    </>
  );
}

export default App;
