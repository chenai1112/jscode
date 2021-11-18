class EventPoxy {
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

const eventObj = new EventPoxy();
const fn1 = (args) => {
  console.log("some_event triggered", ...args);
};
// const fn2 = (args) => {
//   console.log("some_event triggered", ...args);
// };
// const fn3 = (args) => {
//   console.log("some_event triggered", ...args);
// };
// eventObj.on("someEvent", fn1);
// eventObj.on("someEvent", fn2);
// eventObj.on("someEvent", fn3);
// eventObj.off("someEvent", fn3);
eventObj.once("someEvent", fn1);

eventObj.emit("someEvent", [1, 23, 3]);
eventObj.emit("someEvent", [1, 23, 3]);
eventObj.emit("someEvent", [1, 23, 3]);
// console.log("eventObj.events---", eventObj.events);
