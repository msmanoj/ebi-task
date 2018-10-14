import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import dotenv from 'dotenv';

// Load the .env values to process.env
dotenv.config()

ReactDOM.render(
    
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>,
	document.querySelector('#root')
);

registerServiceWorker();
