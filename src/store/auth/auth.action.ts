import { Dispatch } from 'redux';
import { postSession } from 'src/resources/session';

export enum types {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILURE = 'AUTH_FAILURE',
}

const authRequest = () => ({
  type: types.AUTH_REQUEST,
});
const authSuccess = (data: {
  session: {
    jwt: string;
    email: string;
  };
}) => ({
  type: types.AUTH_SUCCESS,
  payload: data,
});
const authFailure = (data: any) => ({
  type: types.AUTH_FAILURE,
  error: data,
});

//@todo
export const submitLogin = ({ email, password }: any) => async (dispatch: Dispatch<any>) => {
  dispatch(authRequest());

  try {
    const response = await postSession({ email, password });

    localStorage.setItem('token', response.data.session.jwt);

    dispatch(authSuccess(response.data));
  } catch (e) {
    dispatch(authFailure(e.data));

    throw e;
  }
};
