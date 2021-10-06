import React from "react";
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
function App() {
  return (
    <div className="App">
      <hr />
      <Button >测试</Button>
      <Button disabled>disbaled</Button>
      <Button btnType={ButtonType.Danger}>警告按钮</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>test2</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>test2</Button>
      <Button btnType={ButtonType.Link} href="ww w.baidu.com" >link</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com" disabled >Link</Button>
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
