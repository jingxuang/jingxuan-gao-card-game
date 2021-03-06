import {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './redux/ConfigureStore';
import Main from './components/MainComponent';
import './App.css';
import 'react-notifications-component/dist/theme.css'

const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter> 
            </Provider>
        );
    }
}

export default App;