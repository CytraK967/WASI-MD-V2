//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9CTzRlTDlZQ2FySXRCWUxvbXV5c2YxbkZnY0ZOMzV5RGlSeFh1bnVHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2llYXdZSEVpN2JpZTAvZHVtMnZNbDJKTGxkUDFyTVR2SEk1T1k1a3QzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRjRnUTN1Qkc2a2xDdGRsRHBQNjUvTkhuZW1qQ2lLS0FzbXR2blNzbEhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0V1pCMnZXMHYxSUdHbjNrQ1N4T0lIRklKRDBLaDdyNVFnNTZOUUU5QXpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOOGZ3RHc0U3c1ZGxURmo3NkNmWVFnVlFKRW40eEpKdndjRldZQVQ5RU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQvZzZLazBKUE5SZ2lKWi9KN2pPdzd6azZXemVrR2RxYnlWSHA2c1haV1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJrTHJ4VHRmK0RjN2hmelN3R1FDcm12N0NPUVdKSllNMHNEQm52S2VHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTndIVU9mWkFqdkhOVFg4UUpQUVNCZGNqYzhOR01Oc1hQaC9nSXl3UW5Ddz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJZaUhLYzBpd2huQWJNN0ZxYzByYXY0TU1FRVhVYkpLQm1QWWdienJ6R3o2TnRnSUNMRkQwbGZ2YWRobGIwK2tKQjJQRjBoYmlHOFA4UlQ5VGl4Mml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IkxjSzZja2JlUHlhV3h2RnNTV3J6NXZuWGlGNTBuUmJHcmdPbUsyVVRQekk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRPczlTRGREUmZ5bVNsakpDTjNGZ3ciLCJwaG9uZUlkIjoiNjQ0MjIwYTYtMDBlYi00YWZhLWIyZTgtM2U4YzQyOGQ3MTY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis5RXpKWDRPeDVSbWRHc0lCQWo3em9IN0VOST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2VXF5dkg4QTRCblBIcm51ZUdyK1NSajRyRkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVhFVDJMMVciLCJtZSI6eyJpZCI6IjI1NDc5ODQyMDA2NToxNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXV0bFo4QkVORDd6TFVHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWnZUU0lKWXhKdGhieHZhL0UzV0RsUkZpdGpiWnp0VTFManZRREhqaDBoQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNVVTQ3lVR05RZTZTTjVvaThQQkRyb25NV2U2ZGpkTEFUODBRdzZsbmhCaUpqaUMrcllQelkxejE0T01rbFNLR1QxOVMxRWFFbGIySGZtbXhiOWI4Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImhPZ2tucng1NFpQelNmM0xxcy9UbmgvRnQycElHK3UzWlVWQlNoTnJwRzBMcXRHMkRyU0t4N0d2ZVF1eUZLODYwRU5CMUlwQlJpWFFGL2ttV0F0dmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk4NDIwMDY1OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldiMDBpQ1dNU2JZVzhiMnZ4TjFnNVVSWXJZMjJjN1ZOUzQ3MEF4NDRkSVEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMjI4MTN9eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENHSlhXWUZDS1JwMUM1WkQ0V3c5MVdBVE5uV2d5Y2VWZE5zRGc2b2wzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME42eHdzemRNTksxRWVFOC9adE5VbGRPTGpEMDViMngzRGZSWnNTVUVYTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR0RrYjFXUWxaZnhHUkl6aHB5RjcreXhXTTlLTGJwbk9HTDJOcDZIUVZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUmpjcXRmUy8rcEtMMUdPTFc0OWZ1ZEtwMEc0eTVVdEpTeDh4bGQ3WTFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFZEZOMFlld1hhWk5zS2ZVY2tGNkxNdThLQlRkZXdUY1cwcTZzNWx5blE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkycUZkOVd6NTdYME9QNmoyUFdrUUh2TllBZ0NMZ1pRV21DTiszVk1saXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9VVzdPUmFaYndYM2NJM1c2aFN2eTRQUCttakxxSjluTkJwMVZTODZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFpUOEtZZEtxeCsrbkNERFN5K1VMQ3dUWlduamNuSDUwaFNoUFB4NllDUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdjVXZpWTJVNExWQUo3NzY1dElKMStEdFVxVUZWNFRVbFR3YldTOE5CNkEyaTN4NTQ2bFhScUE1U0NTV0JEOENjbDkvcHdnR3g0NDd0Rk1RUjFOSGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6InREWWphQ0Fjayt1Q3p2cEZhQVZiM0I2S3ZBSnBXUXNoaDQ5RWw0UGh2QnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBPd2hGZU5OVE1LRjd2R1ZqTjNWeWciLCJwaG9uZUlkIjoiYmRkNGE1MjAtNDY2NC00MmUyLWE4MzEtYmY2MjJmMmE2ZDFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NNExZZFJJK1dwRVQrS0ptZjJhSmRlVmpIVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzc1RWSkU2cWpkdTVhMFRTQzVRWmltUGJMWWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUxDUEhDQVgiLCJtZSI6eyJpZCI6IjI1NDc5ODQyMDA2NToxNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXV0bFo4QkVPamd5N1VHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWnZUU0lKWXhKdGhieHZhL0UzV0RsUkZpdGpiWnp0VTFManZRREhqaDBoQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVENrT3RqNzgvNEVISzJqdkl2dHZ1ZlNTMWhoU3NSMEExMW9lekJ1cTNSYzIxMkxkNkNkTG9FMlJVQXFpZHpoWExkRXpWSkt5ak1ybSswamQ5cEZIQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InRLNzZKVUdwU2lZU1NNWmdEdzhCL0ljWmRURGZnZEcwOE5POFZZcGhsdWFhRGdZT09jcTNVaUVUYWJwRW9IT3FzaXVNL3NsbTNoNC9Yazh5VTFoaWdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk4NDIwMDY1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldiMDBpQ1dNU2JZVzhiMnZ4TjFnNVVSWXJZMjJjN1ZOUzQ3MEF4NDRkSVEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMDMwMDEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3RDIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
