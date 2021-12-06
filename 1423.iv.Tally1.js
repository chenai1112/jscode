/**
Team                           | MP |  W |  D |  L |  P
Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6
Blithering Badgers             |  3 |  1 |  0 |  2 |  3
Courageous Californians        |  3 |  0 |  1 |  2 |  1
 */
/**
 * 1
 */
function Tally(matchRecords) {
  var dict = {};
  for (var i = 0; i < matchRecords.length; i++) {
    var record = matchRecords[i];
    if (record) {
      var [A, B, result] = record.split(";");
      // 如果没有存入，就要初始化一次
      if (!dict[A]) {
        dict[A] = {
          teamName: A,
          MP: 0,
          W: 0,
          L: 0,
          D: 0,
          P: 0,
        };
      }

      if (!dict[B]) {
        dict[B] = {
          teamName: B,
          MP: 0,
          W: 0,
          L: 0,
          D: 0,
          P: 0,
        };
      }

      dict[A].MP++;
      dict[B].MP++;

      if (result === "win") {
        dict[A].W++;
        dict[A].P += 3;
        dict[B].L++;
      }

      if (result === "loss") {
        dict[B].W++;
        dict[B].P += 3;
        dict[A].L++;
      }

      if (result === "draw") {
        dict[A].D++;
        dict[B].D++;
        dict[A].P += 1;
        dict[B].P += 1;
      }
    }
  }

  var recordArray = [];
  // 各队数据转化成数组
  for (let item in dict) {
    recordArray.push(dict[item]);
  }

  // 降序排列
  recordArray.sort((a, b) => {
    return b.P - a.P;
  });

  function render(recordArray) {
    var model = "\nTeam                           | MP | W | D | L | P\n";
    var namePadding = 30;
    for (var i = 0; i < recordArray.length; i++) {
      var record = recordArray[i];
      var { teamName, MP, W, D, L, P } = record;
      var name = teamName.padEnd(namePadding, " ");
      model += `${name} | ${MP}  | ${W} | ${D} | ${L} | ${P}\n`;
    }
    console.log(model);
    return model;
  }
  return render(recordArray);
}

Tally([
  "Allegoric Alaskans;Blithering Badgers;win",
  "Devastating Donkeys;Courageous Californians;draw",
  "Devastating Donkeys;Allegoric Alaskans;win",
  "Courageous Californians;Blithering Badgers;loss",
  "Blithering Badgers;Devastating Donkeys;loss",
  "Allegoric Alaskans;Courageous Californians;win",
]);
