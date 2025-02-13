import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import store from './REDUX/Store.jsx';
import { Provider } from 'react-redux';
import "./main.css"

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <App />
    </Provider>
);
