import { combineReducers, Reducer } from 'redux';
import auth, { AuthInterface } from 'src/store/auth/auth.reducer';
import eloreducer, { PromiseState } from 'src/store/test/eloreducer';

export interface ApplicationState {
  eloreducer: PromiseState<void>;
  auth: AuthInterface<void>;
}

export const appReducer = combineReducers<ApplicationState>({
  eloreducer,
  auth,
});

const rootReducer: Reducer<ApplicationState> = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
