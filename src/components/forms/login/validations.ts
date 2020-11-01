const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationOptions = {
  email: {
    required: 'error',
    pattern: {
      value: EMAIL_REGEXP,
      message: 'error',
    },
  },
  password: {
    required: 'error',
  },
  isSavePassword: {},
};

export type ValidationTypes = typeof validationOptions;

export default validationOptions;
