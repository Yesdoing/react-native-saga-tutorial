import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {StatusBar} from 'react-native';
import rootReducer, {rootSaga} from './modules';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

const App = () => {
	return (
		<Provider store={store}>
			<StatusBar barStyle="light-content" />
			<MainNavigation />
		</Provider>
	);
};

export default App;

sagaMiddleware.run(rootSaga);
