import { AxiosResponse } from 'axios';
import { Reducer, useEffect, useReducer } from 'react';

enum ACTIONS {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
}

interface useFetchProps<T, P> {
  initialData: T;
  resourceName: (params?: P) => Promise<AxiosResponse<any>>;
  params?: P;
}
interface StateProps<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}

interface ActionProps {
  type: ACTIONS;
  payload?: any;
}

const dataFetchReducer = <T>(state: StateProps<T>, action: ActionProps) => {
  switch (action.type) {
    case ACTIONS.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.payload,
      };
    default:
      throw new Error();
  }
};

const useFetch = <T, P>({ resourceName, params, initialData }: useFetchProps<T, P>): StateProps<T> => {
  const [state, dispatch] = useReducer<Reducer<StateProps<T>, ActionProps>>(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  const paramsStringified = params && JSON.stringify(params);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: ACTIONS.FETCH_INIT });

      try {
        const stringifiedParams = paramsStringified && JSON.parse(paramsStringified);
        const result = await resourceName(stringifiedParams);

        if (!didCancel) {
          dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: ACTIONS.FETCH_FAILURE, payload: error });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [paramsStringified, resourceName]);

  return state;
};

export default useFetch;
