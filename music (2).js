module.exports.config = {
  name: "music",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "Play music from youtube",
  commandCategory: "utility",
  usages: "[title]",
  cooldowns: 10,
  dependencies: {
            
  }
};

module.exports.run = async({api, event}) => {
	const axios = require("axios");
    const fs = require("fs-extra");
    const Innertube = require("youtubei.js");
    const request = require("request");
    let input = event.body;
    
    var text = input;     text = text.substring(7)
let data = input.split(" ");
  
if (data.length < 2) {               return api.sendMessage("⚠️Please put a title or name of the music.", event.threadID);
}
  

data.shift()


  const youtube = await new Innertube();
 
  const search = await youtube.search(text);
if (search.videos[0] === undefined){
api.sendMessage("Error: Invalid request.",event.threadID,event.messageID)
api.setMessageReaction("❎", event.messageID, (err) => {}, true)
}else{
api.sendMessage(`🔎Searching for "${text}"...`,  event.threadID,event.messageID);
api.setMessageReaction("✅", event.messageID, (err) => {}, true)
var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);

    }
  timeleft -= 1;
}, 1000);
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4',
    type: 'audio',
    audioQuality: 'lowest',
    loudnessDB: '20',
    audioBitrate: '320',
    fps: '30'
  });
  
stream.pipe(fs.createWriteStream(__dirname + `/cache/${search.videos[0].title}.mp3`))


  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  }); 
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]',`Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
    console.log(info)
  });

  
  stream.on('end', () => {
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
    console.info(`[DOWNLOADER] Downloaded`)
    
    
    var message = {
          body:("Here's your music, enjoy!🥰\n\nTitle: "+search.videos[0].title),
         attachment:[ 
fs.createReadStream(__dirname + `/cache/${search.videos[0].title}.mp3`)]}
           api.sendMessage(message, event.threadID,event.messageID);
  }); 
stream.on('error', (err)=> console.error('[ERROR]',err))

         stream.on('end', async () => {  
           
           if (fs.existsSync(__dirname + `/cache/${search.videos[0].title}.mp3`)) {
                                    fs.unlink(__dirname + `/cache/${search.videos[0].title}.mp3`, function (err) {
                                  if (err) console.log(err);                                        
                                  console.log(__dirname + `/cache/${search.videos[0].title}.mp3 is deleted!`);
                                                        });
                                                     }
             })
}
      } 
                                     
\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
	const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
	const urlValid = videoPattern.test(args[0]);
	
	if (urlValid) {
		try {
			ytdl.getInfo(args[0]).then(res => {
			let body = res.videoDetails.title;
			var id = args[0].split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            (id[2] !== undefined) ? id = id[2].split(/[^0-9a-z_\-]/i)[0] : id = id[0];
			ytdl(args[0])
				.pipe(createWriteStream(__dirname + `/cache/${id}.m4a`))
				.on("close", () => {
					if (statSync(__dirname + `/cache/${id}.m4a`).size > 26214400) return api.sendMessage('The file could not be sent because it is larger than 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`), event.messageID);
					else return api.sendMessage({body : `${body}`, attachment: createReadStream(__dirname + `/cache/${id}.m4a`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`) , event.messageID)
				})
				.on("error", (error) => api.sendMessage(`There was a problem while processing the request, error: \n${error}`, event.threadID, event.messageID));
			});
			}
		catch (e) {
			console.log(e);
			api.sendMessage("Your request could not be processed", event.threadID, event.messageID);
		}

	}
	else if (scRegex.test(args[0])) {
		let body;
		try {
			var songInfo = await scdl.getInfo(args[0], global.configModule[this.config.name].SOUNDCLOUD_API);
			var timePlay = Math.ceil(songInfo.duration / 1000);
			body = `Tiêu đề: ${songInfo.title} | ${(timePlay - (timePlay %= 60)) / 60 + (9 < timePlay ? ':' : ':0') + timePlay}]`;
		}
		catch (error) {
			if (error.statusCode == "404") return api.sendMessage("Your song cannot be found via the above link ;w;", event.threadID, event.messageID);
api.sendMessage("The request could not be processed due to an error: " + error.message, event.threadID, event.messageID);
		}
		try {
			await scdl.downloadFormat(args[0], scdl.FORMATS.OPUS, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
		catch (error) {
			await scdl.downloadFormat(args[0], scdl.FORMATS.MP3, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
	}
	else {
		try {
			var link = [], msg = "", num = 0;
			var results = await youtube.searchVideos(keywordSearch, 5);
			for (let value of results) {
				if (typeof value.id == 'undefined') return;
				link.push(value.id);
				let datab = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${value.id}&key=${keyapi}`)).data;
				let gettime = datab.items[0].contentDetails.duration;
				let time = (gettime.slice(2));
				let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=${keyapi}`)).data;
				let channel = datac.items[0].snippet.channelTitle;
				msg += (`${num+=1}. ${value.title}\nTime: ${time}\nChannel: ${channel}\n◆━━━━━━━━━━━━━◆\n`);
			}
			return api.sendMessage(`There are ${link.length} results matching your search term: \n${msg}\nPlease reply(feedback) choose one of the above searches\nMaximum Song Time 10H!`, event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, link }), event.messageID);
		}
		catch (error) {
			api.sendMessage("The request could not be processed due to an error: " + error.message, event.threadID, event.messageID);
		}
	}
}