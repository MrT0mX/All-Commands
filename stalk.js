module.exports.config = {
    name: "stalk",
    version: "1.0.0",
    hasPermision: 0,
    usages: "reply or mention",
    credit: "MrTomXxX",
    description: "get info",
    commandCategory: "random-img",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
         if (!args[0]) { var uid = senderID}
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
  if (args.join().indexOf('@') !== -1){ var uid = Object.keys(event.mentions) } 
	const res = await api.getUserInfoV2(uid); 
   var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
    var birthday = res.birthday == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
    var love = res.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
    var location = res.location == 'Không Có Dữ Liệu' ? "Not Found" : "Not Found";
    var hometown = res.hometown == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
  var follow = res.folow == 'Không Có Dữ Liệu' ? "Not Found" : "Not Found";
  var usern = res.username;

	let callback = function() {
            return api.sendMessage({
                body:`Name: ${res.name}\nFacebook URL: ${res.link}\nFacebook username: ${usern}\nBirthday: ${birthday}\nFollowers: ${follow}\nGender: ${gender}\nUID: ${uid}\nLocation: ${location}\nHometown: ${hometown}`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
		return request(encodeURI(res.avatar)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
}anity;
    var bday = res.data.result.birthday;
    var f = res.data.result.followers;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`ID: ${id}\nName: ${name}\nBirthday: ${bday}\nFollowers: ${f}\nRelationship Status: ${rs}\nLocation: ${loc}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else {
    const res = await axios.get(`https://manhict.tech/api/fbInfo?id=${args[0]}&apikey=x5YRAdgu`);
    var id = res.data.result.uid;
    var name = res.data.result.name;
    var fname = res.data.result.firstName;
    var username = res.data.result.vanity;
    var bday = res.data.result.birthday;
    var f = res.data.result.followers;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`ID: ${id}\nName: ${name}\nBirthday: ${bday}\nFollowers: ${f}\nRelationship Status: ${rs}\nLocation: ${loc}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${args[0]}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
  }
  }

