import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ThemeReducer from './reducers/ThemeReducer';
import UploadReducer from './reducers/UploadReducer';

const reducer = combineReducers({
	Theme: ThemeReducer,
	File: UploadReducer,
});

const colorFromStorage = localStorage.getItem('colorMode') || '';
const modeFromStorage = localStorage.getItem('themeMode') || '';

const initialState = {
	Theme: {
		color: colorFromStorage,
		mode: modeFromStorage,
	},
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
