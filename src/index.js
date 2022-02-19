import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './app/App.jsx';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

ReactDOM.render(<App />, document.getElementById('root'));
