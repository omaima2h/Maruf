const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "animevideo",
    aliases: ["amv", "anivid"],
    version: "1.0",
    author: "Mueid Mursalin Rifat",
    description: "Send a random anime video from direct-streaming API",
    category: "media",
    cooldown: 5
  },

  onStart: async function ({ api, event }) {
    const tempPath = path.join(__dirname, "anime.mp4");
    const loading = await api.sendMessage("🦆please wait, Senpai! 🌸", event.threadID);

    try {
      const response = await axios({
        method: "GET",
        url: "https://anime-video-api.onrender.com/anime",
        responseType: "stream"
      });

      const writer = fs.createWriteStream(tempPath);
      response.data.pipe(writer);

      writer.on("finish", () => {
        api.sendMessage({
          body:
            "🌸 Here is your anime video, Senpai! Enjoy every frame 🍿\n" +
            "🔗 Powered by: Anime Video API\n" +
            "🗿 Developed by: Mueid Mursalin Rifat ❤️",
          attachment: fs.createReadStream(tempPath)
        }, event.threadID, () => {
          fs.unlinkSync(tempPath);
          api.unsendMessage(loading.messageID);
        });
      });

      writer.on("error", (err) => {
        console.error("Write error:", err);
        api.sendMessage("❌ Error writing video to file.", event.threadID);
      });

    } catch (err) {
      console.error("API fetch error:", err);
      api.sendMessage("⚠ Failed to fetch video from API.", event.threadID, event.messageID);
    }
  }
};
