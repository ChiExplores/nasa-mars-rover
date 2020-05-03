const dotenv = require('dotenv');
dotenv.config();
const env = process.env
const accountSid = env.TWILIO_SID
const authToken = env.TWILIO_TOKEN
const client = require("twilio")(accountSid, authToken);
const nasaAPI = env.NASA_AUTH;
const fetch = require("node-fetch");
let roverName = getRover();
let randomSol = getSol(1000);


getMarsRoverAsync()
  .then(data => sendMsg(data.photos[0].img_src))

sendMsg = (data) => {
  client.messages
    .create({
      body: `HELLO, I am ${roverName} THIS IS IMAGE FROM MARS ROVER on sol ${randomSol}`,
      from: env.TWILIO_NUMBER,
      mediaUrl: [data],
      to: env.CELL
    })
    .then(message => console.log(message.sid));
}

//get Photo data, earth date, sol, photo
async function getMarsRoverAsync(e) {
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${randomSol}&api_key=${nasaAPI}`);
  let data = await response.json();
  return data;

}

function getSol(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRover() {
  const rovers = ['curiosity', 'spirit', 'opportunity', 'perserverance'];
  let randomOptions = Math.floor(Math.random() * Math.floor(5));
  return rovers[randomOptions];
}