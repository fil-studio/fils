export function getLanguageValueMap(internationalizedArray, parserFunction?:Function) {
  const data = {};

  for(const item of internationalizedArray) {
    // console.log(item);
    data[item._key] = parserFunction ? parserFunction(item.value) : item.value;
  }

  return data;
}