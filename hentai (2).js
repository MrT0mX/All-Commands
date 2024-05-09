module.exports.config = {
  name: "hentai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "hentai",
  usages: "[ass/ahegao/bdsm/blowjob/cuckold/cum/ero/femdom/foot/gangbang/glasses/hentai/hentaigif/jahy/masturbation/neko/orgy/panties/pussy/thighs/yuri/]",
  commandCategory: "nsfw",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let hentai = args.join(" ");
    const res = await axios.get(`https://manhict.tech/api/nsfw/${hentai}?apikey=lgG765KO`);
    var data = res.data.url;
    var msg = [];
    let a = `${res.data.url}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({attachment: allimage
    }, event.threadID);
}