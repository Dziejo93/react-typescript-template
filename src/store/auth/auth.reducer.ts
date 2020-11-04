import { AnyAction, Reducer } from 'redux';

export type Statuses = 'init' | 'loading' | 'success' | 'failure';

export interface AuthInterface<T, E = string> {
  status: Statuses;
  error: E | null;
  data: T | null;
  isLoggedIn: boolean;
}

export function createPromiseReducer<T, E = string>(actionPrefix: string): Reducer<AuthInterface<T, E>> {
  const initialState: AuthInterface<T, E> = {
    status: 'init',
    error: null,
    data: null,
    isLoggedIn: Boolean(localStorage.getItem('token')),
  };

  return (state = initialState, action: AnyAction): AuthInterface<T, E> => {
    switch (action.type) {
      case `${actionPrefix}_REQUEST`:
        return {
          ...state,
          status: 'loading',
          error: null,
        };
      case `${actionPrefix}_SUCCESS`:
        return {
          status: 'success',
          error: null,
          data: action.payload,
          isLoggedIn: Boolean(action.payload.session.jwt),
        };
      case `${actionPrefix}_FAILURE`:
        return {
          status: 'failure',
          error: action.payload.error,
          data: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
}

export default createPromiseReducer<void>('AUTH');
