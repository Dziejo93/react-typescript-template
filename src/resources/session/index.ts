import i18next from 'i18next';
import axiosInstance from 'src/lib/axios';

export type PostSessionProps = {
  email: string;
  password: string;
};

export const postSession = ({ email, password }: PostSessionProps) =>
  axiosInstance.post(i18next.t('resources.session'), { session: { email, password } });
