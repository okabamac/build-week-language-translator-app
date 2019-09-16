import React from 'react';
import ReactDom from 'react-dom';
import Form from './components/Form';
import './index.css';

function App() {
  return (
    <div>
         Hello World
         <Form />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
