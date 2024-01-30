import React from 'react';
import Button,{ButtonSize,ButtonType} from './components/Button/Button'; 
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height:'50px'}}></div>
        <Button disabled={true}>按钮</Button>
        <Button btnType={ButtonType.Danger}>按钮</Button>
        <Button btnType={ButtonType.Link} href='www.baidu.com'>按钮</Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
