import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';

export const store = createStore(allReducers, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
