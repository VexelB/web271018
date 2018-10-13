const concat = require('goss_concat');

function rgb(r = 255, g = 255, b = 255) {
  return concat('rgb(', r, ',', g, ',', b, ')');
}

console.log(rgb(14, 188));
