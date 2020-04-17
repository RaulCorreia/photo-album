import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { multiClientMiddleware } from 'redux-axios-middleware';

import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSaga from '../sagas';
import reactotron from './ReactotronConfig';
import options from './InterceptorsConfig';
import clients from './ClientsConfig';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(multiClientMiddleware(clients, options), sagaMiddleware), reactotron.createEnhancer())
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);