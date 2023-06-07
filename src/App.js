import './App.css';
import './styles/stylesheet.css'
import './styles/counter.css'
import freeCodeCampLogo from './images/logo.png'
import Button from './components/button';
import Counter from './components/counter'
import { useState } from 'react';

function App() {

  const [clickNum , setClickNum] = useState(0);

  const manejarClick = () => {
    setClickNum  (clickNum + 1);
  }

const resetCounter = () => {
  setClickNum (0);
}

  return (
    <div className="App">
    <div className='freecodecamp-logo-container' >
      <img className='freecodecamp-logo'
      src={freeCodeCampLogo} 
      alt='freecodecamp-logo'
      />
    </div>
    <div className='principal-container'>

      <Counter 
      clickNum ={ clickNum }/>

      <Button
        text = 'click'
        clickButton={ true }
        manejarClick={ manejarClick } /> 

      <Button
          text = 'Reset'
          clickButton={ false }
          manejarClick={ resetCounter } /> 
    </div>
    </div>
  );
}

export default App;
