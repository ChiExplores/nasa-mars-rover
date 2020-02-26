const dotenv = require('dotenv');
dotenv.config();
const env = process.env
const accountSid = env.TWILIO_SID
const authToken = env.TWILIO_TOKEN
const client = require("twilio")(accountSid, authToken);
const nasaAPI = env.NASA_AUTH;
const fetch = require("node-fetch");
let img = void 0;

async function getMarsRoverAsync() {
	let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY ');
	let data = await response.json()
	return data;
}

getMarsRoverAsync()
	.then(data => sendMsg(data.photos[0].img_src))

sendMsg = (data) => {
	client.messages
		.create({
			body: 'HELLO, THIS IS IMAGE FROM MARS ROVER',
			from: +'',
			mediaUrl: [data],
			to: +''
		})
		.then(message => console.log(message.sid));
}

