const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_15_53_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaYWFlRmVhYmx0U1piTU1IdDZMSzg5ckFSaEltazVMWDYxYmI4WEhJbUtNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsSnN1WUoxNFJPaUVabjVGcDNHVEVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmM2IxMzNhLTZjNjYtNDczYS1hNzMwLWQ0ZTJlY2JmMWNhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAyMTEsXG4gICAgICAyNixcbiAgICAgIDE1NixcbiAgICAgIDQ4LFxuICAgICAgMjQ1LFxuICAgICAgNTgsXG4gICAgICAxNTMsXG4gICAgICAxMTksXG4gICAgICAyMDcsXG4gICAgICA4MixcbiAgICAgIDEzMyxcbiAgICAgIDE2NixcbiAgICAgIDE2LFxuICAgICAgMTA2LFxuICAgICAgNCxcbiAgICAgIDE2MixcbiAgICAgIDYyLFxuICAgICAgNDMsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTA1LFxuICAgICAgMjM0LFxuICAgICAgMTgwLFxuICAgICAgNzYsXG4gICAgICAxMDYsXG4gICAgICA4OSxcbiAgICAgIDIyMCxcbiAgICAgIDg4LFxuICAgICAgMTQwLFxuICAgICAgMTk1LFxuICAgICAgMTY0LFxuICAgICAgNjksXG4gICAgICA1NyxcbiAgICAgIDIxNSxcbiAgICAgIDEwMixcbiAgICAgIDY2LFxuICAgICAgMTI3LFxuICAgICAgMjIsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzg0RzdaUDZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTMwNDQ5Nzk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MjYwNzQ1Mzg1OTk1MjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN0t6VTRRN2J1cHRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZQRzBWcldKYVFDN2ppd09FY1ViclkxanZlVWUzU0hSOHZGNUZYZ2xpVjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiemhZK2U3eTlWak9Yc0g2U1pvREdNVFBoVnUvd0Z2RGNnQmVEclMva2lRdVlRMTNJUEVzNjJwWVVJN0RSdmZwaEhwbS9CcUk4TE9XVmFiejl2clJtQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHV4Y2RSdFFQUHBUeG5ZblE4RmZnSU9uRDZwTWhiSUJ1NVJadkFrNFNOT2ZtcC9ubVFMYkFlNHl4YVoyc0hpQUlsS1lJaklmT2tSakwwYkNFaHE4aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMzA0NDk3OToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0NDEyMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCL2hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIvaC5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Dead Sky Point",
  packname: process.env.PACK_NAME || "Mortis 2.0",
  botname : process.env.BOT_NAME  || "Sky Point-bot",
  ownername:process.env.OWNER_NAME|| "Maromo",


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
