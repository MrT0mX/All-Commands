module.exports.config = {
  name: "ttt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Play caro with AI",
  commandCategory: "trò chơi",
  cooldowns: 5,
  usages: "x/o/delete/continue"
};

var AIMove;
const fs = require("fs");
const { loadImage, createCanvas } = require("canvas");

function startBoard({isX, data}) {
  data.board = new Array(3);
  data.isX = isX;
  data.gameOn = true;
  data.gameOver = false;
  data.available = [];
  for(var i = 0; i < 3; i++) data.board[i] = new Array(3).fill(0);
  return data;
}

async function displayBoard(data) {
  const path = __dirname + "/cache/ttt.png";
  let canvas = createCanvas(1200, 1200);
  let cc = canvas.getContext("2d");
  let background = await loadImage("https://i.postimg.cc/nhDWmj1h/background.png");
  cc.drawImage(background, 0, 0, 1200, 1200);
  var quanO = await loadImage("https://i.postimg.cc/rFP6xLXQ/O.png");
  var quanX = await loadImage("https://i.postimg.cc/HLbFqcJh/X.png");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var temp = data.board[i][j].toString();
      var x = 54 + 366*j;
      var y = 54 + 366*i;
      if (temp == "1") if (data.isX) { cc.drawImage(quanO, x, y, 360, 360) } else cc.drawImage(quanX, x, y, 360, 360);
      if (temp == "2") if (data.isX) { cc.drawImage(quanX, x, y, 360, 360) } else cc.drawImage(quanO, x, y, 360, 360);
    }
  }
  var ketqua = [];
  fs.writeFileSync(path, canvas.toBuffer("image/png"));
  ketqua.push(fs.createReadStream(path));
  return ketqua;
}

function checkAIWon(data) {
  if(data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 1) return true;
  if(data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 1) return true;   
  for(var i = 0; i < 3; ++i) {
    if(data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 1) return true;
    if(data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 1) return true;
  }
  return false;
}

function checkPlayerWon(data) {
  if(data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 2) return true;
  if(data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 2) return true;   
  for(var i = 0; i < 3; ++i) {
    if(data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 2) return true;
    if(data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 2) return true;
  }
  return false;
}

function solveAIMove({depth, turn, data}) {
  if (checkAIWon(data)) return +1;
  if (checkPlayerWon(data)) return -1;
  let availablePoint = getAvailable(data);
  if (availablePoint.length == 0) return 0;

  var min = Number.MAX_SAFE_INTEGER;
  var max = Number.MIN_SAFE_INTEGER;

  for (var i = 0, length = availablePoint.length; i < length; i++) {
    var point = availablePoint[i];
    if (turn == 1) {
      placeMove({point, player: 1, data});
      var currentScore = solveAIMove({depth: depth + 1, turn: 2, data});
      max = Math.max(currentScore, max);
      if (currentScore >= 0) {
        if (depth == 0) AIMove = point;
      }
      if (currentScore == 1) {
        data.board[point[0]][point[1]] = 0;
        break;
      }
       if(i == availablePoint.length - 1 && max < 0) {
        if(depth == 0) AIMove = point;
      }
    }
    else if (turn == 2) {
      placeMove({point, player: 2, data});
      var currentScore = solveAIMove({depth: depth + 1, turn: 1, data});
      min = Math.min(currentScore, min);
      if (min == -1) {
        data.board[point[0]][point[1]] = 0;
        break;
      }
    }
    data.board[point[0]][point[1]] = 0;
  }
  return turn == 1 ? max : min;
}

function placeMove({point, player, data}) {
  return data.board[point[0]][point[1]] = player;
}

function getAvailable(data) {
  let availableMove = []
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (data.board[i][j] == 0) availableMove.push([i, j]);
    }
  }
  return availableMove;
}

function checkAvailableSpot(point, pointArray) {
  if (pointArray.find(element => element.toString() == point.toString())) return true;
  else return false;
}

function move(x, y, data) {
  var availablePoint = getAvailable(data);
  var playerMove = [x, y];
  if (checkAvailableSpot(playerMove, availablePoint)) {
    placeMove({point: playerMove, player: 2, data});
  } else return "[🤖] - 𝗢̂ 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶́𝗰𝗵 𝗿𝗼̂̀𝗶 !";
  solveAIMove({depth: 0, turn: 1, data});
  placeMove({point: AIMove, player: 1, data});
}

function checkGameOver(data) {
  if (getAvailable(data).length == 0 || checkAIWon(data) || checkPlayerWon(data)) return true;
  return false;
}

function AIStart(data) {
  var point = [Math.round(Math.random()) * 2, Math.round(Math.random()) * 2];
  placeMove({point, player: 1, data});
}


module.exports.handleReply = async function({ event, api, handleReply }) {
  let { body, threadID, messageID, senderID } = event;
  if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
  let data = global.moduleData.tictactoe.get(threadID);
  if (!data || data.gameOn == false) return;
  var number = parseInt(body);
  if(!isNaN(number) && number > 0 && number < 10) {
    var row = number < 4 ? 0 : number < 7 ? 1 : 2;
    if (number == 1 || number == 4 || number == 7) var col = 0;
    if (number == 2 || number == 5 || number == 8) var col = 1;
    if (number == 3 || number == 6 || number == 9) var col = 2;
    var temp = move(row, col, data);
    var lmao = "";
    if(checkGameOver(data)) {
      var gayban = ["Gà 😎", "Non 😆", "Tuổi gì 😜", "Hơi non 😎", "Gà vcl 🐤", "Easy game 💅", "Xin nhẹ cái tuổi 😏", "Tuổi lonee 😎", "Ngu lắm em ạ 😏"];
      var win = ["Hên thôi 🙄", "Do không tập trung 😑", "Lỡ tay đánh nhầm 😡", "Do nay hơi đen thôi 😤", "Hãy chờ đó đi 😫", "Nhường thôi không có lần sau 😒"];
      if(checkAIWon(data)) lmao = `[🤖] - 𝗬𝗼𝘂 𝗟𝗼𝘀𝗲\n(${gayban[Math.floor(Math.random() * gayban.length)]})`;
      else if(checkPlayerWon(data)) lmao = `[🤖] - 𝗬𝗼𝘂 𝗪𝗶𝗻\n(${win[Math.floor(Math.random() * gayban.length)]})`;
      else lmao = "[🤖] - 𝗛𝗼𝗮̀ 𝗥𝗼̂̀𝗶";
      global.moduleData.tictactoe.delete(threadID);
    }
    var msg = lmao !== "" ? lmao : temp == undefined ? "[🤖] - 𝗥𝗲𝗽𝗹𝗮𝘆 𝘀𝗼̂́ 𝗼̂ 𝗺𝘂𝗼̂́𝗻 𝘁𝗶́𝗰𝗵" : temp;
    api.sendMessage({ body: msg, attachment: await displayBoard(data)}, threadID, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        author: senderID,
        messageID: info.messageID
      })
    }, messageID);
  } else return api.sendMessage("[🤖] - 𝗦𝗼̂́ 𝗼̂ 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂", threadID, messageID);
}

module.exports.run = async function ({ event, api, args }) {
  if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
  let { threadID, messageID, senderID } = event;
  const threadSetting = global.data.threadData.get(threadID) || {};
  var prefix = threadSetting.PREFIX || global.config.PREFIX;
  let data = global.moduleData.tictactoe.get(threadID) || { "gameOn": false, "player": "" };
  let concak = "" + prefix + this.config.name;
  let newData;
  if (args.length == 0) return api.sendMessage("[🤖] - 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝗫 𝗵𝗼𝗮̣̆𝗰 𝗢", threadID, messageID);
  if (args[0].toLowerCase() == "delete") {
    global.moduleData.tictactoe.delete(threadID);
    return api.sendMessage("[🤖] - 𝗫𝗼𝗮́ 𝗯𝗮̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴", threadID, messageID);
  }
  if (args[0].toLowerCase() == "continue") {
    if (!data.gameOn) return api.sendMessage("[🤖] - 𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂, 𝗱𝘂̀𝗻𝗴 " + concak + " 𝘅/𝗼 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝗼̛𝗶 𝘃𝗮́𝗻 𝗺𝗼̛́𝗶", threadID, messageID);
    return api.sendMessage({ body: "[🤖] - 𝗥𝗲𝗽𝗹𝗮𝘆 𝘀𝗼̂́ 𝗼̂ 𝘃𝗮̀ 𝘁𝗶́𝗰𝗵 𝘃𝗮̀𝗼", attachment: await displayBoard(data)}, threadID, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        author: senderID,
        messageID: info.messageID
      })
    }, messageID);
  }
  if (!data.gameOn) {
    var abc = args[0].toLowerCase();
    if (abc !== "x" && abc !== "o") return api.sendMessage("[🤖] - 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝗫 𝗵𝗼𝗮̣̆𝗰 𝗢", threadID, messageID);
    if (abc == "o") {
      newData = startBoard({ isX: false, data, threadID });
      api.sendMessage({ body: "[🤖] - 𝗕𝗮̣𝗻 𝗰𝗵𝗼̛𝗶 𝘁𝗿𝘂̛𝗼̛́𝗰\n𝗥𝗲𝗽𝗹𝗮𝘆 𝘀𝗼̂́ 𝗼̂ 𝘃𝗮̀ 𝘁𝗶́𝗰𝗵 𝘃𝗮̀𝗼", attachment: await displayBoard(newData)}, threadID, (error, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          author: senderID,
          messageID: info.messageID
        })
      }, messageID);
    }
    if (abc == "x") {
      newData = startBoard({ isX: true, data, threadID });
      AIStart(newData);
      api.sendMessage({ body: "[🤖] - 𝗕𝗼𝘁 𝗰𝗵𝗼̛𝗶 𝘁𝗿𝘂̛𝗼̛́𝗰\n𝗥𝗲𝗽𝗹𝗮𝘆 𝘀𝗼̂́ 𝗼̂ 𝘃𝗮̀ 𝘁𝗶́𝗰𝗵 𝘃𝗮̀𝗼", attachment: await displayBoard(data)}, threadID,(error, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          author: senderID,
          messageID: info.messageID
        })
      }, messageID);
    }
    newData.player = senderID;
    global.moduleData.tictactoe.set(threadID, newData);
  } else return api.sendMessage("[🤖] - 𝗡𝗵𝗼́𝗺 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶 𝟭 𝘃𝗮́𝗻 𝗴𝗮𝗺𝗲\n𝗗𝘂̀𝗻𝗴:\n" + concak + " continue -> tiếp tục\n" + concak + " delete -> xóa", threadID, messageID);
}