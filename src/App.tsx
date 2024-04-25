import React from 'react';
import Button,{ButtonSize,ButtonType} from './components/Button/Button'; 
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Tabs from './components/Tabs/Tabs';
import TabItem from './components/Tabs/TabItem';
import Input from './components/Input/Input';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height:'50px'}}></div>
        <Button disabled={true}>按钮</Button>
        <Button btnType={'danger'}>按钮</Button>
        <Button size={'lg'}>按钮</Button>
        <Button size={'sm'}>按钮</Button>
        
        <Button btnType={'link'} href='http://www.baidu.com'>按钮</Button>

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
        <Tabs type='card' onSelect={(index)=>console.log(index)
        }>
          <TabItem label={'1'}>1111</TabItem>
          <TabItem label={'2'}>2222</TabItem>
          <TabItem label={'3'}>3333</TabItem>
        </Tabs>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Input prepend={'qian'} append={'hou'}/>
        <Input disabled size='sm' prepend={'qian'} append={'hou'}/>
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
