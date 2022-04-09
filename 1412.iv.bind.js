Function.prototype.myBind = function (...args) {
  if (typeof this !== "function") {
    return;
  }
  let func = this;
  // const argusList = args;
  const obj = args.shift();
  // console.log("--args--", args);
  return function () {
    return func.apply(obj, args);
    // return func();
  };
};

var obj1 = {
  name: "hhe",
  say: function () {
    console.log("---", this.name);
    return "yes!";
  },
};

var ojb2 = { name: "kkj" };

function say() {
  console.log("---", this.name);
  return "yes!";
}

// say.myBind(ojb2, 1, 2, 3);
// console.log(ojb2);
// var cc = say.myBind(ojb2, 1, 2, 3);
// let c = cc();
// console.log(c);

// obj1.say();
// obj1.say.myBind(ojb2, 1, 2, 3);
// cc = say.myBind(ojb2, 1, 2, 3);
// cc();

// Function.prototype.call = function (...args) {
//   if (typeof this !== "function") {
//     return;
//   }
//   context = args.shift() || window; // 参数默认值并不会排除null，所以重新赋值
//   context.fn = this; // this是调用call的函数
//   const result = context.fn(...args);
//   delete context.fn; // 执行后删除新增属性
//   return result;
// };

Function.prototype.call = function (context = window, ...args) {
  if (typeof this !== "function") {
    return;
  }
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

// function sayHelloTo(to) {
//   console.log(`${this.name} say hello to ${to}`);
// }

// var Jerry = {
//   name: "Jerry",
// };
// sayHelloTo.call(Jerry, "Tom");

Function.prototype.apply = function (context, ...args) {
  if (typeof this !== "function") {
    return;
  }
  context.fn = this;
  const result = context.fn(args);
  delete context.fn;
  return result;
};

function sayHelloTo(to) {
  console.log(`${this.name} say hello to ${to}`);
}

var Jerry = {
  name: "Jerry",
};
sayHelloTo.apply(Jerry, "Tom");
