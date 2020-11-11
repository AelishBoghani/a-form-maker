import logo from './logo.svg';
import './App.css';
import Greet from './component/greet';
import Message from './component/Message'
import Counter from './component/Counter';
import Tabpanel from './component/tab';
import { Container } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className='yash'>
        <h1 class="heading">Form Maker</h1>
        
      </header>
      <header className="formname">
      {
        <Tabpanel></Tabpanel>
      }
      </header>
    </div>
  );
}

export default App;
