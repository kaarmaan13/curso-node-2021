const argv = require('yargs')
  .option('b', {
    alias: 'base',
    describe: 'Es la base a multiplicar',
    type: 'number',
    demandOption: true
  })
  .option('l', {
    alias: 'listar',
    describe: 'Muestra la tabla en consola',
    type: 'boolean',
    default: false
  })
  .option('h', {
    alias: 'hasta',
    describe: 'Hasta que número se multiplica',
    type: 'number',
    demandOption: true
  })
  .check( (argv, options) =>{
    if( isNaN(argv.b)) {
      throw 'ERROR: La base tiene que ser un numero'
    }
    return true
  })
  .argv

module.exports = argv;