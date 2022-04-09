const getData = (id) => {
  console.log("fetching....", id);
  // return fetch(
  //   `https://dummy-mock.alibaba-inc.com/mock?_dummyid_=8160&id=${id}`
  // ).then((res) => res.json());
  return new Promise((resolve, reject) => {
    let t = setTimeout(() => {
      console.log("000--getData--", id);
      resolve(id);
    }, 500);
  });
};

function asyncQueue(fnReturnPromise, limit) {
  let conunter = 0;
  let queryList = [];

  function addQueryList(id) {
    queryList.push(id);
    if (conunter < limit) {
      // conunter++;
      doNext(id);
    }
  }

  function doNext() {
    conunter++;
    if (queryList.length && conunter < limit) {
      fnReturnPromise(queryList.shift())
        .then(
          (resolve) => {
            conunter--;
            doNext(id);
          },
          (reject) => {
            conunter--;
            doNext(id);
          }
        )
        .catch(() => {
          conunter--;
          doNext(id);
        });
    }
  }

  return function promiseRequest(id) {
    return new Promise((resolve, reject) => {
      addQueryList(i);
    });
  };
}

const getDataWithLimit = asyncQueue(getData, 3); // 并发为5

for (let i = 0; i < 10; i++) {
  getDataWithLimit(i).then(console.log); // 保证同一时刻只有5个请求发出
  // getDataWithLimit(i);
}
