const token = 'Nzg2MTE4MTE4MDQ0NDY3MjYw.X9BvjA.OFWPM12ZIJWmqGAyX7EkpC78lag';

const discord = require('discord.js');
const Distube = require('distube');
const client = new discord.Client();

client.on('ready', () => {
  console.log(`online ${client.user.tag}`);
});

const Distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });

const prefix = 's.';

client.on('message', msg => {
    if (msg.content == 'ez?') {
        msg.reply('no dude');
    }

    if (!msg.author.bot) {
        var date = new Date();
        console.log(msg.author.username + ': ' + `"${msg.content}"` + ' ||| info: ' + `date -> ` + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ' | ' + `server -> ` + `"${msg.guild.name}"` + ' | ' + 'channel -> ' + `"${msg.channel.name}"`)
    }

    if (msg.content.startsWith(prefix + 'delete')) {
        msg.channel.delete();
    }

    if (msg.content.startsWith(prefix + 'destroy')) {
        if (msg.author.id == '692580921169281026') {
            msg.reply('ok stephan finna destroy myself after 3 seconds... ;(');
            setTimeout(function(){ 
                client.destroy();
            }, 3000);
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
            { name: 's.ban @user', value: 'Bans someone...' },
            { name: 's.kick @user', value: 'Kicks someone..', inline: true },
            { name: 's.dice', value: 'Rolls the dice.', inline: true },
            { name: 's.guess', value: 'Plays the guess the number game.' },
            { name: 's.avatar', value: 'Displays your avatar.'},
            { name: 's.rps', value: 'Play rock paper and scissors.'},
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
})

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play")
        Distube.play(message, args.join(" "));

    if (["repeat", "loop"].includes(command))
        Distube.setRepeatMode(message, parseInt(args[0]));

    if (command == "stop") {
        Distube.stop(message);
        message.channel.send("Stopped the music!");
    }

    if (command == "skip")
        Distube.skip(message);

    if (command == "queue") {
        let queue = Distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = Distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
});

const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

Distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });

client.login(process.env.STEP_TOKEN);