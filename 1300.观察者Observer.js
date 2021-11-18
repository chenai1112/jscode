class Observer {
  constructor(param) {
    const { id } = param;
    this.id = id;
  }
  update(subject, message) {
    console.log(`观察者${this.id}接受了被观察则${subject}更新的${message}！`);
  }
}
class Subject {
  constructor(param) {
    const { id } = param;
    this.id = id;
    this.observer = [];
  }

  add(observer) {
    this.observer.push(observer);
  }
  remome(observer) {
    this.observer = this.observer.filter((item) => {
      // return item.id !== observer.id;
      return item !== observer;
    });
  }
  notify(message) {
    this.observer.forEach((item) => {
      item.update(this.id, message);
    });
  }
}

let observer1 = new Observer({ id: "observer001" });
let observer2 = new Observer({ id: "observer002" });
let observer3 = new Observer({ id: "observer003" });

let subject1 = new Subject({ id: "subject001" });
let subject2 = new Subject({ id: "subject002" });
subject1.add(observer1);
subject1.add(observer2);
subject1.add(observer3);
subject2.add(observer1);
subject1.remome(observer1);
subject1.notify("消息");
subject2.notify("内容");
