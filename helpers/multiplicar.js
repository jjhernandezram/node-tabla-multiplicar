const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';
    for (let index = 1; index <= hasta; index++) {
      consola = consola += `${base} ${'x'.magenta} ${index} ${'='.magenta} ${base * index}\n`;
      salida = salida += `${base} x ${index} = ${base * index}\n`;
    }

    if (listar) {
      console.log('==============='.yellow);
      console.log('  tabla del'.grey, base);
      console.log('==============='.yellow);
      console.log(consola);
    }

    fs.writeFileSync(`./output/tabla_${base}.txt`, salida);
    return `tabla_${base}.txt`.yellow;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
