import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/callback1.js';
import ToggleMessage from './components/hidecomponent.js';
import ListRenderingExample from './components/listrender.js';
import StateDemo from'./components/StateDemo';
import TwoWayBindingExample from './components/twoway';
import ConditionalRendering from './conditionalrendering.js';
import Counter from './counter';
function App() {
 return (
   <div >
       <StateDemo/>
       <Counter />
       <TwoWayBindingExample />
       <ToggleMessage/>
       <ListRenderingExample/>
       <ParentComponent/>
       <ConditionalRendering/>

    </div>
 );
}
export default App;