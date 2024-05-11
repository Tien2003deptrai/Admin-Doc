import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools();

const storeReducer = createStore(rootReducer, composeEnhancers);

export default storeReducer;