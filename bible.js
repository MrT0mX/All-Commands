module.exports.config = {
	name: "bible",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "kensu", //don't change the credits please
	description: ".",
	commandCategory: "bible verse",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = ["https://i.imgur.com/IEyYKzn.jpeg"];
var callback = () => api.sendMessage({body:`
John 16:33

"In the world you will have tribulation. But take heart; I have overcome the world."

Isaiah 41:10 (NIV)

"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."

Philippians 4:6–7 (NIV)

Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.

Psalm 34:4–5, 8

I sought the LORD, and He answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him!

Romans 8:28

And we know that for those who love God all things work together for good, for those who are called according to His purpose.

Joshua 1:9

"Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go."

Matthew 6:31–34 (NIV)

"So do not worry, saying, 'What shall we eat?' or 'What shall we drink?' or "What shall we wear?' For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first His kingdom and His righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."

Proverbs 3:5–6

Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.

Romans 15:13 (NIV)

May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit.

2 Chronicles 7:14

"If my people who are called by My name humble themselves, and pray and seek My face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land."

Philippians 2:3–4

Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.

Isaiah 41:13

"For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.'"

1 Peter 5:6–7

Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you.

Psalm 94:18–19

When I thought, "My foot slips," Your steadfast love, O LORD, helped me up. When the cares of my heart are many, Your consolations cheer my soul.

Revelation 21:4

"He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." And He who was seated on the throne said, "Behold, I am making all things new.`,attachment: fs.createReadStream(__dirname + "/cache/ken.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ken.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ken.jpg")).on("close",() => callback());
   };