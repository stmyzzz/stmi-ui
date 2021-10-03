import React from "react";
import "./styles/index.scss";
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertTypes } from './components/Alert/alert'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hr />
        <Button >测试</Button>
        <Button disabled>disbaled</Button>
        <Button btnType={ButtonType.Danger}>警告按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>test2</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>test2</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" >link</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled >disabled link</Button>
        <hr />
        <Alert type="error" title="theme" closable={false}></Alert>
        <Alert type="success" title="theme" closable={true}></Alert>
      </header>
    </div >
  );
}

export default App;
