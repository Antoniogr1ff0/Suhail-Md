const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254723925612";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254718069902";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_48_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaLzlQeEVsNm1wY2xwUEdRWllpdzFOUmx5V245dHNuenJiQTR6QThnQWNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmUEpCc2xJa1FEYWhlYU5UNWJFejdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImYyZmQxY2FiLTkzYmMtNGZlZi05ZDQwLTM1YTlkMGRhNmViM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAzOSxcbiAgICAgIDI0LFxuICAgICAgODksXG4gICAgICAxMjUsXG4gICAgICAyMDUsXG4gICAgICA5OSxcbiAgICAgIDE1NCxcbiAgICAgIDIzNCxcbiAgICAgIDIzMyxcbiAgICAgIDIzOSxcbiAgICAgIDE2MixcbiAgICAgIDIwOCxcbiAgICAgIDc3LFxuICAgICAgMjcsXG4gICAgICAxNzgsXG4gICAgICAxNDcsXG4gICAgICAyNTQsXG4gICAgICAyMzQsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAyNDYsXG4gICAgICAxMjksXG4gICAgICA3LFxuICAgICAgMTg1LFxuICAgICAgMjM0LFxuICAgICAgNDQsXG4gICAgICAyMjIsXG4gICAgICAyMSxcbiAgICAgIDEwNyxcbiAgICAgIDE1NyxcbiAgICAgIDE3NyxcbiAgICAgIDI2LFxuICAgICAgMTcwLFxuICAgICAgMTExLFxuICAgICAgMjcsXG4gICAgICAyNDEsXG4gICAgICAxMTMsXG4gICAgICAyMTcsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1NQQ0FOTE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxODA2OTkwMjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTI3NTYyMTI2Mzc3MTk6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKT2YwWlVHRUx5cXRiTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpFdjJ1WXBvYmpDV2M4cjNTRXJHY0NZUDF3K0pSOGFJdC9iMzV3YVNhbTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNTBnUlpGbVRJY2FXNDgzSkIwK2NGbnRYaUJiUTNYSFZzeVRxR1Y4OXVYMkZZOTY1NlNmR3oveW10SXdPTzJGbzFrbmpoWkFlOGgwOVNvdmtLTk1OREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibTBNWWJPWCtOMVJIbUwzVjRwNzFLMWZKYzc4UjVxa1EwQndDNDZ0UW10Q29BaE9hNE5mY2g2d1c3VlZYNzNqUkZPNUpDRS81a0NLQStUT3RNejdwanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE4MDY5OTAyOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NDQxMjgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSC9iXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIL2IuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Bram",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
