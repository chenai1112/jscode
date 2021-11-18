function type(data) {
  if (arguments.length === 0) return new Error("type方法未传参");
  var typeStr = Object.prototype.toString.call(data);
  return typeStr.match(/\[object (.*?)\]/)[1].toLowerCase();
}

type({}); //"object"
type(new Date()); //"date"
type([]); //"array"

const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
