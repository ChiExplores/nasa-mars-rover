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
	console.log(photoData[0].img_src)
	var img = document.createElement("IMAGE");
	var photo = photoData[0].img_src;  // Create a <button> element
	img.innerHTML = `<img src=${photo} alt=\"Italian Trulli\"/>`;
	console.log(document.querySelector(".col-sm.photo"))               // Insert text
	document.querySelector(".photo").appendChild(img);
}

let getPhoto = async function getMarsRoverAsync(e) {
	let roverName = e.target.id
	console.log(e.target.id)
	let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&camera=NAVCAM&api_key=${nasaAPI}`);
	let data = await response.json()
	// return data;
	console.log(data)
	console.log(data.photos.length)
	insertPhotos(data.photos);
}

document.getElementById("spirit").addEventListener("click", getPhoto);
document.getElementById("curiosity").addEventListener("click", getPhoto);
document.getElementById("opportunity").addEventListener("click", getPhoto);