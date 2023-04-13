const cacheService = require("./cache-service");

const main = async () => {
	cacheService.set("CLAVE", "1234");
	let valor = await cacheService.get("CLAVE");
	console.log(`El valor de CLAVE es ${valor}`);
};
main();
