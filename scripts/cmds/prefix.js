module.exports.config = {
name: "prefix",
version: "1.0.0",
hasPermssion: 0,
credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 Modify By 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒",
description: "Displays the bot's prefix and owner info",
commandCategory: "Information",
usages: "",
cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
const { threadID, messageID, body } = event;
if (!body) return;

const dataThread = await Threads.getData(threadID);
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
const prefix = threadSetting.PREFIX || global.config.PREFIX;

const triggerWords = [
"prefix", "mprefix", "mpre", "bot prefix", "what is the prefix", "bot name",
"how to use bot", "bot not working", "bot is offline", "prefx", "prfix",
"perfix", "bot not talking", "where is bot", "bot dead", "bots dead",
"dấu lệnh", "daulenh", "what prefix", "freefix", "what is bot", "what prefix bot",
"how use bot", "where are the bots", "where prefix"
];

const lowerBody = body.toLowerCase();
if (triggerWords.includes(lowerBody)) {
return api.sendMessage(
`╔═════════════════════╗
✿ 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ✿
╚═════════════════════╝

❀ 𝐁𝐎𝐒𝐒 : m፝֟ꫝƦᏌꘘツ모
❀ 𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${prefix} ]
❀ 𝗢𝘄𝗻𝗲𝗿 : m፝֟ꫝƦᏌꘘツ모
❀ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
https://www.facebook.com/a.b.s.maruf.517296

❀ 𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂 𝗙𝗼𝗿 𝗨𝘀𝗶𝗻𝗴 𝐌𝐞!
╔═════════════════════╗
✿ 𝐄𝐍𝐃 ✿
╚═════════════════════╝`,
threadID,
messageID
);
}
};

module.exports.run = async ({ event, api }) => {
return api.sendMessage("Type 'prefix' or similar keywords to get the bot info.", event.threadID);
};
