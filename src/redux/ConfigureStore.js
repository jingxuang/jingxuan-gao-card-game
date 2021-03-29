import {createStore, combineReducers, applyMiddleware} from 'redux';
import {GameReducer} from './GameReducer';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(combineReducers({
        game: GameReducer,
    }), applyMiddleware(logger));

    return store;
};