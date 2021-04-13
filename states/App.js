import { Fragment } from 'react';
import './App.css';
import StateComp from './StateComp';

function App() {
  return (
    <Fragment>
      <h2>Hello World APP.JS</h2>
      <hr />
      <StateComp name="John" count="0" />
    </Fragment>
  );
}

export default App;
