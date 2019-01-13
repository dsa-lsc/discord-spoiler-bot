/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @see https://github.com/TimboKZ/discord-spoiler-bot
 * @copyright 2017
 * @license MIT
 */

const SpoilerBot = require('discord-spoiler-bot');

let config = {
  token: process.env.DISCORD_SECRET,
};

let bot = new SpoilerBot(config);
bot.connect();