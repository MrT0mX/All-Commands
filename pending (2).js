module.exports.config = {
    name: "pending",
    version: "1.0.6",
    credits: "MrTomXxX",
    hasPermssion: 2,
    description: "Manage bot pending messages",
    commandCategory: "admin",
    usages: "[u] [t] [a]",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`[ ERR ] ${singleIndex} Not a valid number`, threadID, messageID);
        }
        return api.sendMessage(`[ OK ] Successfully refused`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");       
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`❯ ${singleIndex} Not a valid number`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by ???" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage("", event.threadID, () => api.sendMessage({body:`${global.config.BOTNAME} Bot are now connected! Use ${global.config.PREFIX}help to see the Command Lists`, attachment: fs.createReadStream(__dirname + "/noprefix/box.mp4")} ,handleReply.pending[singleIndex - 1].threadID));
            count+=1;
            
        }
        return api.sendMessage(`[ OK ] Successfully approved ${count} thread(s)!`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
        if (args.join() == "") {api.sendMessage("❯ You can use pending:\n❯ Pending user: User queue\n❯ Pending thread: Group queue\n❯ Pending all: All boxes are waiting for approval",event.threadID, event.messageID);
    }
        const content = args.slice(1, args.length);   
     switch (args[0]) {
    case "user":
    case "u":
    case "-u":
    case "User": {
    const permission = global.config.GOD;
    if (!permission.includes(event.senderID)) return api.sendMessage("[ OPPS ] You don't have permission to use this command!!", event.threadID, event.messageID);
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("[ ERR ] Can't get the current list", threadID, messageID) }

      const list = [...spam, ...pending].filter(group => group.isGroup == false);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`❯ Total number of users to browse: ${list.length} user \n❯ Reply number below to browse\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("[ - ] There are currently no users in the queue", threadID, messageID);
}
    case "thread":
    case "-t":
    case "t":
    case "Thread": {
        const permission = global.config.GOD;
    if (!permission.includes(event.senderID)) return api.sendMessage("[ OPPS ] You don't have Permission to use this command!", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("[ ERR ] can't get the current list", threadID, messageID) }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`❯ Total number of groups to be approved: ${list.length} the group \n❯ Reply to the order number below to browse !!!\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("[ - ] There are currently no groups in the queue", threadID, messageID);
        }
    case "all":
    case "a":
    case "-a":
    case "al": {
        const permission = global.config.GOD;
    if (!permission.includes(event.senderID)) return api.sendMessage("[ OPPS ] You don't have Permission to use this command!!", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("[ ERR ] Can't get the waiting list", threadID, messageID) }

            const listThread = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);
        const listUser = [...spam, ...pending].filter(group => group.isGroup == false)
    const list = [...spam, ...pending].filter(group => group.isSubscribed);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`❯ Total number of Users & Threads to be approved: ${list.length} User & Thread \n❯ Reply to the order number below to browse !!!\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("[ - ] There are currently no User & Thread in the queue", threadID, messageID);
        }
    }       
}