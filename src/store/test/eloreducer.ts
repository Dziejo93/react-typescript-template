import { AnyAction, Reducer } from 'redux';

export type Statuses = 'init' | 'loading' | 'success' | 'failure';

export interface PromiseState<T, E = string> {
  status: Statuses;
  error: E | null;
  data: T | null;
}

export function createPromiseReducer<T, E = string>(actionPrefix: string): Reducer<PromiseState<T, E>> {
  const initialState: PromiseState<T, E> = {
    status: 'init',
    error: null,
    data: null,
  };

  return (state = initialState, action: AnyAction): PromiseState<T, E> => {
    switch (action.type) {
      case `${actionPrefix}_INIT`:
        return {
          status: 'init',
          error: null,
          data: null,
        };
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
        };
      case `${actionPrefix}_FAILURE`:
        return {
          status: 'failure',
          error: action.payload.error,
          data: null,
        };
      default:
        return state;
    }
  };
}

export default createPromiseReducer<void>('ACCEPT_SHIFT_APPLICATION');
