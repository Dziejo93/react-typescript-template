import i18next from 'i18next';
import axiosInstance from 'src/lib/axios';

export type PostRegisterProps = {
  email: string;
  password: string;
};

export const postRegister = ({ email, password }: PostRegisterProps) =>
  axiosInstance.post(i18next.t('routes.register'), { user: { email, password } });
