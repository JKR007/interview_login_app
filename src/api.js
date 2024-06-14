export const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!!email && password === 'password') {
            console.log('resolving');
          resolve({ token: 'fake-jwt-token', message: 'Successfuly Logged In.' });
        } else {
            console.log('rejecting');
          reject('Invalid email or password.');
        }
      }, 1000);
    });
  };
  