// a.js
cacheRequest(
  "/user",
  (data) => {
    console.log("我是从 A 中请求的 user，数据为" + data);
  },
  (err) => {
    console.log("我是从A中抛出的错误", err);
  }
);
// b.js
cacheRequest(
  "/user",
  (data) => {
    console.log("我是从 B 中请求的 user，数据为" + data);
  },
  (err) => {
    console.log("我是从B中抛出的错误", err);
  }
);

class EventEmitter {
  constructor() {
    this.events = {};
    this.onceEvents = {};
  }

  on(type, cb) {
    console.log(type, cb);
    if (!type || !cb) return false;
    this.events[type] = this.events[type] || [];
    this.events[type].push(cb);
  }

  off(type, cb) {
    if (!type || !cb) return false;
    let callbacks = this.events[type];
    this.events[type] = callbacks && callbacks.filter((item) => item !== cb);
  }

  emit(type, ...args) {
    if (!type) return false;
    this.events[type] &&
      this.events[type].forEach((cb) => {
        cb.apply(null, args);
      });
    this.onceEvents[type] &&
      this.onceEvents[type].forEach((cb) => {
        cb.apply(null, args);
        delete this.onceEvents[type];
      });
  }

  once(type, cb) {
    if (!type || !cb) return false;
    this.onceEvents[type] = this.onceEvents[type] || [];
    this.onceEvents[type].push(cb);
  }
}

const dict = new Map();
const disc = {
  // key: { success: value, fail: error, status: 'success｜ error' }
};

const cacheRequest = (url, successCallback, failCallback) => {
  let discUrl = disc[url];
  if (discUrl) {
    if (discUrl.status === "success") {
      return discUrl.success;
    } else if (discUrl.status === "error") {
      return discUrl.fail;
    }
  }

  request(
    url,
    (value) => {
      discUrl.success = value;
      successCallback(value);
    },
    (error) => {
      discUrl.fail = error;
      failCallback(error);
    }
  );

  if (dict.has(url)) {
    return Promise.resolve(dict.get(url));
  } else {
    // 无缓存，发起真实请求，成功后写入缓存
    return request(url)
      .then((res) => {
        dict.set(url, res);
        return res;
      })
      .catch((err) => Promise.reject(err));
  }
};
