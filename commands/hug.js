const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug a user!')
    .addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to hug')
				.setRequired(true)
    ),
	async execute(interaction) {
    res = await axios.get('https://api.otakugifs.xyz/gif?reaction=hug&format=gif');
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(`${interaction.user.username} hugs ${interaction.options.getUser('target').username}`)
      .setDescription('They feel much love')
      .setImage(res.data.url)
      .setTimestamp()
      .setFooter({ text: 'https://otakugifs.xyz/api'});
		await interaction.reply({embeds: [exampleEmbed]});
	},
};
