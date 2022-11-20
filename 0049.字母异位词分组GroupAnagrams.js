/**
49. 字母异位词分组
中等
1.3K
相关企业
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]
 

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母
通过次数
403.7K
提交次数
596.1K
通过率
67.7%
 */

var groupAnagrams = function (strs) {
  if (strs.length === 0) {
    return [];
  }
  const map = new Map();

  for (const str of strs) {
    const characters = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const ascii = str.charCodeAt(i) - 97;
      characters[ascii]++;
    }
    const key = characters.join("");
    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }

  const result = [];
  for (const arr of map) {
    result.push(arr[1]);
  }

  return result;
};
