module.exports.config = {
    name: "tt", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "1.0.1", // phiên bản của module này
    hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
    credits: "DungUwU", // Công nhận module sở hữu là ai
    description: "Check tương tác ngày/tuần/toàn bộ", // Thông tin chi tiết về lệnh
    commandCategory: "Box chat", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
    usages: "< all/week/day >", // Cách sử dụng lệnh
    cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
    dependencies: {
        "fs": " ",
        "moment-timezone": " "
    }
};
 
const path = __dirname + '/checktuongtac/';
const { min } = require('moment-timezone');
const moment = require('moment-timezone');
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
const { format } = require('path');
 
module.exports.onLoad = () => {
    const fs = require('fs');
    if (!global.hasOwnProperty("checkttbox_x213")) global.checkttbox_x213 = new Map();
    if (!global.hasOwnProperty("checkttboxA_x213")) global.checkttboxA_x213 = new Map();
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
  setInterval(() => {
    const today = moment.tz("Asia/Ho_Chi_Minh").day();
    const checkttData = fs.readdirSync(path);
    checkttData.forEach(file => {
      let fileData = JSON.parse(fs.readFileSync(path + file));
      if (fileData.time != today) {
        setTimeout(() => {
          fileData = JSON.parse(fs.readFileSync(path + file));
          if (fileData.time != today) {
            fileData.time = today;
            fs.writeFileSync(path + file, JSON.stringify(fileData, null, 4));
          }
        }, 60 * 1000);
      }
    })
  }, 60 * 1000);
}

const _6HOURS = 6 * 60 * 60 * 1000;
module.exports.handleEvent = async function ({ api, event, Threads }) {
    if (global.client.sending_top == true) return;
  
    const fs = global.nodemodule['fs'];
    const { threadID, senderID, participantIDs } = event;
    const today = moment.tz("Asia/Ho_Chi_Minh").day();

    if (global.checkttboxA_x213.has(threadID) && global.checkttboxA_x213.get(threadID) == true) return;
    const timeupdate = Date.now();
    if (
        event.isGroup == true &&
        fs.existsSync(path + threadID + '.json') &&    
        (!global.checkttbox_x213.has(threadID) ||
         timeupdate - global.checkttbox_x213.get(threadID) > _6HOURS)) {
      global.checkttboxA_x213.set(threadID, true);
      global.checkttbox_x213.set(threadID, timeupdate);
        
        const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));

        const rmIDs = Array.from(new Set([
          ...threadData.day.map(e => e.id),
          ...threadData.week.map(e => e.id),
          ...threadData.total.map(e => e.id),
        ]));

        const invalidIDs = [];

        for (const uvUID of rmIDs) {
            if (!participantIDs.includes(uvUID)) invalidIDs.push(uvUID);
        }
      
        for (const ivUID of invalidIDs) {
          const day_index = threadData.day.findIndex(e => e.id == ivUID);
          const week_index = threadData.week.findIndex(e => e.id == ivUID);
          const total_index = threadData.total.findIndex(e => e.id == ivUID);
          
          if (day_index != -1) {
              threadData.day.splice(day_index, 1);
          }
          if (week_index != -1) {
              threadData.week.splice(week_index, 1);
          }
          if (total_index != -1) {
              threadData.total.splice(total_index, 1);
          }
          
          fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
        }
      

      global.checkttboxA_x213.set(threadID, false);
    }
 
    if (!fs.existsSync(path + threadID + '.json')) {
        const newObj = {
            total: [],
            week: [],
            day: [],
            time: today
        };
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
        const threadInfo = await Threads.getInfo(threadID) || {};
        if (threadInfo.hasOwnProperty('isGroup') && threadInfo.isGroup) {
            const UserIDs = threadInfo.participantIDs;
            for (user of UserIDs) {
                if (!newObj.total.find(item => item.id == user)) {
                    newObj.total.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.week.find(item => item.id == user)) {
                    newObj.week.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.day.find(item => item.id == user)) {
                    newObj.day.push({
                        id: user,
                        count: 0
                    });
                }
            }
        }
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    if (threadData.time != today) {
      global.client.sending_top = true;
      setTimeout(() => global.client.sending_top = false, 5 * 60 * 1000);
    }
    const userData_week_index = threadData.week.findIndex(e => e.id == senderID);
    const userData_day_index = threadData.day.findIndex(e => e.id == senderID);
    const userData_total_index = threadData.total.findIndex(e => e.id == senderID);
    if (userData_total_index == -1) {
        threadData.total.push({
            id: senderID,
            count: 1,
        });
    } else threadData.total[userData_total_index].count++;
    if (userData_week_index == -1) {
        threadData.week.push({
            id: senderID,
            count: 1
        });
    } else threadData.week[userData_week_index].count++;
    if (userData_day_index == -1) {
        threadData.day.push({
            id: senderID,
            count: 1
        });
    } else threadData.day[userData_day_index].count++;
    // if (threadData.time != today) {
    //     threadData.day.forEach(e => {
    //         e.count = 0;
    //     });
    //     if (today == 1) {
    //         threadData.week.forEach(e => {
    //             e.count = 0;
    //         });
    //     }
    //     threadData.time = today;
    // }
 
    fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
}
 
module.exports.run = async function ({ api, event, args, Users, Threads }) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const fs = global.nodemodule['fs'];
    const { threadID, messageID, senderID, mentions } = event;
    if (!fs.existsSync(path + threadID + '.json')) {
        return api.sendMessage("Chưa có thống kê dữ liệu", threadID);
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    const query = args[0] ? args[0].toLowerCase() : '';
    
    if(query == 'locmem') {
        let threadInfo = await api.getThreadInfo(threadID);
        if(!threadInfo.adminIDs.some(e => e.id == senderID)) return api.sendMessage("Bạn không có quyền hạn sử dụng chức năng này", threadID);
        if(!threadInfo.isGroup) return api.sendMessage("Chỉ có thể sử dụng chức năng trong nhóm", threadID);
        if(!threadInfo.adminIDs.some(e => e.id == api.getCurrentUserID())) return api.sendMessage("Cần quyền Quản trị viên cho Bot để thực hiện lệnh", threadID);
        if(!args[1] || isNaN(args[1])) return api.sendMessage("Đã xảy ra lỗi, vui lòng thử lại sau...", threadID);
        let minCount = args[1],
            allUser = threadInfo.participantIDs;
        for(let user of allUser) {
            if(user == api.getCurrentUserID()) continue;
            if(!threadData.total.some(e => e.id == user) || threadData.total.find(e => e.id == user).count < minCount) {
              await new Promise(resolve => setTimeout(resolve, 3000));
              api.removeUserFromGroup(user, threadID);
              for(let e in threadData) {
                  if(e == 'time') continue;
                  if(threadData[e].some(e => e.id == user)) {
                      threadData[e].splice(threadData[e].findIndex(e => e.id == user), 1);
                  }
              }
            }
        }
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
        return api.sendMessage(`Đã xóa ${allUser.length - threadData.total.filter(e => e.count >= minCount).length} thành viên không đủ ${minCount} tin nhắn ( dùng lệnh nhiều lần để xóa toàn bộ thành viên bạn muốn )`, threadID);
    }

    var header = '',
        body = '',
        footer = '',
        msg = '',
        count = 1,
        storage = [],
        data = 0;
    if (query == 'all' || query == '-a' || query == 'tổng') {
        header = '💞 𝑪𝒉𝒆𝒄𝒌 𝑻𝒖̛𝒐̛𝒏𝒈 𝑻𝒂́𝒄 𝑻𝒐̂̉𝒏𝒈 💞\n';
        data = threadData.total;
    } else if (query == 'week' || query == '-w' || query == 'tuần') {
        header = '💞 𝑪𝒉𝒆𝒄𝒌 𝑻𝒖̛𝒐̛𝒏𝒈 𝑻𝒂́𝒄 𝑻𝒖𝒂̂̀𝒏 💞\n';
        data = threadData.week;
    } else if (query == 'day' || query == '-d' || query == 'ngày') {
        header = '💞 𝑪𝒉𝒆𝒄𝒌 𝑻𝒖̛𝒐̛𝒏𝒈 𝑻𝒂́𝒄 𝑵𝒈𝒂̀𝒚 💞\n';
        data = threadData.day;
    } else {
        data = threadData.total;
    }
    for (const item of data) {
        const userName = await Users.getNameUser(item.id) || 'Tên không tồn tại';
        const itemToPush = item;
        itemToPush.name = userName;
        storage.push(itemToPush);
    };
    let check = ['all', '-a', 'week', '-w', 'day', '-d', 'tuần', 'tổng', 'ngày'].some(e => e == query);
  if (!check && Object.keys(mentions).length > 1) {
        storage = storage.filter(e => mentions.hasOwnProperty(e.id));
    }
    //sort by count from high to low if equal sort by name
    storage.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        }
        else if (a.count < b.count) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
    if ((!check && Object.keys(mentions).length == 0) || (!check && Object.keys(mentions).length == 1) || (!check && event.type == 'message_reply')) {
        const UID = event.messageReply ? event.messageReply.senderID : Object.keys(mentions)[0] ? Object.keys(mentions)[0] : senderID;
        const userRank = storage.findIndex(e => e.id == UID);
        const userTotal = threadData.total.find(e => e.id == UID) ? threadData.total.find(e => e.id == UID).count : 0;
        const userTotalWeek = threadData.week.find(e => e.id == UID) ? threadData.week.find(e => e.id == UID).count : 0;
        const userTotalDay = threadData.day.find(e => e.id == UID) ? threadData.day.find(e => e.id == UID).count : 0;
        const nameUID = storage[userRank].name || 'Tên không tồn tại';
        const target = UID == senderID ? 'Bạn' : nameUID;
        if (userRank == -1) {
            return api.sendMessage(`→ ${target} chưa có thống kê dữ liệu`, threadID);
        }
        body += `💞𝑪𝒉𝒆𝒄𝒌 𝑻𝒖̛𝒐̛𝒏𝒈 𝑻𝒂́𝒄 𝑪𝒂́ 𝑵𝒉𝒂̂𝒏💞
        
        » 👻 𝗨𝘀𝗲𝗿 𝗵𝗶𝗲̣̂𝗻 𝗻𝗮̆́𝗺 𝘃𝗶̣ 𝘁𝗿𝗶́ 𝘁𝗼𝗽 ${userRank + 1} 𝘃𝗼̛́𝗶 ${userTotal} 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻
        » 👥 𝗧𝗲̂𝗻: ${nameUID}
        » 💬 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗧𝗿𝗼𝗻𝗴 𝗧𝘂𝗮̂̀𝗻: ${userTotalWeek}
        » 💬 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗧𝗿𝗼𝗻𝗴 𝗡𝗴𝗮̀𝘆: ${userTotalDay}
        »️ 🏆 𝗛𝗮̣𝗻𝗴: ${userRank + 1}
        » 📝 𝗧𝗼̂̉𝗻𝗴 𝗞𝗲̂́𝘁: ${userTotal} - (𝗧𝗼𝗽 ${userRank + 1})
        » ⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${timeNow}
        `.replace(/^ +/gm, '');
    } else {
        body = storage.map(item => {
            return `${count++}. ${(item.name) == null || undefined  ? "Không tên" : item.name} 𝘃𝗼̛́𝗶 ${item.count} 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻\n•---------------------------•`;
        }).join('\n');
        footer = `» 💬 𝗧𝗼̂̉𝗻𝗴 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻: ${storage.reduce((a, b) => a + b.count, 0)}\n» 📌 𝗖𝗵𝗶̉ 𝘁𝗶́𝗻𝗵 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗸𝗲̂̉ 𝘁𝘂̛̀ 𝗸𝗵𝗶 𝗕𝗼𝘁 𝘃𝗮̀𝗼 𝗕𝗼𝘅 𝘁𝗵𝗼̂𝗶 𝗻𝗵𝗲́ 💌\n\n     ⏰=== 「 ${timeNow} 」 ===⏰\n`;
    }
 
    msg = `${header}\n${body}\n${footer}`;
    return api.sendMessage(msg, threadID);
}