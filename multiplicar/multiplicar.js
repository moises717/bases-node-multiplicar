const fs = require("fs");
const colors = require("colors/safe");

let crearArchivo = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		if (!Number(base)) {
			reject(`El valor ${base} no es un numero`);
			return;
		}

		let data = "";

		for (let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		fs.writeFile(`tablas/${base}.txt`, data, (err) => {
			if (err) reject(err);
			else resolve(`El archivo ${base}-${limite} a sido creado`);
		});
	});
};

let listarTabla = (base, limite) => {
	console.log("===================".green);
	console.log(`====Tabla de ${base}====`.green);
	console.log("===================".green);

	if (!Number(base)) {
		console.log(`El valor ${base} no es un numero`);
		return;
	}

	let data = "";

	for (let i = 1; i <= limite; i++) {
		console.log(`${base} * ${i} = ${base * i}\n`);
	}

	console.log(data);
};

module.exports = {
	crearArchivo,
	listarTabla,
};
