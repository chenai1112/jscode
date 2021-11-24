/**
 * 说明：实现一个方法，用于比较两个版本号（version1、version2）
 *     如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
 *     版本号规则`x.y.z`，xyz均为>=0的整数
 */

function compareVersion(version1, version2) {
  /* 功能实现 */
  let version1Arr = version1.split(".");
  let version2Arr = version2.split(".");
  let maxLen = Math.max(version1Arr.length, version2Arr.length);
  let ver1;
  let ver2;
  // console.log("--maxLen--", maxLen);

  for (let i = 0; i < maxLen; i++) {
    // if (!version1Arr[i]) {
    //   version1Arr[i] = 0;
    // }
    // if (!version2Arr[i]) {
    //   version2Arr[i] = 0;
    // }
    // ver1 = version1Arr[i] - 0;
    // ver2 = version2Arr[i] - 0;

    version1Arr[i] = +version1Arr[i] || 0;
    version2Arr[i] = +version2Arr[i] || 0;
    // console.log("---000---", ver1, ver2);
    // if (ver1 < ver2) return -1;
    // if (ver1 > ver2) return 1;
    if (version1Arr[i] < version2Arr[i]) {
      return -1;
    } else if (version1Arr[i] > version2Arr[i]) {
      return 1;
    }
  }
  return 0;
}

// function compareVersion(v1, v2) {
//   if (typeof v1 !== "string") return false;
//   if (typeof v2 !== "string") return false;
//   v1 = v1.split(".");
//   v2 = v2.split(".");
//   const len = Math.max(v1.length, v2.length);
//   for (let i = 0; i < len; ++i) {
//     v1[i] = +v1[i] || 0;
//     v2[i] = +v2[i] || 0;
//     if (v1[i] > v2[i]) return 1;
//     if (v1[i] < v2[i]) return -1;
//   }
//   return 0;
// }

console.log(compareVersion("0.20.7", "0.20.8")); // -1
console.log(compareVersion("0.20.9", "0.20.8")); // 1
console.log(compareVersion("0.20.08", "0.20.8")); // 0
console.log(compareVersion("0.20.08", "0.20.8.1")); // -1
console.log(compareVersion("0.20.8.0", "0.20.8")); // 0
console.log(compareVersion("0.20.8.1", "0.20.8")); // 1
console.log(compareVersion("0.020", "0.20")); // 0

// 测试用例
// console.log(compareVersion("0.20.7", "0.20.8") === -1); // -1
// console.log(compareVersion("0.20.9", "0.20.8") === 1); // 1
// console.log(compareVersion("0.20.08", "0.20.8") === 0); // 0
// console.log(compareVersion("0.20.08", "0.20.8.1") === -1); // -1
// console.log(compareVersion("0.20.8.0", "0.20.8") === 0); // 0
// console.log(compareVersion("0.20.8.1", "0.20.8") === 1); // 1
// console.log(compareVersion("0.020", "0.20") === 0); // 0
