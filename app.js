// const dotenv = require('dotenv');
// dotenv.config();
// const env = process.env
// const accountSid = env.TWILIO_SID
// const authToken = env.TWILIO_TOKEN
// const client = require("twilio")(accountSid, authToken);
const nasaAPI = "RShnld8C4Xa3MHfwMENxQq70tF1cezlzbFhxILnG";
// const fetch = require("node-fetch");
let img = void 0;
let camera = ['fhaz',];
let rovers = ['curiosity', 'spirit', 'opportunity', 'perserverance'];

//Try doing it promises 
// getMarsRoverAsync()
// 	.then(data => sendMsg(data.photos[0].img_src))

// sendMsg = (data) => {
// 	client.messages
// 		.create({
// 			body: 'HELLO, THIS IS IMAGE FROM MARS ROVER',
// 			from: env.TWILIO_NUMBER,
// 			mediaUrl: [data],
// 			to: +4146781466
// 		})

let insertPhotos = (photoData) => {
	console.log(photoData)
	var photo = photoData[0].img_src;

	var img = document.createElement("IMAGE");
	var roverName = `photo from ${photoData[0].rover.name}`;
	// img.src = photo;
	img.innerHTML = `<img src=${photo} alt=${roverName} />`;
	// img.alt = roverName
	// img.setAttribute('src', photo)
	// img.setAttribute('alt', roverName)
	// console.log(img)
	// console.log(document.querySelector(".photo"))
	document.querySelector(".photo").appendChild(img);
}

function displayInformation(){
	
}

function getSol(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

let getPhoto = async function getMarsRoverAsync(e) {
	let roverName = e.target.id
	let sol = getSol(1000)
	let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=${nasaAPI}`);
	let data = await response.json()
	insertPhotos(data.photos);
}

document.getElementById("spirit").addEventListener("click", getPhoto);
document.getElementById("curiosity").addEventListener("click", getPhoto);
document.getElementById("opportunity").addEventListener("click", getPhoto);