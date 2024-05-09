module.exports.config = {
    name: "resetmoney",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "MrTomXxX",
    description: "Reset the group's amount to 0",
    commandCategory: "group",
    usages: "[cc], [del], [all]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
    return api.sendMessage("The group member's money has been reset to 0 !", event.threadID);
}
ược reset về mức 0 !", event.threadID);
      }