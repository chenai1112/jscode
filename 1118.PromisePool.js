// window.download = (url, params) => {
//   return new Promise((resolve, reject) => {
//     let t = setTimeout(() => {
//       resolve(url);
//     }, 300);
//   });
// };

const download = (url, params) => {
  return new Promise((resolve, reject) => {
    let t = setTimeout(() => {
      console.log("000--download--", url);
      resolve(url);
    }, 500);
  });
};

// const request = function (options = { pool: 5 }) {
//   let { pool } = options;
//   let listQuery = [];
//   let numAction = 0;
//   let listResult = [];

//   function setList(url, data) {
//     listQuery.push({ url, data });
//     dodDownload();
//   }

//   function dodDownload() {
//     while (numAction < pool && listQuery.length > 0) {
//       numAction++;
//       const { url, data } = listQuery.shift();
//       download(url, data).then((value) => {
//         numAction--;
//         // console.log("dodDownload---value---", value);
//         listResult.push(value);
//         dodDownload();
//       });
//     }
//   }

//   return function queryList(url, data) {
//     setList(url, data);
//     return Promise.resolve(listResult);
//   };
// };

/*
const request = function (options = { pool: 5 }) {
  let { pool } = options;
  let listQuery = [];
  let numAction = 0;
  let listResult = [];
  let querylistSize = 0;
  function setList(url, data) {
    listQuery.push({ url, data });
    querylistSize++;
    console.log("000--querylistSize--", querylistSize);
    start();
  }

  function start() {
    for (let i = 0; i < pool; i++) {
      doNext();
    }
  }

  function doNext() {
    if (numAction < pool && listQuery.length) {
      numAction++;
      const { url, data } = listQuery.shift();
      download(url, data).then((value) => {
        numAction--;
        // console.log("dodDownload---value---", value);
        // return listResult.push(value);
        listResult.push(value);
        // return Promise.resolve(value);
        console.log("333--listResult--", listResult.length);
        doNext();
      });
    }
  }

  return function queryList(url, data) {
    setList(url, data);
    return Promise.resolve(listResult);
  };
};
*/

const request = function (options = { pool: 5 }) {
  let { pool } = options;
  let listQuery = [];
  let numAction = 0;
  let listResult = [];
  let querylistSize = 0;
  let curResolve;
  let curReject;
  function setList(params) {
    const { url, data, resolve, reject } = params;
    listQuery.push({ url, data });
    querylistSize++;
    curResolve = resolve;
    curReject = reject;
    // console.log("000--resolve--", resolve, reject);
    start({ resolve, reject });
  }

  function start(params) {
    // console.log("111--resolve--", params);
    for (let i = 0; i < pool; i++) {
      doNext(params);
    }
  }

  function doNext(params) {
    // const { resolve, reject } = params;
    // console.log("222--resolve--", params, curResolve);
    if (numAction < pool && listQuery.length) {
      numAction++;
      const { url, data } = listQuery.shift();
      download(url, data)
        .then((value) => {
          numAction--;
          listResult.push(value);
          doNext();
          // curResolve(value);
          if (querylistSize === listResult.length) {
            curResolve(listResult);
          }
        })
        .catch((err) => {
          curReject(err);
        });
    }
  }

  return function queryList(url, data) {
    return new Promise(function (resolve, reject) {
      setList({ url, data, resolve, reject });
    });
  };
};

const requestAjax = request({ pool: 5 });

for (let i = 0; i < 20; i++) {
  requestAjax(`https://www.baidu.com/${i}`, {}).then((res) => {
    console.log(res);
  });
}

for (let i = 21; i < 30; i++) {
  requestAjax(`https://www.baidu.com/${i}`, {}).then((res) => {
    console.log(res);
  });
}
