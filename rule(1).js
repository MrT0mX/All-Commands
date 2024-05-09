/** Hầu hết mấy ông dùng bypass module donate thì chả cần dùng cái này đâu vì tội gì mà không dùng mấy module xịn hơn đúng k =))**/
/** Đổi Credit ? Nếu bạn không có văn hóa như Hà Mạc Trường Giang ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "rules",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "kudos",
	description: "",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Terms of use bot in the box:
⚠ Please strictly comply to avoid being restricted from using commands (user ban)
1: Do not spam bot commands, spam prefixes too much to cause death bots, cp....
2: Do not cause war with bots ( sim modules ... ) because these are not real interactive users!
3: Do not abuse bots for malicious purposes.,...
4: More updates ....`, event.threadID, event.messageID);les.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };

    switch (args[0]) {
        case "add": {
            if (permssion == 0) return api.sendMessage("[Rule] You don't have enough powers to use more rules!", threadID, messageID);
            if (content.length == 0) return api.sendMessage("[Rule] Entering information is not left blank", threadID, messageID);
            if (content.indexOf("\n") != -1) {
                const contentSplit = content.split("\n");
                for (const item of contentSplit) thisThread.listRule.push(item);
            }
            else {
                thisThread.listRule.push(content);
            }
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage('[Rule] added a new law to the team successfully!', threadID, messageID);
            break;
        }
        case "list":
        case"all": {
            var msg = "", index = 0;
            for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
            if (msg.length == 0) return api.sendMessage("[Rule] Your team does not have a law list to show!", threadID, messageID);
            api.sendMessage(`=== Group law ===\n\n${msg}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
            if (!isNaN(content) && content > 0) {
                if (permssion == 0) return api.sendMessage("[Rule] You don't have enough powers to be able to use the Law!", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[Rule] Your team does not have a law list to be able to delete!", threadID, messageID);
                thisThread.listRule.splice(content - 1, 1);
                api.sendMessage(`[Rule] has successfully deleted the law with something ${content}`, threadID, messageID);
                break;
            }
            else if (content == "all") {
                if (permssion == 0) return api.sendMessage("[Rule] You don't have enough powers to be able to use the Law!", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[Rule] Your team does not have a law list to be able to delete!", threadID, messageID);
                thisThread.listRule = [];
                api.sendMessage(`[Rule] Your team does not have a law list to be able to delete!`, threadID, messageID);
                break;
            }
        }
        default: {
            if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
                return api.sendMessage(`=== Group law ===\n\n${msg} \n[Compliance with the group's law will contribute positively to your community!]`, threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }

    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}}