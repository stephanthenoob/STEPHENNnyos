const token = 'Nzg2MTE4MTE4MDQ0NDY3MjYw.X9BvjA.OFWPM12ZIJWmqGAyX7EkpC78lag';

const discord = require('discord.js');
const DisTube = require('distube');
const mongodb = require('mongoose');
const mongoCurrency = require('discord-mongo-currency');
const client = new discord.Client();

client.on('ready', () => {
  console.log(`online ${client.user.tag}`);
});

const distub = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });

mongodb.connect('mongodb+srv://stephan:notstephan@stephandatbazse.e3f59.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true});
mongoCurrency.connect('mongodb+srv://stephan:notstephan@stephandatbazse.e3f59.mongodb.net/Data');
const prefix = 's.';

client.on('message', msg => {
    if (msg.content == 'ez?') {
        msg.reply('gays');
    }

    if (!msg.author.bot) {
        var date = new Date();
        console.log(msg.author.username + ': ' + `"${msg.content}"` + ' ||| info: ' + `date -> ` + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ' | ' + `server -> ` + `"${msg.guild.name}"` + ' | ' + 'channel -> ' + `"${msg.channel.name}"`)
    }

    if (msg.content.startsWith(prefix + 'destroy')) {
        if (msg.author.id == '692580921169281026') {
            msg.reply('ok stephan finna destroy myself after 3 seconds... ;(');
            setTimeout(function(){ 
                client.destroy();
            }, 3000);
        }
    }

    if (msg.content.startsWith(prefix + 'delete')) {

        if(msg.member.hasPermission('MANAGE_CHANNELS')) {
            msg.reply('deleting channel after 3 seconds...');
            setTimeout(function(){ 
                msg.channel.delete();
            }, 3000);
        }
        else {
            msg.reply('no permissions u dum dum')
        }
    }

    if (msg.content.startsWith(prefix + 'ban')) {
        if (msg.member.hasPermission('BAN_MEMBERS')) {
            if (msg.mentions.members.first()) {
                try {
                    msg.mentions.members.first().ban();
                    msg.reply(msg.mentions.members.first() + ' got banned');
                } catch {
                    msg.reply('i cant ban ' + msg.mentions.members.first());
                }
            } else {
                msg.reply('who do i ban lol');
            }
        }
        else {
            msg.reply('no permission dum dum');
        }
    }

    if (msg.content.startsWith(prefix + 'gayrate')) {
        var number = Math.floor(Math.random() * 100);
        var description = 's';

        if (number >= 50 && number < 80) {
            description = 'bro idk what to say but u like almost gay...';
        }
        else if(number >= 80) {
            description = 'BRO THATS KINDA SUSSY UR GAY :gay_pride_flag:';
        }
        else if(number < 50 && number > 20) {
            description = 'u kinda on the road to be gay my man...';
        }
        else if(number <= 20) {
            description = 'yo this shit BUSSIN!! you seem to not be gay at all!';
        }
        const won = new discord.MessageEmbed().setColor('#039dfc').setTitle('You are ' + number + '% Gay!').setDescription(description).setTimestamp();

        if (number <= 20) {
            won.setColor('#0ffc03');
        }
        else if(number < 50 && number > 20) {
            won.setColor('#fce703');
        }
        else if(number >= 50 && number < 80) {
            won.setColor('#fc6f03');
        }
        else if(number >= 80) {
            won.setColor('#fc0303');
        }

        msg.channel.send(won);
    }

    if (msg.content.startsWith(prefix + 'kick')) {
        if (msg.mentions.members.first()) {
            if (msg.member.hasPermission('KICK_MEMBERS')) {
                msg.mentions.members.first().kick();
                msg.reply(msg.mentions.members.first() + ' got kicked');
            } else {
                msg.reply('you cant kick ' + msg.mentions.members.first());
            }
        }
        else {
            msg.reply('who do i kick u dum dum');
        }
    }

    if (msg.content.toLowerCase() == prefix + 'help') {
        const won = new discord.MessageEmbed().setColor('#039dfc').setTitle('Commands help').setDescription('All commands are in here!').setTimestamp()
        .addFields(
            { name: 'Moderator commands', value: 's.help mod' },
            { name: 'Game commands', value: 's.help game', inline: true },
            { name: 'Utility commands', value: 's.help utility', inline: true },
            { name: 'Music commands', value: 's.help music' },
        )

        msg.channel.send(won);
    }

    if (msg.content.toLowerCase() == prefix + 'help mod') {
        const won = new discord.MessageEmbed().setColor('#039dfc').setTitle('Moderator commands').setDescription('All commands are in here!').setTimestamp()
        .addFields(
            { name: 's.ban @user', value: 'bans user.' },
            { name: 's.kick @user', value: 'kick user.', inline: true },
            { name: 's.delete', value: 'deletes channel.', inline: true },
        )

        msg.channel.send(won);
    }

    if (msg.content.toLowerCase() == prefix + 'help game') {
        const won = new discord.MessageEmbed().setColor('#039dfc').setTitle('Game commands').setDescription('Play a game').setTimestamp()
        .addFields(
            { name: 's.dice', value: 'rolls the dice' },
            { name: 's.gayrate', value: 'your gay rate.', inline: true },
            { name: 's.guess', value: 'play the guess the number game', inline: true },
            { name: 's.rps', value: 'play rock paper scissors', inline: true },
        )

        msg.channel.send(won);
    }



    if (msg.content.toLowerCase() == prefix + 'help utility') {
        const won = new discord.MessageEmbed().setColor('#039dfc').setTitle('Utility commands').setDescription('Some utility stuff').setTimestamp()
        .addFields(
            { name: 's.avatar', value: 'shows your avatar.' },
        )

        msg.channel.send(won);
    }

    if (msg.content.toLowerCase() == prefix + 'help music') {
        const won = new discord.MessageEmbed().setColor('#039dfc').setTitle('Music commands').setDescription('Play music').setTimestamp()
        .addFields(
            { name: 's.play {URL/NAME}', value: 'searches a song and plays it' },
            { name: 's.stop', value: 'stops the music from playing', inline: true },
            { name: 's.loop', value: 'loops the queue', inline: true },
            { name: 's.queue', value: 'shows the queue', inline: true },
            { name: 's.skip', value: 'skip the current song', inline: true },
        )

        msg.channel.send(won);
    }

    if (msg.content.toLowerCase() == prefix + 'dice') {
        msg.reply('Ok! Rolling....');

        setTimeout(function(){ 
            var bot_roll = Math.floor(Math.random() * 6) + 1;
            var player_roll = Math.floor(Math.random() * 6) + 1;

            const won = new discord.MessageEmbed().setColor('#28fc03').setTitle('You won...').setDescription('Huh.. guess you won.. i rolled ' + bot_roll + ' and you rolled ' + player_roll + ' !').setTimestamp()
            const lost = new discord.MessageEmbed().setColor('#fc0303').setTitle('You lost!').setDescription('Haha! You lost! i rolled ' + bot_roll + ' and you rolled ' + player_roll + ' !').setTimestamp()

            if (bot_roll > player_roll) {
                msg.channel.send(lost);
            }
            else {
                msg.channel.send(won);
            }

            if (bot_roll == player_roll) {
                lost.setTitle('Thats a Tie!');
                lost.setDescription('We both rolled ' + number);
                lost.setColor('#fca903');
                msg.channel.send(lost);
            }
        }, 3000);
    }

    if (msg.content.toLowerCase() == prefix + 'avatar') {
        msg.reply(msg.author.displayAvatarURL());
    }

    if (msg.content.toLowerCase() == prefix + 'rps') {

        var number = Math.floor(Math.random() * 3) + 1;

        msg.reply('Ok, lets play the game! So basically:');
        msg.channel.send('1 - ROCK');
        msg.channel.send('2 - PAPER');
        msg.channel.send('3 - SCISSORS');
        msg.channel.send('What you want to choose?');

        msg.channel.awaitMessages(m => m.author.id == msg.author.id,
            { max: 1, time: 30000
                }).then(collected => {
                    if (collected.first().content == '1' && number == 1) {
                        msg.reply('Tie! Both of you chose Rock.');
                    }
                    else if (collected.first().content == '1' && number == 2) {
                        msg.reply('You lost! Your opponent had Paper.');
                    }
                    else if (collected.first().content == '1' && number == 3) {
                        msg.reply('You won! Your opponent had Scissors.');
                    }
                    else if (collected.first().content == '2' && number == 1) {
                        msg.reply('You won! Your opponent had Rock.');
                    }
                    else if (collected.first().content == '2' && number == 2) {
                        msg.reply('Tie! Both of you chose Paper.');
                    }
                    else if (collected.first().content == '2' && number == 3) {
                        msg.reply('You lost! Your opponent had Scissors.');
                    }
                    else if (collected.first().content == '3' && number == 1) {
                        msg.reply('You lost! Your opponent had Rock.');
                    }
                    else if (collected.first().content == '3' && number == 2) {
                        msg.reply('You won! Your opponent had Paper.');
                    }
                    else if (collected.first().content == '3' && number == 3) {
                        msg.reply('Tie! Both of you had Scissors.');
                    }
                }).catch(() => {
                     msg.reply('Game over... you didnt answer in time.');
            });
    }

    if (msg.content.toLowerCase() == prefix + 'guess') {
        msg.reply('What type of guess game? easy or hard?');
        msg.channel.send('EASY: number to guess from 1 to 10, 5 chances');
        msg.channel.send('HARD: number to guess from 1 to 20, 5 chances');
        msg.channel.send('EXTREME: number to guess from 1 to 100, 20 chances');
        msg.channel.send('type `s.guess easy` or `s.guess hard` or `s.guess extreme`');
    }

    if (msg.content.toLowerCase().startsWith(prefix + 'guess easy')) {
        var number = Math.floor(Math.random() * 10) + 1;
        msg.reply('ok! you have to guess a number from 1 to 10. How it works: You type 5 numbers in a row. `eg "1 2 3 4 5"` \n' + 'if the correct number is in that row you win. \n');

        msg.channel.awaitMessages(m => m.author.id == msg.author.id,
        { max: 1, time: 30000
            }).then(collected => {
                var messagesplit = collected.first().content.split(" ");
                if (messagesplit.includes(number.toString())) {
                    msg.reply('Congrats! the number was: ' + number);
                }
                else
                    msg.reply('You didnt got it.. the number was ' + number); 
            }).catch(() => {
                 msg.reply('Game over... you didnt answer in time.');
        });
    }

    if (msg.content.toLowerCase().startsWith(prefix + 'guess hard')) {
        var number = Math.floor(Math.random() * 20) + 1;
        msg.reply('ok! you have to guess a number from 1 to 20. How it works: You type 5 numbers in a row. `eg "1 2 3 4 5"` \n' + 'if the correct number is in that row you win. \n');

        msg.channel.awaitMessages(m => m.author.id == msg.author.id,
        { max: 1, time: 30000
            }).then(collected => {
                var messagesplit = collected.first().content.split(" ");
                if (messagesplit.includes(number.toString())) {
                    msg.reply('Congrats! the number was: ' + number);
                }
                else
                    msg.reply('You didnt got it.. the number was ' + number); 
            }).catch(() => {
                 msg.reply('Game over... you didnt answer in time.');
        });
    }

    if (msg.content.toLowerCase().startsWith(prefix + 'guess extreme')) {
        var number = Math.floor(Math.random() * 100) + 1;
        msg.reply('ok! you have to guess a number from 1 to 100. How it works: You type 20 numbers in a row. `eg "1 2 3 4 5"` \n' + 'if the correct number is in that row you win. \n');

        msg.channel.awaitMessages(m => m.author.id == msg.author.id,
        { max: 1, time: 30000
            }).then(collected => {
                var messagesplit = collected.first().content.split(" ");
                if (messagesplit.includes(number.toString())) {
                    msg.reply('Congrats! the number was: ' + number);
                }
                else
                    msg.reply('You didnt got it.. the number was ' + number); 
            }).catch(() => {
                 msg.reply('Game over... you didnt answer in time.');
        });
    }
});

client.on('message', async (msg) => {

    if (msg.content.startsWith(prefix + 'give')) {
        const member = msg.mentions.members.first();
        var messagesplit = msg.content.split(" ");

        if(msg.author.id != '692580921169281026') {
            return msg.channel.send('No permission to do that!');
        }

        if(!member) {
            return msg.channel.send('What member?')
        }

        if(!messagesplit[2]) {
            return msg.channel.send('What ammount of coins?')
        }

        if(messagesplit[2].isNaN) {
            return msg.channel.send('Thats not an number.');
        }

        await mongoCurrency.giveCoins(member.id, msg.guild.id, `${messagesplit[2]}`);
        msg.reply('I gave ' + `${member}` + ` ${messagesplit[2]}` + ' coins!');
    }

    if (msg.content.startsWith(prefix + 'work')) {
        msg.reply('You are currently working for 2 minutes..');

        setTimeout(function(){ 
            await mongoCurrency.giveCoins(msg.author.id, msg.guild.id, 100);
        }, 120000);
    }

    if (msg.content.startsWith(prefix + 'gamble')) {
        var messagesplit = msg.content.split(" ");

        const member = msg.mentions.members.first() || msg.member;

        const user = await mongoCurrency.findUser(member.id, msg.guild.id);

        if(!messagesplit[1]) {
            return msg.reply('What ammount?');
        }

        if(user.coinsInWallet < messagesplit[1]) {
            return msg.reply('You dont have that much money!');
        }

        if(messagesplit[1] < 50) {
            return msg.reply('Please gamble atleast 50 coins.');
        }

        if(messagesplit[1].isNaN) {
            return msg.reply('Not a valid number!');
        }

        msg.reply('Gambling!...');

        setTimeout(function(){ 
            await mongoCurrency.deductCoins(msg.author.id, msg.guild.id, messagesplit[1]);

            var bot_roll = Math.floor(Math.random() * 6) + 1;
            var player_roll = Math.floor(Math.random() * 6) + 1;

            const won = new discord.MessageEmbed().setColor('#28fc03').setTitle('You won...').setDescription('Huh.. guess you won.. i rolled ' + bot_roll + ' and you rolled ' + player_roll + ' !. You doubled all your ' + messagesplit[1]).setTimestamp()
            const lost = new discord.MessageEmbed().setColor('#fc0303').setTitle('You lost!').setDescription('Haha! You lost! i rolled ' + bot_roll + ' and you rolled ' + player_roll + ' !. You lost all your ' + messagesplit[1]).setTimestamp()

            if (bot_roll > player_roll) {
                msg.channel.send(lost);
            }
            else {
                msg.channel.send(won);
                await mongoCurrency.giveCoins(msg.author.id, msg.guild.id, messagesplit[1] * 2);
            }

            if (bot_roll == player_roll) {
                lost.setTitle('Thats a Tie!');
                lost.setDescription('We both rolled ' + number + '. You got your money back.');
                lost.setColor('#fca903');
                await mongoCurrency.giveCoins(msg.author.id, msg.guild.id, messagesplit[1]);
            }
        }, 2000);


    }

    if (msg.content.startsWith(prefix + 'balance')) {

        const user = await mongoCurrency.findUser(msg.member.id, msg.guild.id);
      
        msg.reply(`Wallet: ${user.coinsInWallet} \n Bank: ${user.coinsInBank}/${user.bankSpace} \n Total: ${user.coinsInBank + user.coinsInWallet}`);
    }
});

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play")
        distub.play(message, args.join(" "));

    if (["repeat", "loop"].includes(command))
        distub.setRepeatMode(message, parseInt(args[0]));

    if (command == "stop") {
        distub.stop(message);
        message.channel.send("Stopped the music.");
    }

    if (command == "skip")
        distub.skip(message);

    if (command == "queue") {
        let queue = distub.getQueue(message);
        message.channel.send('current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }
});

const status = (queue) => `loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "queue" : "current song" : "off"}\` ||| autoplay: \`${queue.autoplay ? "on" : "off"}\``;

distub
    .on("playSong", (message, queue, song) => message.channel.send(
        `playing \`${song.name}\` - \`${song.formattedDuration}\`\nrequested by: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `added ${song.name} - \`${song.formattedDuration}\` to queue by ${song.user}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("an error encountered: " + e);
    });

client.login(process.env.STEP_TOKEN);