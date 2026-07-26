const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "owner",
    aliases: ["admininfo", "info", "ownerinfo"],
    version: "3.0",
    author: "Shishir ",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Show owner information" },
    category: "owner",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ api, event, message }) {

    const ownerName = "Negative Xalman";
    const ownerAge = "18";
    const fbName = "Maybe NX";
    const messenger = "https://www.facebook.com/xalman.dev";
    const whatsapp = "https://wa.me/qr/2SDY4QQTMJR7H1";
    const telegram = "@Negativexalman";
    const address = "Narsingdi, Dhaka, Bangladesh";
    const religion = "Islam";
    const apiServer = "https://xalman-apis.vercel.app";
    const relationship = "Single";
    const videoLink = "https://files.catbox.moe/vd43nx.mp4";
    const timeBD = moment().tz("Asia/Dhaka");
    
    const infoMsg = 
`『 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 』
━━━━━━━━━━━━━━━━━━━━━

👤 𝗔𝗕𝗢𝗨𝗧 𝗠𝗘:
● Name: ${𝐀𝐡𝐦𝐞𝐃'𝐬 𝐒𝐡𝐢'𝐬𝐡𝐢𝐫}
● Age: ${17}
● Relationship: ${singel}
● Religion: ${Islam }
● Address: ${Dhaka Mirpur }

📞 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗗𝗘𝗧𝗔𝗜𝗟𝗦:
● Facebook: ${Yazaki }
● Fb Link: ${https://www.facebook.com/share/191Xsd4dd8/}
● WhatsApp: ${017493----26}
● Telegram: ${Ahmed shishir}
● API Server: ${Shishir Server}

⏰ 𝗗𝗔𝗧𝗘 & 𝗧𝗜𝗠𝗘 (𝗕𝗗):
● ${timeBD.format("DD MMMM, YYYY")}
● ${timeBD.format("hh:mm:ss A")}
━━━━━━━━━━━━━━━━━━━━━`;

    try {
      return message.reply({
        body: infoMsg,
        attachment: await global.utils.getStreamFromURL(videoLink)
      });
    } catch (e) {
      return message.reply(infoMsg);
    }
  },

  onChat: async function ({ event, message }) {
    if (event.body?.toLowerCase() === "info") {
      return this.onStart({ message, event });
    }
  }
};
