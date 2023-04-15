var redis = require("redis");
require("dotenv").config();
var client;
const doConnectionToRedis = async () => {
	if (client) {
		return;
	}

	if (!process.env.REDIS_STRING_CONNECTION) {
		console.log(`[cache-logic][connect][REDIS_STRING_CONNECTION] is missing`);
		return;
	}

	client = await redis.createClient({
		url: process.env.REDIS_STRING_CONNECTION,
	});
	await client.connect();

	client.on("connect", function () {
		console.log("[cache-logic][connect] connected");
	});

	client.on("error", function (err) {
		console.log(`[cache-logic][connect] not connected ${err}`);
	});
};

const set = async function (key, value) {
	await doConnectionToRedis();
	await client.set(key, value);
};

const get = async function (key) {
	await doConnectionToRedis();
	const value = await client.get(key);
	return value;
};

const remove = async function (key) {
	await doConnectionToRedis();
	const value = await client.del(key);
	return value;
};

module.exports = {
	get,
	set,
	remove,
};
