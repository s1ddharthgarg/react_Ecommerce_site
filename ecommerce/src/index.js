import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import { ProductProvider} from './Context';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ProductProvider>
    <Router>
       <App />
    </Router>
    </ProductProvider>
, document.getElementById('root'));
registerServiceWorker();
