export const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!!email && password === 'password') {
          resolve({ token: 'fake-jwt-token', message: 'Successfuly Logged In.' });
        } else {
          reject('Invalid email or password.');
        }
      }, 1000);
    });
  };
  