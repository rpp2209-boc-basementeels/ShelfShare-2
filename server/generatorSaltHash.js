const generatorSalt = (cookie) => {
  var saltArr = [];
  for (let i = 0; i < cookie.length; i++) {
    saltArr.push(Math.floor(Math.random() * cookie.length))
  }

  result = '';
  alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  for (let i = 0; i < saltArr.length; i++) {
    if (i % 2 === 0) { // even -> number
      result += `${saltArr[i]}`
    } else { // odd -> letter
      result += alphabet[saltArr[i] % alphabet.length];
    }
  }
  return result;
};

const generatorHash = (cookie, salt) => {
  var result = '';
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] !== '"' && cookie[i] !== '{' && cookie[i] !== '}' && cookie[i] !== ':') {
      result += `${cookie[i]}${Math.floor(Math.random() * cookie.length)}${salt[i]}`;
    }
  }
  return result;
};

module.exports = { generatorSalt, generatorHash };