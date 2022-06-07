const { Telegraf } = require("telegraf");
const TOKEN = "5332618336:AAEwyrhtdykpBGnhmaICe2bCPMaTsXTR7gM";
const bot = new Telegraf(TOKEN);

const web_link = "https://zingy-flan-23354b.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Привет, нажми кнопку, чтобы заказать кроссовки!", {
    reply_markup: {
      keyboard: [[{ text: "Заказ кроссовок", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
