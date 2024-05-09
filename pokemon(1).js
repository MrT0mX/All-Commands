module.exports.config = {
    name: "poke",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MrTomXxX",
    description: "View information of any 1 pokemon",
    commandCategory: "Utilities",
    usages: "[namePoke]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];	
const namePoke = args.join(" ");
if (!namePoke) return api.sendMessage('🌻Please enter the name of a pokemon species!!!', event.threadID, event.messageID)
try {
const res = await axios.get(`https://some-random-api.ml/pokedex?pokemon=${namePoke}`);
const data = res.data;
const stt = data.stats
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${data.description}`), (err, response, body) => {
        if (err) return api.sendMessage("An error has occurred!",event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
return api.sendMessage(`
» Name: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}
» Type: ${data.type}
» Generation: ${data.generation}
» Species: ${data.species.join(', ')}
» Egg group: ${data.egg_groups.join(', ')}
» Ability: ${data.abilities.join(', ')}
» Height: ${data.height}
» Weight: ${data.weight}
» Status: HP ${stt.hp}, ATK: ${stt.attack}, DEF: ${stt.defense}, Speed: ${stt.speed}
» Evolution: ${data.family.evolutionLine.join(' => ')}
» Description: ${text}`, event.threadID, event.messageID)
})
} catch {
            return api.sendMessage('🌻Pokemon name not found!!!', event.threadID, event.messageID);
        }
}
