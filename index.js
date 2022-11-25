const TeleBot = require('telebot');

const bot = new TeleBot('5800302294:AAG2KLKfgYOb4vlEt3dMAfY2LPvL4jYMqJ0');
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
bot.on('edit', (msg) => {
    return msg.reply.text('I saw it! You edited message!', { asReply: true });
});
bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});
bot.start();
bot.listen(process.env.PORT);
