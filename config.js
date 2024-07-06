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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_35_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBEbFhVZHhia1ExQVhXNFRRb2M3Njd4K09jekg5UXpzZ2hiNVBodTdZb2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldTbWdQQXJPUXQyS2ctUjRCSm1lT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDQ0Yjg0YjctODU4YS00MjVlLTkwNWUtYmJmODQ4YzVkMTljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTcxLFxuICAgICAgMTE0LFxuICAgICAgNzksXG4gICAgICAyNDgsXG4gICAgICA2MCxcbiAgICAgIDEwNyxcbiAgICAgIDg3LFxuICAgICAgNzUsXG4gICAgICAyNCxcbiAgICAgIDkyLFxuICAgICAgNDEsXG4gICAgICAyOSxcbiAgICAgIDE4NCxcbiAgICAgIDI0MCxcbiAgICAgIDk1LFxuICAgICAgMTUyLFxuICAgICAgMTEzLFxuICAgICAgMTA2LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTY3LFxuICAgICAgMTI0LFxuICAgICAgNzcsXG4gICAgICAzMSxcbiAgICAgIDE3OSxcbiAgICAgIDIwMixcbiAgICAgIDEwNyxcbiAgICAgIDIyNixcbiAgICAgIDY3LFxuICAgICAgMjE1LFxuICAgICAgNzEsXG4gICAgICAxMixcbiAgICAgIDc2LFxuICAgICAgOTYsXG4gICAgICAxMTYsXG4gICAgICAxNTUsXG4gICAgICAyMjYsXG4gICAgICA4NSxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3VkhUS1BXMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDk2Mjg3NDMyOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5OTA0NjE0MDM5NTU5OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vTWt1TUhFTnZUbmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZCt3OEFmdGhvYUFEYjJVZmxmcFE1NTdKNnIzQmVRMzZ6ZENnNU0vRWkwTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhLzhud1owK0g1enZqcy9pcUlzaVdONHIwRCtPT0Z2Wit3RDlWa0ZBR2ptMWNzWG9qMXdielMzbGcvRVJ6SkcrTEJSVnVZajNhaFpjYzBScDVxblZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5YkZvNUhtMzZtd252eS9HWVhZeWswcWErWGN6VGRNeWlpWVczUlM2R3RCZC9BbnI4R3hIcGZOK1c1dVJMYVRCOGRTWURKRFE5VG5EWlpvRDBXUitCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTYyODc0MzI6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE1MDQ5NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
