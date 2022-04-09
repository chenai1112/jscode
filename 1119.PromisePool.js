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

// function asyncQueue(getData, limit) {
//   let actiongNum = 0;
//   let listNum = 0;
//   let promiseArr = [];

//   function doRequest() {
//     return getData(promiseArr.shift())
//       .then(
//         (res) => {
//           actiongNum--;
//           if (promiseArr.length) {
//             doRequest();
//           }
//         },
//         (err) => {
//           actiongNum--;
//           if (promiseArr.length) {
//             doRequest();
//           }
//         }
//       )
//       .catch((err) => {
//         actiongNum--;
//         doRequest();
//       });
//   }

//   function addRequest(id) {
//     promiseArr.push(id);
//     while (actiongNum < limit && promiseArr.length) {
//       actiongNum++;
//       // listNum++;
//       doRequest();
//     }
//   }

//   return function addPromiseArr(id) {
//     return new Promise((resolve, reject) => {
//       addRequest(id);
//     });

//     // return Promise.resolve(() => {
//     //   promiseArr.push(id);
//     //   while (actiongNum < limit && promiseArr.length) {
//     //     actiongNum++;
//     //     // listNum++;
//     //     doRequest();
//     //   }
//     // });

//     // promiseArr.push(id);
//     // while (actiongNum < limit && promiseArr.length) {
//     //   actiongNum++;
//     //   // listNum++;
//     //   doRequest();
//     // }
//   };
// }

// function asyncQueue(getData, limit) {
//   let queryList = [];
//   let actionNum = 0;
//   function addRequest(id) {
//     queryList.push(id);
//     actionNum++;
//     while (actionNum < limit && queryList.length) {
//       doRequest();
//     }
//   }
//   function doRequest() {
//     if (!queryList.length) return;
//     getData(queryList.shift())
//       .then(
//         () => {
//           actionNum--;
//           doRequest();
//         },
//         () => {
//           actionNum--;
//           doRequest();
//         }
//       )
//       .catch(() => {
//         doRequest();
//       });
//   }

//   return function promiseRequest(id) {
//     return new Promise((resolve, reject) => {
//       addRequest(id);
//     });
//   };
//   // return addRequest;
// }

function asyncQueue(getData, limit) {
  let actionNum = 0;
  let requestListId = [];

  function addRequestId(id) {
    requestListId.push(id);
    actionNum++;
    doRequest();
    // while (actionNum < limit && requestListId.length) {
    // }
  }
  function doRequest() {
    if (requestListId.length && actionNum < limit) {
      actionNum++;
      getData(requestListId.shift())
        .then(
          () => {
            actionNum--;
            doRequest();
          },
          () => {
            actionNum--;
            doRequest();
          }
        )
        .catch(() => {
          actionNum--;
          doRequest();
        });
    }
  }

  return function promiseRequest(id) {
    return new Promise((resolve, rejest) => {
      addRequestId(id);
    });
    // return Promise.resolve(addRequestId(id));
  };
}
const getDataWithLimit = asyncQueue(getData, 5); // 并发为5

for (let i = 0; i < 10; i++) {
  getDataWithLimit(i).then(console.log); // 保证同一时刻只有5个请求发出
  // getDataWithLimit(i);
}

// function asyncQueue(fnReturnPromise, limit) {
//   // code
//   let requests = []
//   let execting = []
//   const pro = Promise.resolve()
//   function queus() {
//     let req = requests.shift()
//     if (!req) return Promise.resolve()
//     const p = Promise.resolve().then(() => req())
//     let r = Promise.resolve()
//     const e =  p.then(() => execting.splice(execting.indexOf(e), 1))
//     execting.push(e)
//     if (execting.length >= limit) {
//       r = Promise.race(execting)
//     }
//     return r
//   }
//   return funtion (...args) {
//     // fnReturnPromise.apply(this, args))
//     const t =this
//     requests.push(() => Promise.resolve().then(fnReturnPromise.apply(t, args)))
//     return queus()
//   }
//   //
// }

// 一次性
function r(reqs, limit) {
  let res = [];
  let execting = [];
  function queus() {
    let req = reqs.shift();
    if (!res) return Promise.resolve();
    const p = Promise.resolve().then(() => req());
    res.push(p);
    let r = Promise.resolve();
    const e = p.then(() => execting.splice(execting.indexOf(e), 1));
    execting.push(e);
    if (execting.length >= limit) {
      r = Promise.race(execting);
    }
    return r.then(() => queus());
  }
  return queus().then(() => Promise.all(res));
}

async function t1() {
  console.log(1);
  console.log(2);
  new Promise(function (resolve) {
    console.log("promise3");
    resolve();
  }).then(function () {
    console.log("promise4");
  });
  await new Promise(function (resolve) {
    console.log("b");
    resolve();
  }).then(function () {
    console.log("t1p");
  });

  console.log(3);
  console.log(4);
  new Promise(function (resolve) {
    console.log("promise5");
    resolve();
  }).then(function () {
    console.log("promise6");
  });
}

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async function t2() {
  console.log(5);
  console.log(6);
  await Promise.resolve().then(() => console.log("t2p"));
  console.log(7);
  console.log(8);
}

t1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
t2();

console.log("end");
