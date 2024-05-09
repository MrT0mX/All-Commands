module.exports.config = {
	name: "outbox",
	version: "1.0.6",
	hasPermssion: 2,
	credits: "MrTomXxX",
	description: "Automatically outbox after the requested time!",
	commandCategory: "system",
    dependencies: {
        "moment-timezone": ""
    },
	cooldowns: 5
};

module.exports.convertTime = (timestamp, separator) => {
    var pad = function(input) {return input < 10 ? "0" + input : input;};
    var date = timestamp ? new Date(timestamp * 1000) : new Date();
    return [
        pad(date.getHours()),
        pad(date.getMinutes()),
        pad(date.getSeconds())
    ].join(typeof separator !== 'undefined' ?  separator : ':' );
}

module.exports.handleSchedule = async ({ api, schedule }) => {
    try {
        await api.removeUserFromGroup(api.getCurrentUserID(), schedule.target);
        return api.sendMessage(`[OutBox] Left the group with ID ${schedule.target}`, __GLOBAL.settings.ADMINBOT[0], (error, info) => {
            if (error) return require(process.cwd() + "/utils/log")(`Left the group with ID ${schedule.target}`, "[ OUTBOX ]");
        });
    }
    catch {
        return api.sendMessage(`Can't leave the group with ID ${schedule.target}!`, __GLOBAL.settings.ADMINBOT[0], (error, info) => {
            if (error) return require(process.cwd() + "/utils/log")(`Can't leave the group with ID ${schedule.target}!`, "error");
        });
    }
} 

module.exports.handleReply = ({ event, api, handleReply }) => {
    const moment = global.nodemodule["moment-timezone"];
    
    if (handleReply.author != event.senderID) return;

    switch (handleReply.type) {
        case "inputThreadID": {
            if (isNaN(event.body)) return api.sendMessage("[OutBox] ThreadID you entered the wrong format!", event.threadID, event.messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`[OutBox] Time you need to timer (Note must be in the format: HH:mm):`, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "inputTime",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    target: event.body
                })
            })
        }

        case "inputTime": {
            const time = moment().tz("Asia/Kolkata");
            const regex = /([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/;

            if (!regex.test(event.body)) return api.sendMessage(`[OutBox] Format time is incorrect!`, event.threadID, event.messageID);
            const timeSplited = event.body.split(":"),
                    hour = timeSplited[0],
                    minute = timeSplited[1];
                
            if (hour > time.hours()) time.add(1, "days");

            time.set({ hour, minute });

            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`[OutBox] Enter the reason for leaving automatically:`, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "inputReason",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    target: handleReply.target,
                    timeTarget: time.unix()
                })
            })
        }

        case "inputReason": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(
                "=== OutBox ===" +
                "\n\n» Thread needs to leave: " + handleReply.target +
                "\n» Time to leave: " + this.convertTime(handleReply.timeTarget) +
                "\n» Reason: " + event.body,
                event.threadID, (error, info) => {
                    return api.sendMessage(`[OutBox] Ordered to leave this group was received at ${this.convertTime(handleReply.timeTarget)} with reason ${event.body}`, handleReply.target, (error, info) => {
                        if (error) return api.sendMessage(`[OutBox] Thread needs you to have an ID that doesn't exist, may have been kicked before!`, event.threadID, event.messaegID);
                        else return global.client.handleSchedule.push({
                            commandName: this.config.name, 
                            timestamp: handleReply.timeTarget, 
                            target: handleReply.target, 
                            reason: event.body,
                            event
                        })
                    })
                }
            )
        }
    }
}

module.exports.run = ({  event, api }) => {
    return api.sendMessage(`[OutBox] The thread ID you need to schedule the auto-leave:`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "inputThreadID",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })
    })
}