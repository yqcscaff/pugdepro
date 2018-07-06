


const get = ({
  uri,
  timeout = 10000,
}) => {
  return new Promise((resolve, reject) => {
    const startDate = +new Date();
    fetch(uri)
      .then(res => {
        const endDate = +new Date();
        if (endDate - startDate > timeout) {
          reject({ code: '-1', message: '超时' });
        }

        if (res.ok) {
          res.json().then(data => {
            resolve(data);
          }).catch(() => {
            reject({ code: '-2', message: '返回格式错误' });
          });
        } else {
          reject({ code: '-2', message: '返回格式错误' });
        }
      })
      .catch(err => reject(err));
  });
};

const Request = {
  get,
  post: () => {}
};

export default Request;