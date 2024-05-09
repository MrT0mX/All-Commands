module.exports.config = {
	name: "quote",
  version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "Random Anime Quotes",
	commandCategory: "Text",
	usages: "",
  cooldowns: 1, 
}
module.exports.run = async ({ api, event, args, Users }) => { 
	const senku = global.nodemodule.axios
  let name = await Users.getNameUser(event.senderID)
	const gen = await senku.get(
    'https://cakrayp.herokuapp.com/api/random/quotes/anime?apikey=cakrayp24Q6'
)
  var quote = gen.data.result.quotes.en
  var character = gen.data.result.character
  var anime = gen.data.result.anime
	return api.sendMessage(`"${quote}"\n\n- ${character} (${anime})`, event.threadID, event.messageID)
	}