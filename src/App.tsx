import React from "react";
import "./styles/index.scss";
import Button, { ButtonType, ButtonSize } from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>demo</h1>
        <h2>demo2</h2>
        <h3>demo3</h3>
        <code>codeererer</code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button >测试</Button>
        <Button disabled>disbaled</Button>
        <Button btnType={ButtonType.Danger}>警告按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>test2</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>test2</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" >link</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled >disabled link</Button>
      </header>
    </div>
  );
}

export default App;
