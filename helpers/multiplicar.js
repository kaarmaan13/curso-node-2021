const fs = require("fs");
const colors = require('colors');

const createFile = async (base = 5, listar = false, hasta = 10) => {
  try {

    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${'x'.brightYellow} ${i} ${'='.brightYellow} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if(listar == true) {
      console.log(`=======================
      Tabla del ${colors.underline.white(base)}
=======================`.red);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
