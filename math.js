module.exports.config = {
	name: "math",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Máy tính",
	commandCategory: "Công Cụ",
	usages: "+(-p, -g, -v) + phép toán\n  -p: Tính nguyên hàm, tích phân\n  -g: Tính đồ thị\n  -v: Tính toạ độ vector\n  Không điền: Tính phép tính cơ bản\n  Ví dụ: !math -g y = x^3 - 9",
	cooldowns: 5,
	dependencies: {
		"axios": "",
		"fs-extra": ""
	},
	info: [
		{
			key: 'none',
			prompt: '',
			type: 'Phép toán',
			example: 'math x+1=2'
		},
		{
			key: '-p',
			prompt: 'Nguyên Hàm',
			type: 'Phương trình',
			example: 'math -p xdx'
		},
		{
			key: '-p',
			prompt: 'Tích Phân',
			type: 'Phương trình',
			example: 'math -p xdx from 0 to 2'
		},
		{
			key: '-g',
			prompt: 'Đồ Thị',
			type: 'Phương trình',
			example: 'math -g y = x^3 - 9'
		},
		{
			key: '-v',
			prompt: 'Vector',
			type: 'Tọa độ vector',
			example: 'math -v (1, 2, 3) - (5, 6, 7)'
		}
	],
	envConfig: {
		"WOLFRAM": "T8J8YV-H265UQ762K"
	}
};
module.exports.run = async function ({ api, event, args }) {
	var axios = global.nodemodule["axios"];
	var fs = global.nodemodule["fs-extra"];
	const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "math.jpg")) request("https://i.imgur.com/4LeQOsE.png").pipe(fs.createWriteStream(dirMaterial + "math.jpg"));
	var { threadID, messageID } = event;
	var out = (msg) => api.sendMessage({body:`${msg}`, attachment: fs.createReadStream(__dirname + `/noprefix/math.jpg`) }, event.threadID, event.messageID);
	var text = [], key = global.configModule.math.WOLFRAM;
	var content = (event.type == 'message_reply') ? event.messageReply.body : args.join(" ");
	if (!content) return out("===「 𝗖𝗔𝗦𝗜𝗢 𝗙𝗫-𝟱𝟴𝟬 」===\n──────────────\n\n𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝗽𝗵𝗲́𝗽 𝘁𝗶́𝗻𝗵:\nmath + (-p, -g, -v) + phép toán\n  -p: Tính nguyên hàm, tích phân\n  -g: Tính đồ thị\n  -v: Tính toạ độ vector\n  Không điền: Tính phép tính cơ bản\n🌸 𝗩𝗶́ 𝗱𝘂̣: /math -g y = x^3 - 9");
	else if (content.indexOf("-p") == 0) {
		try {
			content = "primitive " + content.slice(3, content.length);
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			if (content.includes("from") && content.includes("to")) {
				var value = data.queryresult.pods.find(e => e.id == "Input").subpods[0].plaintext;
				if (value.includes("≈")) {
					var a = value.split("≈"), b = a[0].split(" = ")[1], c = a[1];
					return out(`Fractional: ${b}\nDecimal: ${c}`);
				}
				else return out(value.split(" = ")[1]);
			}
			else return out((data.queryresult.pods.find(e => e.id == "IndefiniteIntegral").subpods[0].plaintext.split(" = ")[1]).replace("+ constant", ""));
		}
		catch (e) {
			out(`${e}`);
		}
	}
	else if (content.indexOf("-g") == 0) {
		try {
			content = "plot " + content.slice(3, content.length);
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			var src = (data.queryresult.pods.some(e => e.id == "Plot")) ? data.queryresult.pods.find(e => e.id == "Plot").subpods[0].img.src : data.queryresult.pods.find(e => e.id == "ImplicitPlot").subpods[0].img.src;
			var img = (await axios.get(src, { responseType: 'stream' })).data;
			img.pipe(fs.createWriteStream("./graph.png")).on("close", () => api.sendMessage({ attachment: fs.createReadStream("./graph.png") }, threadID, () => fs.unlinkSync("./graph.png"), messageID));
		}
		catch (e) {
			out(`${e}`);
		}
	}
	else if (content.indexOf("-v") == 0) {
		try {
			content = "vector " + content.slice(3, content.length).replace(/\(/g, "<").replace(/\)/g, ">");
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			var src = data.queryresult.pods.find(e => e.id == "VectorPlot").subpods[0].img.src;
			var vector_length = data.queryresult.pods.find(e => e.id == "VectorLength").subpods[0].plaintext, result;
			if (data.queryresult.pods.some(e => e.id == "Result")) result = data.queryresult.pods.find(e => e.id == "Result").subpods[0].plaintext;
			var img = (await axios.get(src, { responseType: 'stream' })).data;
			img.pipe(fs.createWriteStream("./graph.png")).on("close", () => api.sendMessage({ body: (!result) ? '' : result + "\nVector Length: " + vector_length, attachment: fs.createReadStream("./graph.png") }, threadID, () => fs.unlinkSync("./graph.png"), messageID));
		}
		catch (e) {
			out(`${e}`);
		}
	}
	else {
		try {
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			if (data.queryresult.pods.some(e => e.id == "Solution")) {
				var value = data.queryresult.pods.find(e => e.id == "Solution");
				for (let e of value.subpods) text.push(e.plaintext);
				return out(text.join("\n"));
			}
			else if (data.queryresult.pods.some(e => e.id == "ComplexSolution")) {
				var value = data.queryresult.pods.find(e => e.id == "ComplexSolution");
				for (let e of value.subpods) text.push(e.plaintext);
				return out(text.join("\n"));
			}
			else if (data.queryresult.pods.some(e => e.id == "Result")) return out(data.queryresult.pods.find(e => e.id == "Result").subpods[0].plaintext);
		}
		catch (e) {
			out(`${e}`);
		}
	}
}