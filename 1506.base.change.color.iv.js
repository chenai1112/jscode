// 实现一个js函数，满足先开始显示红色3秒、然后显示黄色1秒，最后显示绿色2秒，进行循环。

const changeColor = (color: string, time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(color);
    }, time);
  });
};

const getColor = async () => {
  try {
    let color: any = "red";
    color = await changeColor("yellow", 3000);
    color = await changeColor("green", 1000);
    color = await changeColor("red", 2000);
    getColor();
  } catch (e) {}
};
