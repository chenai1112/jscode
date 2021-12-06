class Bus {
  constructor() {
    this.events = {};
  }

  listen(type, cb) {
    console.log(type, cb);
    if (!type || !cb) return false;
    this.events[type] = this.events[type] || [];
    this.events[type].push(cb);
  }

  offListen(type, cb) {
    if (!type || !cb) return false;
    let callbacks = this.events[type];
    this.events[type] = callbacks && callbacks.filter((item) => item !== cb);
  }

  trigger(type, ...args) {
    if (!type) return false;
    this.events[type] &&
      this.events[type].forEach((cb) => {
        cb.apply(null, args);
      });
  }
}

const bus = new Bus();
// bus.listen("testEvent", (...argv) => {
//   console.log("event callback");
// });
// bus.listen("testEvent", (...argv) => {
//   console.log("event callback");
// });
// bus.trigger("testEvent", 1, 2);

bus.listen("testEvent", function callback1() {
  // do something
  console.log("--testEvent--", "001");
  bus.trigger("testEvent2");
});

bus.listen("testEvent2", function callback2() {
  // do something
  console.log("--testEvent2--", "002");
});

bus.trigger("testEvent");
