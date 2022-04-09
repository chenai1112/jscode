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

// function asyncQueue(fnReturnPromise, limit) {
//   let queryList = [];
//   let counter = 0;

//   function addQueryItem(i) {
//     queryList.push(i);
//     counter++;
//     while (counter < limit && queryList.length) {
//       doNext();
//     }
//   }

//   function doNext() {
//     // counter++;
//     queryList.length &&
//       fnReturnPromise(queryList.shift())
//         .then(
//           () => {
//             counter--;
//             doNext();
//           },
//           () => {
//             counter--;
//             doNext();
//           }
//         )
//         .catch(() => {
//           counter--;
//           doNext();
//         });
//   }

//   return function (i) {
//     return new Promise((resolve, reject) => {
//       addQueryItem(i);
//     });
//   };

function asyncQueue(fnReturnPromise, limit) {
  let curLimit = 0;
  let queryList = [];
  let queryListCounter = 0;

  function addQueryItem(i) {
    queryList.push(i);
    queryListCounter = queryList.length;
    curLimit++;
    // for (; queryListCounter > 0, curLimit < limit; curLimit++) {
    //   doNext(curLimit);
    // }
    while (curLimit < limit && queryList.length) {
      doNext();
    }
  }

  function doNext() {
    queryList.length &&
      fnReturnPromise(queryList.shift())
        .then(
          () => {
            curLimit--;
            doNext();
          },
          () => {
            curLimit--;
            doNext();
          }
        )
        .catch(() => {
          curLimit--;
          doNext();
        });
  }
  return function promiseRequest(id) {
    return new Promise((resolve, rejest) => {
      addQueryItem(id);
    });
  };
}

// function asyncQueue(getData, limit) {
//   let actionNum = 0;
//   let requestListId = [];

//   function addRequestId(id) {
//     console.error("-addRequestId-", id);
//     requestListId.push(id);
//     actionNum++;
//     // doRequest();
//     while (actionNum < limit && requestListId.length) {
//       doRequest();
//     }
//   }

//   function doRequest() {
//     console.error("-addRequestId-actionNum--", actionNum);
//     if (requestListId.length && actionNum < limit) {
//       actionNum++;
//       getData(requestListId.shift())
//         .then(
//           () => {
//             actionNum--;
//             doRequest();
//           },
//           () => {
//             actionNum--;
//             doRequest();
//           }
//         )
//         .catch(() => {
//           actionNum--;
//           doRequest();
//         });
//     }
//   }

//   return function promiseRequest(id) {
//     return new Promise((resolve, rejest) => {
//       addRequestId(id);
//     });
//   };

//   // return function promiseRequest(id) {
//   //   return new Promise((resolve, reject) => {
//   //     addRequest(id);
//   //   });
//   // };
// }

const getDataWithLimit = asyncQueue(getData, 3); // 并发为5

for (let i = 0; i < 10; i++) {
  getDataWithLimit(i).then(console.log); // 保证同一时刻只有5个请求发出
  // getDataWithLimit(i);
}
