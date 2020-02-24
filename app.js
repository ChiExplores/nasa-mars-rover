const dotenv = require('dotenv');
dotenv.config();
const env = process.env
const accountSid = env.TWILIO_SID
const authToken = env.TWILIO_TOKEN
const client = require("twilio")(accountSid, authToken);
const nasaAPI = env.NASA_AUTH;
// const fetch = require("node-fetch");
const http = require('http');
const hostname = '127.0.0.1';
const port = env.PORT;


// client.messages
// 	.create({
// 		body: 'HELLO, THIS IS CHI',
// 		from: +15744018284,
// 		to: +4159177690
// 	})
// 	.then(message => console.log(message.sid));

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
console.log(`${port}`)