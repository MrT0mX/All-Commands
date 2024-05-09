const axios = require('axios');

module.exports = {
	config: {
		name: "76",
		aliases: ["Milky Way, Mia, Views"],
		version: "1.0",
		author: "@mrtomxxx",
		countDown: 5,
		role: 1,
		shortDescription: "",
		longDescription: "",
		category: "18+",
		guide: "{pn}"
	},

	onStart: async function ({ message, args }) {
		const BASE_URL = `https://manhict.tech/api/nsfw/panties?apikey=KPuGlFPV`;
		try {
			let res = await axios.get(BASE_URL)
			let res2 = res.data
			let img = res2.url
			const form = {
				body: ` هاك `
			};
			if (img) {
				form.attachment = []
				form.attachment[0] = await global.utils.getStreamFromURL(img);

			}
			message.reply(form);
		} catch (e) { message.reply('🥺 Not Found') }

	}
};