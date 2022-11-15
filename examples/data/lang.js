const createLanguages = require('../utils/languages.js');

module.exports = async () => {
  return createLanguages(
		[
			{
				"lang": "en",
				"locale": "en-EN"
			},
			{
				"lang": "es",
				"locale": "es-ES"
			}
		]
	);
}