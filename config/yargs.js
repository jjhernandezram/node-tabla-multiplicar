const { number } = require('yargs');

const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'base de la tabla de multiplicar',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'enlista la tabla en consola',
    },
    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'hasta que numero multiplicar',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'la base no es un número';
    }
    return true;
  }).argv;

module.exports = argv;
