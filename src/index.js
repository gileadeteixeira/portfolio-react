import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ToolsProvider } from "./components/ToolsContext"

ReactDOM.render(
  <React.StrictMode>
    <ToolsProvider>
      <App />
    </ToolsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
