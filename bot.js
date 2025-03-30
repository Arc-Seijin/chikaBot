const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Test-LEaV.aternos.me', // Replace with your Aternos server IP
  port: 31944,                     // Default Minecraft port
  username: 'TheKeeper696969'             // Change this if needed
});

bot.on('spawn', () => {
  console.log('Bot has joined the server!');
});

bot.on('end', () => {
  console.log('Bot got disconnected, reconnecting...');
  setTimeout(() => {
    bot.connect();
  }, 5000); // Reconnect after 5 seconds
});
