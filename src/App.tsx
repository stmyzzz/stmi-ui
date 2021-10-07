import React, { useState } from "react";
import "./styles/index.scss";
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertTypes } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import Transition from "./components/Transition/transition";
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <hr />
      <Button >测试</Button>
      <Button disabled>disbaled</Button>
      <Button btnType='warning'>警告按钮</Button>
      <Button btnType='primary' size='lg'>test2</Button>
      <Button btnType='primary' size='sm'>test2</Button>
      <Button btnType='link' href="ww w.baidu.com" >link</Button>
      <Button btnType='link' href="www.baidu.com" disabled >Link</Button>
      <Button size='lg' onClick={() => setShow(!show)}>Toggle</Button>
      <Transition in={show} timeout={300} animation='zoom-in-top' wrapper>
        <Button btnType='primary' size='sm'>test2</Button>
      </Transition>
      <hr />
      <Alert type="error" title="theme" closable={false}></Alert>
      <Alert type="success" title="theme" closable={true}></Alert>
      <hr />
      <Menu defaultIndex='0' defaultOpenSubMenus={['2']} mode='vertical' onSelect={(index) => { console.log(`index`, index) }}>
        <MenuItem disabled >
          link1
        </MenuItem>
        <MenuItem>
          link2
        </MenuItem>
        <SubMenu title='link'>
          <MenuItem >
            link2
          </MenuItem>
          <MenuItem>
            link3
          </MenuItem>
        </SubMenu>
        <MenuItem>
          link3
        </MenuItem>
      </Menu>
      <Menu defaultIndex='0' onSelect={(index) => { console.log(`index`, index) }}>
        <MenuItem disabled >
          link1
        </MenuItem>
        <SubMenu title='link'>
          <MenuItem >
            link2
          </MenuItem>
          <MenuItem>
            link3
          </MenuItem>
        </SubMenu>
        <MenuItem >
          link2
        </MenuItem>
        <MenuItem>
          link3
        </MenuItem>
      </Menu>
      <hr />
      <Icon icon="angle-down" theme="primary" size="2x" />

    </div >
  );
}

export default App;
