export const sendHttpRequest = (method: string, url: string, data?: object) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {},
  }).then(response => {
    if (response.status >= 400) {
      // !response.ok
      return response.json().then(errResData => {
        const error = new Error('Something went wrong!') as any;
        error.data = errResData;
        throw error;
      });
    }
    return response.json();
  });
};
