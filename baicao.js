module.exports.config = {
    name: "baicao",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "",
    description: "Game 3 cây dành cho nhóm có đặt cược (có ảnh lá bài)",
    commandCategory: "Trò Chơi",
    usages: "[start/join/info/leave]",
    cooldowns: 1
};


const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["spades", "hearts", "diamonds", "clubs"];
const deck = [];

for (let i = 0 ; i < values.length; i++) {
  for (let x = 0; x < suits.length; x++) {
    let weight = parseInt(values[i]);
    if (["J", "Q", "K"].includes(values[i])) weight = 10;
    else if (values[i] == "A") weight = 11;
    const card = {
      Value: values[i],
      Suit: suits[x],
      Weight: weight,
      Icon: suits[x] == "spades" ? "♠️" : suits[x] == "hearts" ? "♥️" : suits[x] == "diamonds" ? "♦️" : "♣️"
        };
    deck.push(card);
  }
}

function createDeck() {
  // for 1000 turns
  // switch the values of two random cards
  const deckShuffel = [...deck];
  for (let i = 0; i < 1000; i++) {
    const location1 = Math.floor((Math.random() * deckShuffel.length));
    const location2 = Math.floor((Math.random() * deckShuffel.length));
    const tmp = deckShuffel[location1];
    deckShuffel[location1] = deckShuffel[location2];
    deckShuffel[location2] = tmp;
  }
  return deckShuffel;
}

function getLinkCard(Value, Suit) {
  return `https://raw.githubusercontent.com/TuanDeepTry-14072003/poker-cards/main/cards/${Value == "J" ? "jack" : Value == "Q" ? "queen" : Value == "K" ? "king" : Value == "A" ? "ace" : Value}_of_${Suit}.png`;
}

async function drawCard(cards) {
  // 500 x 726
  const Canvas = require("canvas");
    const canvas = Canvas.createCanvas(500*cards.length, 726);
  const ctx = canvas.getContext("2d");
  let x = 0;
  for (const card of cards) {
    const loadImgCard = await Canvas.loadImage(card);
    ctx.drawImage(loadImgCard, x, 0);
    x += 500;
  }
  return canvas.toBuffer();
}

module.exports.handleEvent = async ({ Currencies, event, api, Users }) => {
  const Canvas = require("canvas");
  const fs = require ("fs-extra");
  
    const { senderID, threadID, body, messageID } = event;
  
    if (typeof body == "undefined") return;
    if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
    if (!global.moduleData.baicao.has(threadID)) return;
    var values = global.moduleData.baicao.get(threadID);
    if (values.start != 1) return;
  
    const deckShuffel = values.deckShuffel; // Bộ bài

    if (body.indexOf("Chia bài") == 0 || body.indexOf("chia bài")   == 0) {
        if (values.chiabai == 1) return;
        for (const key in values.player) {
            const card1 = deckShuffel.shift();
            const card2 = deckShuffel.shift();
            const card3 = deckShuffel.shift();
            var tong = (card1.Weight + card2.Weight + card3.Weight);
            if (tong >= 20) tong -= 20;
            if (tong >= 10) tong -= 10;
            values.player[key].card1 = card1;
            values.player[key].card2 = card2;
            values.player[key].card3 = card3;
            values.player[key].tong = tong;
            
            const linkCards = [];
            
            for (let i = 1; i < 4; i++) {
              const Card = values.player[key]["card" + i];
              linkCards.push(getLinkCard(Card.Value, Card.Suit));
            }
            
            const pathSave = __dirname + `/cache/card${values.player[key].id}.png`;
            fs.writeFileSync(pathSave, await drawCard(linkCards));
            
            api.sendMessage({
              body: `🃏 𝗕𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: ${card1.Value}${card1.Icon} | ${card2.Value}${card2.Icon} | ${card3.Value}${card3.Icon} \n\n𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗯𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: ${tong} 𝗻𝘂́𝘁`,
              attachment: fs.createReadStream(pathSave)
            }, values.player[key].id, (error, info) => {
                if (error) return api.sendMessage(`𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗰𝗵𝘂̛𝗮 𝗯𝗮̀𝗶 𝗰𝗵𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶: ${values.player[key].id}`, threadID);
                fs.unlinkSync(pathSave);
            });
                
        }
        values.chiabai = 1;
        global.moduleData.baicao.set(threadID, values);
        return api.sendMessage("💦 𝗖𝗵𝗶𝗮 𝗯𝗮̀𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ! 𝗧𝗮̂́𝘁 𝗰𝗮̉ 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗼́ 𝟮 𝗹𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗮𝘆 𝗯𝗮̀𝗶, 𝗻𝗲̂́𝘂 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗮̂́𝘆 𝗯𝗮̀𝗶 𝗵𝗮̃𝘆 𝗸𝗶𝗲̂̉𝗺 𝘁𝗿𝗮 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗵𝗼̛̀ 💌", threadID);
    }

    if (body.indexOf("Đổi bài") == 0 || body.indexOf("đổi bài")   == 0) {
        if (values.chiabai != 1) return;
        var player = values.player.find(item => item.id == senderID);
        if (player.doibai == 0) return api.sendMessage("𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗹𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗮𝘆 𝗯𝗮̀𝗶 𝗿𝗼̂̀𝗶 🚫", threadID, messageID);
        if (player.ready == true) return api.sendMessage("𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘀𝗮̆̃𝗻 𝘀𝗮̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗮𝘆 𝗯𝗮̀𝗶 🚫", threadID, messageID);
        const card = ["card1","card2","card3"];
        player[card[(Math.floor(Math.random() * card.length))]] = deckShuffel.shift();
        player.tong = (player.card1.Weight + player.card2.Weight + player.card3.Weight);
        if (player.tong >= 20) player.tong -= 20;
        if (player.tong >= 10) player.tong -= 10;
        player.doibai -= 1;
        global.moduleData.baicao.set(values);
        
        const linkCards = [];
            
        for (let i = 1; i < 4; i++) {
          const Card = player["card" + i];
          linkCards.push(getLinkCard(Card.Value, Card.Suit));
        }
        
      const pathSave = __dirname + `/cache/card${player.id}.png`;
        fs.writeFileSync(pathSave, await drawCard(linkCards));
      
        return api.sendMessage({
          body: `🃏 𝗕𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘀𝗮𝘂 𝗸𝗵𝗶 𝗕𝗼𝘁 𝘁𝗵𝗮𝘆: ${player.card1.Value}${player.card1.Icon} | ${player.card2.Value}${player.card2.Icon} | ${player.card3.Value}${player.card3.Icon}\n\n🌸 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗯𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: ${player.tong} 𝗻𝘂́𝘁`,
          attachment: fs.createReadStream(pathSave)
    }, player.id, (error, info) => {
            if (error) return api.sendMessage(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐚𝐲 𝐛𝐚̀𝐢 𝐜𝐡𝐨 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: ${player.id}`, threadID);
            fs.unlinkSync(pathSave);
        });
    }

    if (body.indexOf("ready") == 0 || body.indexOf("Ready")   == 0) {
        if (values.chiabai != 1) return;
        var player = values.player.find(item => item.id == senderID);
        if (player.ready == true) return;
        const name = await Users.getNameUser(player.id);
        values.ready += 1;
        player.ready = true;
        if (values.player.length == values.ready) {
            const player = values.player;
            player.sort(function (a, b) { return b.tong - a.tong });

            var ranking = [], num = 1;

            for (const info of player) {
                const name = await Users.getNameUser(info.id);
                ranking.push(`${num++} • ${name} 𝘃𝗼̛́𝗶 ${info.card1.Value}${info.card1.Icon} | ${info.card2.Value}${info.card2.Icon} | ${info.card3.Value}${info.card3.Icon} => ${info.tong} 𝗻𝘂́𝘁 💸\n`);
            }
            
            try {
                await Currencies.increaseMoney(player[0].id, values.rateBet * player.length);
            } catch (e) {};
            global.moduleData.baicao.delete(threadID);
            
            return api.sendMessage(`[🌸] 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉:\n\n ${ranking.join("\n")}\n\n𝗥𝗶𝗲̂𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗧𝗢𝗣 𝟭 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝘁𝘂̛𝗼̛𝗻𝗴 𝘂̛́𝗻𝗴 ${values.rateBet * player.length} 𝗩𝗡𝗗 💵`, threadID);
        }
        else return api.sendMessage(`[😻] 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶: ${name} 𝘃𝘂̛̀𝗮 𝘀𝗮̆̃𝗻 𝘀𝗮̀𝗻𝗴 𝗹𝗮̣̂𝘁 𝗯𝗮̀𝗶, 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 ${values.player.length - values.ready} 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗰𝗵𝘂̛𝗮 𝗹𝗮̣̂𝘁 𝗯𝗮̀𝗶`, event.threadID);
    }
    
    if (body.indexOf("nonready") == 0 || body.indexOf("Nonready")   == 0) {
        const data = values.player.filter(item => item.ready == false);
        var msg = [];

        for (const info of data) {
            const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
            msg.push(name);
        }
        if (msg.length != 0) return api.sendMessage("[😿] 𝗡𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗰𝗵𝘂̛𝗮 𝘀𝗮̆̃𝗻 𝘀𝗮̀𝗻𝗴 𝗯𝗮𝗼 𝗴𝗼̂̀𝗺: " + msg.join(", "), threadID);
        else return;
    }
}

module.exports.run = async ({ api, event, args, Currencies }) => {
    var { senderID, threadID, messageID } = event;
 const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream, fs } = require("fs-extra");
  const request = require("request")
    threadID = String(threadID);
    senderID = String(senderID);
    if (!existsSync(__dirname + '/cache/3cay.png')) {
        request('https://i.imgur.com/ixYeOs8.jpg').pipe(createWriteStream(__dirname + '/cache/3cay.png'));
      }
    if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
    var values = global.moduleData.baicao.get(threadID) || {};
  var data = await Currencies.getData(event.senderID);
  var money = data.money     
    if(!args[0]) {
var msg =  {body: `🃏====[ 𝐁𝐚̀𝐧 𝐁𝐚̀𝐢 𝐂𝐚̀𝐨 ]====🃏\n\n𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 𝗯𝗮̣𝗻 𝘁𝗼̛́𝗶 𝘃𝗼̛́𝗶 𝘀𝗼̀𝗻𝗴 𝗯𝗮̣𝗰 𝗰𝘂̉𝗮 𝘁𝗵𝗮̂̀𝗻 𝗯𝗮̀𝗶 𝗗𝘂𝗯𝗮𝗶\n𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̣𝗻 𝗰𝗮̂̀𝗻 𝗻𝗵𝗮̣̂𝗽 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝘂̛ 𝘀𝗮𝘂:\n» /𝗯𝗮𝗶𝗰𝗮𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 [ Số Tiền Cược ]\n» /𝗯𝗮𝗶𝗰𝗮𝗼 𝘀𝘁𝗮𝗿𝘁 [ Bắt Đầu Bàn 3 Cây ]\n» /𝗯𝗮𝗶𝗰𝗮𝗼 𝗶𝗻𝗳𝗼 [ Xem Thông Tin Bàn Bài Cào ]\n» /𝗯𝗮𝗶𝗰𝗮𝗼 𝗷𝗼𝗶𝗻 [ Để Người Chơi Vào Game]\n» /𝗯𝗮𝗶𝗰𝗮𝗼 𝗹𝗲𝗮𝘃𝗲 [ Để Rời Bàn 3 Cây ]\n» 𝗖𝗵𝗶𝗮 𝗯𝗮̀𝗶 [ Để Chia Bài Cho Người Chơi Chỉ Có Chủ Bàn Mới Nhập Có Hiệu Lệnh ]\n» Đ𝗼̂̉𝗶 𝗕𝗮̀𝗶 [ Để Đổi Bài Mỗi Người Chơi Chỉ Có 2 Lượt Đổi Bài Tương Ứng ]\n» 𝗥𝗲𝗮𝗱𝘆 [ Sẵn Sàng Mở Bài ]\n» 𝗡𝗼𝗻𝗿𝗲𝗮𝗱𝘆 [ Xem Những Người Chưa Sẵn Sàng ]`, attachment : [
      createReadStream(__dirname + "/cache/3cay.png")
    ]}
     return api.sendMessage(msg, threadID, messageID)    }
     switch (args[0]) {
        case "create":
        case "-c": {
            if (global.moduleData.baicao.has(threadID)) return api.sendMessage("[🃏] 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆 𝗰𝗼́ 𝘀𝗼̀𝗻𝗴 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝗿𝗼̂̀𝗶", threadID, messageID);
            if (!args[1] || isNaN(args[1]) || parseInt(args[1]) <= 1) return api.sendMessage("🌸 𝗠𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝗵𝗼𝗮̣̆𝗰 𝗺𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗵𝗼̉ 𝗵𝗼̛𝗻 𝟭 𝗩𝗡𝗗 💵", threadID, messageID);
      if (money < args[1]) return api.sendMessage(`[🌸] 𝗕𝗮̣𝗻 𝘁𝗵𝗶𝗲̂́𝘂 𝘁𝗶𝗲̂̀𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́: ${args[1]} 𝗩𝗡𝗗 💵`,event.threadID,event.messageID);
      await Currencies.decreaseMoney(event.senderID, Number(args[1]));
            global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ], rateBet: Number(args[1])});
            return api.sendMessage(`🃏 𝗕𝗮̀𝗻 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́ ${args[1]} 𝗩𝗡𝗗 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̛̉𝗶 𝘁𝗮̣𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 !\n𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̣𝗻 𝗵𝗮̃𝘆 𝗻𝗵𝗮̣̂𝗽 /𝗯𝗮𝗶𝗰𝗮𝗼 𝗷𝗼𝗶𝗻\n[🌸] 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮̣𝗼 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗮̂̀𝗻 𝗷𝗼𝗶𝗻`, event.threadID, event.messageID);
        }
        
        case "join":
        case "-j": {
            if (!values) return api.sendMessage("🃏 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝗻𝗮̀𝗼, 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗮̣𝗼 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 /𝗯𝗮𝗶𝗰𝗮𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 [ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 ]", threadID, messageID);
            if (values.start == 1) return api.sendMessage("𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶 𝗿𝗼̂̀𝗶 🙈", threadID, messageID);
            if (money < values.rateBet) return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝗮̂̃𝗻 𝗰𝗼̀𝗻 𝘁𝗵𝗶𝗲̂́𝘂 𝘁𝗶𝗲̂̀𝗻 𝗸𝗵𝗶 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́: ${values.rateBet}$ 💵`,event.threadID,event.messageID)
            if (values.player.find(item => item.id == senderID)) return api.sendMessage("🃏 𝗕𝗮̣𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶 𝗻𝗮̀𝘆 𝘁𝘂̛̀ 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗿𝗼̂̀𝗶", threadID, messageID);
            values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 2, "ready": false });
            await Currencies.decreaseMoney(event.senderID, values.rateBet);
            global.moduleData.baicao.set(threadID, values);
            return api.sendMessage("𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🌸", threadID, messageID);
        }

        case "leave":
        case "-l": {
            if (typeof values.player == "undefined") return api.sendMessage("🃏 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝗻𝗮̀𝗼, 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗮̣𝗼 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 /𝗯𝗮𝗶𝗰𝗮𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 [ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 ]", threadID, messageID);
            if (!values.player.some(item => item.id == senderID)) return api.sendMessage("🌸 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆", threadID, messageID);
            if (values.start == 1) return api.sendMessage("𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝘃𝘂̛̀𝗮 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶 𝗿𝗼̂̀𝗶 😿", threadID, messageID);
            if (values.author == senderID) {
                global.moduleData.baicao.delete(threadID);
                api.sendMessage("𝗡𝗵𝗮̀ 𝗰𝗮́𝗶 𝘃𝘂̛̀𝗮 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻, 𝗰𝘂̀𝗻𝗴 𝗻𝗴𝗵𝗶̃𝗮 𝘃𝗼̛́𝗶 𝘃𝗶𝗲̣̂𝗰 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶 𝘀𝗲̃ 𝗯𝗶̣ 𝗴𝗶𝗮̉𝗶 𝘁𝗮́𝗻 🃏", threadID, messageID);
            }
            else {
                values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
                api.sendMessage("𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶", threadID, messageID);
                global.moduleData.baicao.set(threadID, values);
            }
            return;
        }

        case "start":
        case "-s": {
            if (!values) return api.sendMessage("🃏 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝗻𝗮̀𝗼, 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗮̣𝗼 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 /𝗯𝗮𝗶𝗰𝗮𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 [ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 ]", threadID, messageID);
            if (values.author !== senderID) return api.sendMessage("🃏 𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶", threadID, messageID);
            if (values.player.length <= 1) return api.sendMessage("🃏 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗮̀𝗼 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮, 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗺𝗼̛̀𝗶 𝘁𝗵𝗲̂𝗺 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗵𝗮́𝗰 𝗻𝗵𝗮̣̂𝗽 𝗹𝗲̣̂𝗻𝗵 /𝗯𝗮𝗶𝗰𝗮𝗼 𝗷𝗼𝗶𝗻", threadID, messageID);
            if (values.start == 1) return api.sendMessage("🌸 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̀𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗶𝗮 𝗯𝗮̀𝗶 𝗯𝗼̛̉𝗶 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶", threadID, messageID);
            values.deckShuffel = createDeck(); // Bộ bài
            values.start = 1;
            return api.sendMessage("🌸 𝗕𝗮̀𝗻 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘃𝗮̀𝗼 𝘀𝗼̀𝗻𝗴", threadID, messageID);
        }

        case "info":
        case "-i": {
            if (typeof values.player == "undefined") return api.sendMessage("🃏 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗯𝗮̀𝗶 𝗰𝗮̀𝗼 𝗻𝗮̀𝗼, 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗮̣𝗼 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 /𝗯𝗮𝗶𝗰𝗮𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 [ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 ]", threadID, messageID);
            return api.sendMessage(
                "🎰== 𝗕𝗔̀𝗡 𝗕𝗔̀𝗜 𝗖𝗔̀𝗢 ==🎰" +
                "\n\n- 𝗡𝗵𝗮̀ 𝗰𝗮́𝗶: " + values.author +
                "\n- 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶: " + values.player.length + " 𝗻𝗴𝘂̛𝗼̛̀𝗶" +
                "\n- 𝗠𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰: " + values.rateBet + " 𝗩𝗡𝗗"
            , threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}