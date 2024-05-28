const BASE_URL = 'https://dummyjson.com/auth';

export const loginApi = async (username, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  return data.token;
};



// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'emilys',
//     password: 'emilyspass',
//     expiresInMins: 30, // optional, defaults to 60
//   })
// })
// .then(res => res.json())
// .then(console.log);