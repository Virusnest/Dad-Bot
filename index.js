const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMessages] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
const IAM_MATCH = /\b((?:i|l)(?:(?:'|`|‛|‘|’|′|‵)?m| am)) ([\s\S]*)/i,
SHUT_MATCH = /\b(stfu|shut\s(?:the\s)?(?:fuck\s)?up)\b/i,
GNU_LINUX = /gnu|linux/im,
GNU_NOT_LINUX = /(gnu)[\S\s]*(linux)|(linux)[\S\s]*(gnu)/im,
QUAN_MATCH = /quan|dale|dingle/i,
WALTER_MATCH = /walter|jesse|skylar/i
var id
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
  id = c.user.id
});

client.on(Events.MessageCreate, m =>{
  const message = m.content
  if (m.author.id != id ){
    if (message.match(IAM_MATCH)!=null){
      const match = (message.match(IAM_MATCH))
      m.channel.send(`Hi ${match[2]}, I'm Dad`)
      return
    }
    if (message.match(SHUT_MATCH)!=null){
      const match = (message.match(IAM_MATCH))
      m.channel.send(`Listen here ${m.author.username}, I will not tolerate you saying the words that consist of the letters 's h u t  u p' being said in this server, so take your own advice and close thine mouth in the name of the christian minecraft server owner.`)
      return
    }
    if ((message.match(GNU_NOT_LINUX)==null&&message.match(GNU_LINUX)!=null)){
      const match = (message.match(IAM_MATCH))
      m.channel.send(`I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called "Linux", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project. There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called "Linux" .`)
      return
    }
    if (message.match(QUAN_MATCH)!=null){
      // Returns a random integer from 0 to 10:
      var choice = Math.floor(Math.random() * 6);
      var choices = [
        "What's up guys! It's Quandale Dingle here! (RUUEHEHEHEHEHEEHE) I have been arrested for multiple crimes (AHHHHHHHHHHHHH) including: Battery on a police officer (WHAT), Grand theft, Declaring war on Italy, and public indecency (RUHEHEHEEHEHEHEHEHEHEHE X2 speed). I will be escaping prison on, MARCH 28TH! After that.... I WILL TAKE OVER THE WORLD",
        "Greetings! Quandale Dingle here. My cousin Henry Dinglenut got arrested for putting TNT in a daycare center. (WHAT THE FUCK??) I put a camera in Joe Biden's bathroom and watched him take a poop. (WHAT????) My Asian brother, Quanliling Dingle put illegal substances in my ramen and I died.",
        "Hey, Quandale Dingle here. I just escaped prison and staying at Juandale Pringle's house. As I was running away from cops, I fell and scraped some of my foreskin off. A guy named Garfield Jenson bit me over in the shower while I was in prison. My baby momma Shiniqua Inderson told me to pay child support so I gave my baby to a creepy old guy,",
        `What's up guys, it's Quandele Dingle here
I have been arrested for multiple crimes
Including battery on police officer (what)
Grand theft, declaring war on Italy, and public indecency
I will be escaping prison on March 28th
After that I will take over the world`,
        `Greetings, Quandele Dingle here
My cousin Henry Bartholomew Dingle Nut
Got arrested for putting a TNT in a daycare center (what the fuck)
Put a camera on Joe Biden's bathroom and watched him take a poop (what)
My Asian brother Quan Ling Ling Dingle put illegal substances in my ramen and I died`,

        `Hey fellas it's Quandele Dingle here
I put perks on Vladimir Putin's drink
And he went to bed for a really long time
I trapped my autistic son's hand in an air fryer (herrrrr)
I dumped boiling water on a prison guard's head
My goofy ah friend, Jamarious Quandele Dingle tried to eat my but during Ramadhan`,
      ]
      
      m.channel.send(`${choices[choice]}`)
      return
    }
    if (message.match(WALTER_MATCH)!=null){
      m.channel.send("My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a Virtual Youtuber empire for over a year now and using me as his recruiter. Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. He asked that I use my Live2D knowledge to recruit talents, which he would then hire using his connections in the Japanese utaite world. Connections that he made through his career with Niconico. I was... astounded, I... I always thought that Hank was a very moral man and I was... thrown, confused, but I was also particularly vulnerable at the time, something he knew and took advantage of. I was reeling from a cancer diagnosis that was poised to bankrupt my family. Hank took me on a ride along, and showed me just how much money even a small indie channel could make. And I was weak. I didn't want my family to go into financial ruin so I agreed. Every day, I think back at that moment with regret. I quickly realized that I was in way over my head, and Hank had a partner, a man named Motoaki \"Yagoo\" Tanigo, a businessman. Hank essentially sold me into servitude to this man,")
      m.channel.send(" and when I tried to quit, Yagoo threatened my family. I didn't know where to turn. Eventually, Hank and Yagoo had a falling out. From what I can gather, Hank was always pushing for a greater share of the business, to which Yagoo flatly refused to give him, and things escalated. Yagoo was able to arrange, uh I guess I guess you call it a \"hit\" on my brother-in-law, and failed, but Hank was seriously injured, and I wound up paying his medical bills which amounted to a little over $177,000. Upon recovery, Hank was bent on revenge, working with a man named Riku Tazumi , he plotted to kill Yagoo, and did so. In fact, the bomb that he used was built by me, and he gave me no option in it. I have often contemplated suicide, but I'm a coward. I wanted to go to the police, but I was frightened. Hank had risen in the ranks to become the head of the Cover Corp, and about that time, to keep me in line, he took my children from me. For 3 months he kept them. My wife, who up until that point, had no idea of my vtubing activities, was horrified to learn what I had done, why Hank had taken our children. We were scared. I was in Hell, I hated myself for what I had brought upon my family. Recently, I tried once again to quit, to end this nightmare, and in response, he gave me this. I can't take this anymore. I live in fear every day that Hank will kill me, or worse, hurt my family. I... All I could think to do was to make this video in hope that the world will finally see this man, for what he really is.")
      return
    }
  }
});



// Log in to Discord with your client's token
client.login(token);