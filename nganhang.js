module.exports.config = {
    name: "nganhang",
    version: "2.0.5",
    hasPermssion: 0,
    credits: "Yae Miko",
    description: "Gửi tiền vào ngân hàng",
    commandCategory: "Kiếm Tiền",
    usages: "",
    cooldowns: 2
};


module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const checkBank = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/check?ID=${senderID}`)).data   
    const { createReadStream } = require(`fs-extra`);
    switch(args[0]) {
        case 'register':
        case '-r':
        case 'r': {
            const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/register?senderID=${senderID}&name=${encodeURI((await Users.getData(senderID)).name)}`)).data
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐌𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ' + res.message.password, senderID);
            return api.sendMessage(`=== [ ${res.message.noti} ] ===\n\n👤 𝗖𝗵𝘂̉ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${res.message.name}\n💳 𝗦𝗧𝗞: ${res.message.STK}\n💰 𝗦𝗼̂́ 𝗱𝘂̛: ${parseInt(res.message.money)}\n🔐  𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱: đã được gửi đến bạn vui lòng check tin nhắn riêng ( hoặc tin spam )`, threadID, messageID)
        }
        
         case "find":
        case "-f": {
            if (checkBank.status == false) api.sendMessage("[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠", threadID, messageID)
            if (args[1] != "stk" && args[1] != "id") {
                api.sendMessage("[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̣𝐧 đ𝐮́𝐧𝐠 𝐤𝐢𝐞̂̉𝐮 𝐝𝐮̛̃ 𝐤𝐢𝐞̣̂𝐧 (𝐬𝐭𝐤/𝐢𝐝)", threadID, messageID)
            }
            let { data } = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/find?type=${args[1].toUpperCase()}&${args[1].toUpperCase()}=${args[2]}`))
            const name = data.message.name
            const stk = data.message.data.STK
            const soDu = data.message.data.money
            return api.sendMessage(`==== [ 𝐌𝐈𝐑𝐀𝐈 𝐁𝐀𝐍𝐊 ] ====\n\m👤 𝗖𝗵𝘂̉ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${name}\n💳 𝗦𝗧𝗞: ${stk}\n💰 𝗦𝗼̂́ 𝗱𝘂̛: ${parseInt(soDu)}$`, threadID, messageID)
        }
      case 'info':
      case '-i':
      case 'check':
      case '-c': {
        var a = event.senderID;
        if(checkBank.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠', threadID, messageID);
        const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/find?type=ID&ID=${a}`)).data  
          return api.sendMessage(`==== [ 𝐌𝐈𝐑𝐀𝐈 𝐁𝐀𝐍𝐊 ] ====\n\n👤 𝗖𝗵𝘂̉ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${res.message.name}\n💳 𝗦𝗧𝗞: ${res.message.data.STK}\n💰 𝗦𝗼̂́ 𝗱𝘂̛: ${parseInt(res.message.data.money)}$`, threadID, messageID)
      }
        case 'get':
        case 'rút': {
            if(checkBank.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠', threadID, messageID);
            if(!args[1]) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩: 𝐠𝐞𝐭 [𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧]', threadID, messageID);
            api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐇𝐨𝐚̀𝐧 𝐭𝐚̂́𝐭 𝐛𝐮̛𝐨̛́𝐜 𝐜𝐮𝐨̂́𝐢 𝐜𝐮̀𝐧𝐠 𝐨̛̉ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̛̀', threadID, messageID);
            return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐦𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐫𝐮́𝐭 𝐭𝐢𝐞̂̀𝐧', senderID, (error, info) => 
                global.client.handleReply.push({
                    name: this.config.name,
                    type: 'getMoney',
                    messageID: info.messageID,
                    author: event.senderID,
                    money: args[1],
                    threadID: threadID
                })
            );
        }
         case 'top':
         case '-t':{
            if(checkBank.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠', threadID, messageID);
            const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/top`)).data  
            if(res.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐝𝐮̛̃ 𝐥𝐢𝐞̣̂𝐮', threadID, messageID);
            var msg = res.message + '\n\n'
            for (let i of res.ranking) {
                msg += `${i.rank}. ${i.name}\n» 💰 𝗦𝗼̂́ 𝗱𝘂̛: ${parseInt(i.money)}$\n================\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        case 'pay':
        case '-p': {
            if(checkBank.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠', threadID, messageID);
            if(!args[1] || !args[2] || !args[3]) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐜𝐡𝐢́𝐧𝐡 𝐱𝐚́𝐜 𝐤𝐢𝐞̂̉𝐮 𝐝𝐮̛̃ 𝐥𝐢𝐞̣̂𝐮: 𝐩𝐚𝐲 𝐬𝐭𝐤 [𝐬𝐭𝐤 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐧𝐡𝐚̣̂𝐧] [𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧]', threadID, messageID);
            if(args[1] == 'stk') {
                api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐇𝐨𝐚̀𝐧 𝐭𝐚̂́𝐭 𝐛𝐮̛𝐨̛́𝐜 𝐜𝐮𝐨̂́𝐢 𝐜𝐮̀𝐧𝐠 𝐨̛̉ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̛̀', threadID, messageID);
                return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐦𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐭𝐢𝐞̂̀𝐧', senderID, (error, info) => 
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: 'paySTK',
                        messageID: info.messageID,
                        author: event.senderID,
                        STK: args[2],
                        money: args[3],
                        threadID: threadID
                    })
                );
            }
            if(args[1] == 'id') {
                if(checkBank.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠', threadID, messageID);
                api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐇𝐨𝐚̀𝐧 𝐭𝐚̂́𝐭 𝐛𝐮̛𝐨̛́𝐜 𝐜𝐮𝐨̂́𝐢 𝐜𝐮̀𝐧𝐠 𝐨̛̉ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̛̀', threadID, messageID);
                return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐦𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐭𝐢𝐞̂̀𝐧', senderID, (error, info) => 
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: 'payID',
                        messageID: info.messageID,
                        author: event.senderID,
                        ID: args[2],
                        money: args[3],
                        threadID: threadID
                    })
                );
            }
            break;
        }
        case 'send':
        case 'gửi':
        case 'nạp': {
            if(checkBank.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠', threadID, messageID);
            if(!args[1]) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐚̂̀𝐧 𝐧𝐚̣𝐩 𝐯𝐚̀𝐨 !\n𝐬𝐞𝐧𝐝 [𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐚̂̀𝐧 𝐧𝐚̣𝐩]', threadID, messageID);
            var check = await checkMoney(senderID, args[1])
            if (check == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐓𝐢𝐞̂̀𝐧 𝐦𝐨̂ 𝐦𝐚̀ 𝐧𝐚̣𝐩 𝐯𝐚̀𝐨', threadID, messageID);
            await Currencies.decreaseMoney(senderID, parseInt(args[1]))
            const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/send?senderID=${senderID}&money=${args[1]}`)).data  
            return api.sendMessage(`💲===[ ${res.message.noti} ]===💲\n\n👤 𝐂𝐡𝐮̉ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧: ${res.message.name}\n💳 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐛𝐢𝐞̂́𝐧 𝐬𝐨̂́ 𝐝𝐮̛: ${parseInt(res.message.money)}$`, threadID, messageID)
            break;
    }
        case 'password':
        case 'pw': {
            if(checkBank.status == false) return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐭𝐫𝐞̂𝐧 𝐧𝐠𝐚̂𝐧 𝐡𝐚̀𝐧𝐠', threadID, messageID);
            var type = args[1];
            switch(type) {
                case 'get': {
                    const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/password?bka=${type}&dka=${senderID}`)).data 
                    api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐌𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧, 𝐛𝐨𝐭 𝐯𝐮̛̀𝐚 𝐠𝐮̛̉𝐢 𝐭𝐨̛́𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̛̀', threadID, messageID);
                    return api.sendMessage(`[ 𝐁𝐀𝐍𝐊 ] - 𝐌𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ${res.message.password}`, senderID);
                }
                case 'recovery':
                case 'new': {
                    api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐇𝐨𝐚̀𝐧 𝐭𝐚̂́𝐭 𝐛𝐮̛𝐨̛́𝐜 𝐜𝐮𝐨̂́𝐢 𝐜𝐮̀𝐧𝐠 𝐨̛̉ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̛̀', threadID, messageID);
                    return api.sendMessage('[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐦𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐦𝐨̛́𝐢', senderID, (error, info) => 
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: 'newPassword',
                            messageID: info.messageID,
                            author: event.senderID,
                            threadID: threadID
                        })
                    );
                }
                default: {
                    return api.sendMessage("[ 𝐁𝐀𝐍𝐊 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐠𝐞𝐭 (𝐥𝐚̂́𝐲 𝐦𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐫𝐚𝐧𝐝𝐨𝐦) 𝐡𝐨𝐚̣̆𝐜 𝐧𝐞𝐰 (𝐧𝐡𝐚̣̂𝐩 𝐦𝐚̣̂𝐭 𝐤𝐡𝐚̂̉𝐮 𝐭𝐮̛̣ 𝐜𝐡𝐨̣𝐧)", threadID, messageID);
                }
            }
        }
        default: {
        
                           
        return api.sendMessage({body:`=== 「 𝐌𝐈𝐑𝐀𝐈 𝐁𝐀𝐍𝐊 」 ===\n\n👤 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫 » 𝐓𝐚̣𝐨 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧\n💳 𝐢𝐧𝐟𝐨 » 𝐗𝐞𝐦 𝐢𝐧𝐟𝐨 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧\n🔍 𝐟𝐢𝐧𝐝 » 𝐓𝐢̀𝐦 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐛𝐚𝐧𝐤\n💲 𝐠𝐞𝐭 » 𝐑𝐮́𝐭 𝐭𝐢𝐞̂̀𝐧 𝐭𝐫𝐨𝐧𝐠 𝐛𝐚𝐧𝐤\n️🏆 𝐭𝐨𝐩 » 𝐗𝐞𝐦 𝐭𝐨𝐩 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 \n💷 𝐩𝐚𝐲 » 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐭𝐢𝐞̂̀𝐧 \n📲 𝐬𝐞𝐧𝐝 » 𝐍𝐚̣𝐩 𝐭𝐢𝐞̂̀𝐧 𝐯𝐚̀𝐨 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧\n🔰 𝐩𝐰 » 𝐋𝐚̂́𝐲 𝐥𝐚̣𝐢 𝐩𝐚𝐬𝐬 𝐡𝐨𝐚̣̆𝐜 𝐭𝐡𝐚𝐲 𝐩𝐚𝐬𝐬 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐛𝐚𝐧𝐤 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧`, attachment: createReadStream(__dirname + `/noprefix/bank.jpg`)}, threadID, messageID);
        }
    }
async function checkMoney(senderID, maxMoney) {
    var i, w;
    i = (await Currencies.getData(senderID)) || {};
    w = i.money || 0
    if (w < parseInt(maxMoney)) return false;
    else return true;
  }
}
module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const axios = require('axios')
    const { senderID, messageID, threadID , body } = event;
    switch(handleReply.type) {
        case 'paySTK': {
            const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/pay?type=STK&senderID=${senderID}&STK=${handleReply.STK}&money=${handleReply.money}&password=${body}`)).data 
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage(`${res.message.noti}\n${res.message.data.message}`, threadID, messageID);
            return api.sendMessage(`${res.message.noti}\n\n${res.message.data.message}`, handleReply.threadID);
        }
        case 'payID': {
            const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/pay?type=ID&senderID=${senderID}&userID=${handleReply.ID}&money=${handleReply.money}&password=${body}`)).data 
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage(`${res.message.noti} ${res.message.data.message}`, threadID, messageID);
            return api.sendMessage(`${res.message.noti}\n\n${res.message.data.message}`, handleReply.threadID);
        }
        case 'getMoney': {
            const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/get?ID=${senderID}&money=${handleReply.money}&password=${body}`)).data  
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            await Currencies.increaseMoney(senderID, parseInt(handleReply.money))
            api.sendMessage(`💲===[ ${res.message.noti} ]===💲\n👤 𝐂𝐡𝐮̉ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧: ${res.message.name}\n💰 𝐒𝐨̂́ 𝐝𝐮̛ 𝐜𝐨̀𝐧 𝐥𝐚̣𝐢: ${parseInt(res.message.money)}`, threadID, messageID);
            return api.sendMessage(`💲===[ ${res.message.noti} ]===💲\n👤 𝐂𝐡𝐮̉ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧: ${res.message.name}\n💰 𝐒𝐨̂́ 𝐝𝐮̛ 𝐜𝐨̀𝐧 𝐥𝐚̣𝐢: ${parseInt(res.message.money)}`, handleReply.threadID);
        }
        case 'newPassword': {
            const res = (await axios.get(`https://apiuwuapi.ducdz999.repl.co/bank/password?bka=recovery&dka=${senderID}&fka=${body}`)).data  
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage(`💲===[ ${res.message.noti} ]===💲\n👤 𝐂𝐡𝐮̉ 𝐭𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧: ${res.message.name}`, handleReply.threadID);
            return api.sendMessage(`Thay đổi mật khẩu thành công!\nMật khẩu hiện tại: ${res.message.password}`, threadID, messageID)
        }
    }
}