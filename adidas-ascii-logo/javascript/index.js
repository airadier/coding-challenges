const createAdidasAsciiLogo = require('./src/adidas-ascii-logo');

[ 2, 3, 4, 9, 16 ].forEach((width) => {
  process.stdout.write(`\n${ createAdidasAsciiLogo(width) }\n`);
});
