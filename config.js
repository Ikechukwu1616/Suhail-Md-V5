const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻" 


global.devs = "2347063183606" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347063183606";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_33_08_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDY2LFxuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGZ0NMYm9yM2RoL085cHJDMUtiTU5IWS9zYklrVmdhVnNMQzB0aS9pVUd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzbkNnS1hfVlNGNmZsYXJEeURHVWRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0ODhhZmViLTMwYjMtNDY1NC1iMzE4LWI2MDZiYTM4YzkyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyNixcbiAgICAgIDE2NixcbiAgICAgIDgwLFxuICAgICAgMTU4LFxuICAgICAgMjQyLFxuICAgICAgMTM0LFxuICAgICAgMjUsXG4gICAgICAxNyxcbiAgICAgIDE3NSxcbiAgICAgIDIxMSxcbiAgICAgIDE2NCxcbiAgICAgIDE4NSxcbiAgICAgIDUxLFxuICAgICAgMjExLFxuICAgICAgMTQ4LFxuICAgICAgMTI0LFxuICAgICAgMTk1LFxuICAgICAgMTA2LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICAyMzYsXG4gICAgICAyNTUsXG4gICAgICA2MSxcbiAgICAgIDM4LFxuICAgICAgMjQwLFxuICAgICAgNixcbiAgICAgIDQwLFxuICAgICAgMjAwLFxuICAgICAgMTEsXG4gICAgICA5OCxcbiAgICAgIDY0LFxuICAgICAgMTA4LFxuICAgICAgMTQ2LFxuICAgICAgMjM1LFxuICAgICAgOTcsXG4gICAgICA5NCxcbiAgICAgIDE3NixcbiAgICAgIDE5NyxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNRFJIQTVXTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MzE4MzYwNjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklrZWNodWt3dVwiLFxuICAgIFwibGlkXCI6IFwiMTkwMTcyNjk2MTk1MTE3OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05qQnJwZ0ZFT09UK2JVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTFhleFVQeEdvUVdoNjkxd3NLend4SXAxLzlqbXNLRllvYzBWUXNCTWR3Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGREVhSkxYY2NGazVlYk9kNk4xbVYxTmM2eU1mTDZhV1kxeXdKMFdIU1ZWYk05WndDaHo1K0Rib3FabURPUUMvY0R4Wk9pRzV5anludnFoMnQxOG5BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0bU9TTDJ0MkZROCt4Q2taazJjd3BUVFJoaGFTbmd0Ykhtekp5bFdjcE43amhIbFMvcGtReXpOK1p6V0pXbm00VElnZ2tPRzYrUTNjd2xQRmtwUGNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYzMTgzNjA2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzc0Njc5MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "IKECHUKWU 🦅🦅",
  packname: process.env.PACK_NAME || "IKECHUKWU_𝕄𝔻",
  botname : process.env.BOT_NAME  || "IKECHUKWU_𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "IKECHUKWU",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
