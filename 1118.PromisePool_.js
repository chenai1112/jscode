const download = (url, params) => {
  return new Promise((resolve, reject) => {
    let t = setTimeout(() => {
      // console.log("000--download--", url);
      resolve(url);
    }, 500);
  });
};

const request = function (options = { pool: 5 }) {

  const {pool:maxCount} = options;
  const poolArray = [];
  let requestSize = 0;


  function addRequest(url, params){
    poolArray.push({url, params});
    startRequest();
    // return new Promise();
  }

  function startRequest(){
    requestSize++;
    let poolSize = poolArray.length;
    let curRequest = '';
    while(poolSize>0 && requestSize< maxCount){
      let curRequest = poolArray.shift();
      console.log('curRequest----', curRequest);
      download(curRequest.url, curRequest.params).then((resolve)=>{
        requestSize--;
      startRequest();
      if (querylistSize === listResult.length) {
        curResolve(listResult);
      }
      });
      
    }
    
  }
  

  return function (url, options) {
    return new Promise((resolve, rejest) => {
      addRequest(url, options);
    });
  };
};

const requestAjax = request({ pool: 5 });

for (let i = 0; i < 20; i++) {
  requestAjax(`https://www.baidu.com/${i}`, {}).then((res) => {
    console.log(res);
  });
}

// for (let i = 21; i < 30; i++) {
//   requestAjax(`https://www.baidu.com/${i}`, {}).then((res) => {
//     console.log(res);
//   });
// }
