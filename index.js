const cacheService = require("./cache-service");

const main = async () => {
	await cacheService.set("CLAVE", "1234");
	let valor = await cacheService.get("CLAVE");
	console.log(`El valor de CLAVE es ${valor}`);

	//await cacheService.remove("CLAVE");
};
main();
