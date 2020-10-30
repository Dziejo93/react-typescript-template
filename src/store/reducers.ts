import { combineReducers, Reducer } from 'redux';
import eloreducer, { PromiseState } from 'src/store/test/eloreducer';

export interface ApplicationState {
  eloreducer: PromiseState<void>;
}

export const appReducer = combineReducers<ApplicationState>({
  eloreducer,
});

const rootReducer: Reducer<ApplicationState> = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
