import fetchMock from 'fetch-mock';

fetchMock.post('https://auth-api.com', {
  token: 'Bearer simple_JWT_example_token'
}, {
  delay: 1500,
});

export const fetchData = async (email: string, password: string) => {
  const result = await fetch('https://auth-api.com', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password})
    })
  return await result.json();
}
