import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer, { ApplicationState } from 'src/store/reducers';

const store: Store<ApplicationState> = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
