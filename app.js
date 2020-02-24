const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);
const nasaAPI = process.env.NASA_API;
const fetch = require("node-fetch");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


client.messages
	.create({
		body: 'Hello! This is nasa mars rover',
		from: process.env.number,
		to: process.env.cell
	})
	.then(message => console.log(message.sid));
// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello World');
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${authToken}:${port}/`);
// });