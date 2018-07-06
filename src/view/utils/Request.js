
export default ({uri, body = {}, cache = 'no-cache', credentials = 'same-origin', headers = {}, method, mode = 'cors',redirect = 'follow', referrer = 'no-referrer', timeout = 10000}) => {
  
  return Promise.race(
    [
      fetch(uri, {
        body: JSON.stringify(body),
        cache,
        credentials,
        headers: {
          'content-type': 'application/json',
          ...headers
        },
        method,
        mode,
        redirect,
        referrer,
      }),
      new Promise((_, reject) => {
        setTimeout(() => {
          reject({code: '-1', message: '访问超时'})
        }, timeout);
      })
    ])
      .then(res => res.json())
      .catch(err => {
        throw new Error(err.message || '网络错误，请稍后重试')
      });
};
