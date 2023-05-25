import './App.css';
import Counter from './Atom/Task Counters/taskcounter';
import Display from './Atom/Task Display/taskdisplay';
import Input from './Atom/Task Input/taskinput';

function App() {
  
  return (
    <>
    <div className='App'> 

<Counter/>
<Display/>
<Input/>

    </div>
    </>
  );
}

export default App;

