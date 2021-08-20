const botData = require('../data/bot.json');

exports.getNodeChat = (req, res, next) => {
	const status = req.params.status;
	res.status(200).json(botData.content[status]);
};
