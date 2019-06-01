import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FirstPage from './components/FirstPage'
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

// document.getElementById('root') as HTMLElement.
// This syntax is called a type assertion, sometimes also called a cast.
ReactDOM.render(
  <FirstPage name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
