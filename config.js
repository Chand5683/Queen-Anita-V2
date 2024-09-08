//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BQbDRrQm15VG5KWGk0M2JGZXFFUGUvamNjRExQZlBlNXNBa1hKaTYwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRm4rUEJiUTVIazRzb0d5RDlDK1dxbklEa2NnaVpjWjRJcUN1SXhFMFZYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTjFQcm1EQk9kU3czdDhHejhrNkI1U3N2YjNtVHF0S1lCSnhIako4N1ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUlBHaUhuSEtVSjk3bE1lUGhzL01RVnh0eXh5blBtUDdLWGxKS0lUaVZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPdkpnV2pvWUFjeTkrOU52M2FEcGdySU5aOE1rVFpiMmtjbmdCODhoV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1kMFdrVVM4YTFzUnNJelQ2dTIwaDRUR3pkZVZKYXlyanJCUi83R2pSMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdJR3hOS0pFNDJmeTF5WUJzV1Rna0RVaEVnbVNNeUpBMFNiQ1U0SmgzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWl2YTV0dmhESW5XcERPcHZpcE9ERDdJMzBXanhCVUtZemhVQ1AvTUpoRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJyay9PbVVPQ1VkdmY5MGhjYWJHV1ZmWWp5Z1YzYWgzOXRNYVpuWCtNcUFNb243YmZDdjhNMXVLUmJteU1GRUxjcHp6cnNjcTNtZndjRUJVcUNYaGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6IlNUb3hUeDgzSC83MGJvZzF6WURuR0lhN2JJa1V4R09sMXFrcXpnZHpkLzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFvbFNsVGJYUUJDSWFJZUZVMF95SXciLCJwaG9uZUlkIjoiY2FkYzcxMzItNzEwMi00NjQxLWE3OWEtY2FiZWIxNTQwYTNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRoQXJBb3ZNbjRzU1dPV1RBSDFZZmY5YUNvST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvK3NkOE1aZDNEVnU5V2J6VjBXV01ZUG9lblU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1kxQkJXRlgiLCJtZSI6eyJpZCI6IjkyMzQ3MDM1OTg1MDo0MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4ap8J2Ru/Cdka8gJ+C9suC+gNi5IPCdkajwnZG68J2RqPCdkavjgIbNjvCThqogy5DNosK7ICDgvbLgvoAgICAg4oq5ICDiirkgICDiirkgICDiirkgICDiirkgIOKKuSAg4oq5ICDiirkgICDiirkgICDiirkgICDiirkgXG4gIMKrOtuz8JOGqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1dKOHh3UTBlVDB0Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZWdHcDhyZFB0T1lEcUdiUUF6NUtjbjFSQmZ0b0V5UUlXS1IxRlhYNDAzND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM3ZXNXRHZElMbjJmWEEvVnBRejJUdDU3aCt3bnFwZFhGTW0rNkhadkgyM0dKbExGOFU1RlI2a1dDN09SZDV2K2pPTnZndlFnSy9Vb1VEUzh1UVVkRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJZV09vc2R4bWFEUURsRHhIb1U1NDA2SUpMV0t4ZDlReDltY3lJT003TEpkMnFLK214bEFjbzE4UmV2Sitna1pFdzRVMVRCNlU5VkUyZ1JRRnYzMWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDcwMzU5ODUwOjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhvQnFmSzNUN1RtQTZobTBBTStTbko5VVFYN2FCTWtDRmlrZFJWMStOTisifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU3NzIzODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUC93In0=|
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
