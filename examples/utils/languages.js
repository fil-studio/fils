const path = require('path');
const fs = require('fs-extra');

module.exports = async function(languages) {

  for(const _lang of languages){

    const langFilePath = path.resolve(__dirname, `../src/views/pages/${_lang.lang}/${_lang.lang}.json`);
    const fileExists = await fs.pathExists(langFilePath);

    if(!fileExists){
      fs.writeJSON(langFilePath, _lang, err => {
        if (err) {console.error(err)}
      });
    }
  }

  return languages;
};