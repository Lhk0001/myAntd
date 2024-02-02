import React from 'react';
import Button,{ButtonSize,ButtonType} from './components/Button/Button'; 
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height:'50px'}}></div>
        <Button disabled={true}>按钮</Button>
        <Button btnType={ButtonType.Danger}>按钮</Button>
        <Button size={ButtonSize.Large}>按钮</Button>
        <Button size={ButtonSize.Small}>按钮</Button>
        
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>按钮</Button>

        <Menu mode='vertical' onSelect={(value:string)=>console.log(value)}>
          <MenuItem >1</MenuItem>
          <MenuItem disabled={true} >2</MenuItem>
          <MenuItem >3</MenuItem>
          <SubMenu defaultOpen={true} title='4'> 
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
        </Menu>

        <Menu  onSelect={(value:string)=>console.log(value)}>
          <MenuItem >1</MenuItem>
          <MenuItem disabled={true}>2</MenuItem>
          <MenuItem >3</MenuItem>
          <SubMenu title='4'> 
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
        </Menu>
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
