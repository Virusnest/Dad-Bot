const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wave')
		.setDescription('Wave to a user!')
    .addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to wave to')
				.setRequired(true)
    ),
	async execute(interaction) {
    res = await axios.get('https://api.otakugifs.xyz/gif?reaction=wave&format=gif');
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(`${interaction.user.username} waves to ${interaction.options.getUser('target').username}`)
      .setDescription('They wave back')
      .setImage(res.data.url)
      .setTimestamp()
      .setFooter({ text: 'https://otakugifs.xyz/api'});
		await interaction.reply({embeds: [exampleEmbed]});
	},
};
