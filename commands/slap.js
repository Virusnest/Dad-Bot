const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Slap a user!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to slap')
				.setRequired(true)
		),
	async execute(interaction) {
		res = await axios.get('https://api.otakugifs.xyz/gif?reaction=slap&format=gif');
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(`${interaction.user.username} slaps ${interaction.options.getUser('target').username}`)
      .setDescription('*pouts*')
      .setImage(res.data.url)
      .setTimestamp()
      .setFooter({ text: 'https://otakugifs.xyz/api'});
		await interaction.reply({embeds: [exampleEmbed]});
	},
};

