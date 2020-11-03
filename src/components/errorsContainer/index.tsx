import { ReactElement, useEffect } from 'react';
import { toast } from 'react-toastify';

type InnerProps = {
  children: ReactElement;
};
type Props = InnerProps;

//@todo set this up correctly with errors colors etc
export const ErrorsContainer = ({ children }: Props) => {
  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorsDictionary = event.reason;

      Object.keys(errorsDictionary).forEach((errorField) => {
        errorsDictionary[errorField].forEach((error: Record<string, string>) =>
          toast(`Error: ${errorField} ${error.error}`),
        );
      });
    };

    window.addEventListener('unhandledrejection', onUnhandledRejection);

    return () => {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, []);

  return children;
};
