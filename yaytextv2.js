module.exports.config = {
    name: "yaytextv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Raiden Ei",//đổi cl
    description: "yaytext",
    commandCategory: "Công Cụ",
    usages: "<nội dung>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
         text = text.replace(/\./g, ``)
  .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, `𝔸`)
  .replace(/b/g, `𝔹`)
  .replace(/c/g, `ℂ`)
  .replace(/d|đ/g, `𝔻`)
  .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, `𝔼`)
  .replace(/f/g, `𝔽`)
  .replace(/g/g, `𝔾`)
  .replace(/h/g, `ℍ`)
  .replace(/i/g, `𝕀`)
  .replace(/ì|í|ị|ỉ|ĩ|i/g, `𝕁`)
  .replace(/k/g, `𝕂`)
  .replace(/l/g, `𝕃`)
  .replace(/m/g, `𝕄`)
  .replace(/n/g, `ℕ`)
  .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, `𝕆`)
  .replace(/p/g, `ℙ`)
  .replace(/q/g, `ℚ`)
  .replace(/r/g, `ℝ`)
  .replace(/s/g, `𝕊`)
  .replace(/t/g, `𝕋`)
  .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, `𝕌`)
  .replace(/v/g, `𝕍`)
  .replace(/x/g, `𝕏` )
  .replace(/ỳ|ý|ỵ|ỷ|ỹ|y/g, `𝕐`)
  .replace(/w/g, `𝕎`)
  .replace(/z/g, `ℤ`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"", event.threadID, event.messageID);
    }