import Naviagation from '../Components/Naviagation';
import { Global } from '@emotion/react';
//
import Reset from '../Components/Reset';

function App() {
  return (
    <div className="App">
      <Global styles={Reset} />
      <Naviagation />
    </div>
  );
}

export default App;
