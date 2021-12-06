// 5
// 1
// let res = fn(inputArr);
// console.log("res", res);

class Bus {
  constructor() {
    this.task = {};
  }
  listen(name, cb) {
    this.task[name] = cb;
  }
  listenMore(name, cb) {
    if (name.length != cb.length) {
      return new Error("多重监听参数如([],[])且[]长度应一致");
    } else {
      name.map((item, index) => {
        this.task[item] = cb[index];
      });
    }
  }
  trigger(...name) {
    name &&
      name.map((item) => {
        if (this.task[item]) {
          this.task[item]();
          this.unListen(item);
        } else {
          console.log(`${item}该函数未监听`);
          // throw new Error(`${item}该函数未监听`)
        }
      });
  }
  unListen(name) {
    this.task[name] = null;
  }
}

const bus = new Bus();
bus.listen("testEvent", (...argv) => {
  console.log("event callback");
});
bus.trigger("testEvent", 1, 2);
// TODO:2、3
