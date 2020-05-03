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
// 			to: +555-555-5555;
// 		})

let insertPhotos = (photoData, earthDate, sol) => {
	console.log(photoData)
	var photo = photoData.img_src;
	var roverName = `photo from ${photoData.rover.name}`;
	var p = document.createElement("p")
	p.innerHTML = `${roverName} on earth date: ${earthDate} & on sol: ${sol}`;
	var img = document.createElement("IMAGE");
	// img.src = photo;
	img.innerHTML = `<img src=${photo} alt=${roverName} />`;
	p.appendChild(img);
	img.alt = roverName
	// img.setAttribute('src', photo)
	// img.setAttribute('alt', roverName)
	// console.log(img)
	// console.log(document.querySelector(".photo"))
	document.querySelector(".photo-section").appendChild(p);
}

function displayInformation() {

}

function getSol(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

//get Photo data, earth date, sol, photo
let getPhoto = async function getMarsRoverAsync(e) {
	let roverName = e.target.id
	let randomSol = getSol(1000)
	let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${randomSol}&api_key=${nasaAPI}`);
	let data = await response.json()
	let earthDate = data.photos[0].earth_date;
	let sol = data.photos[0].sol;
	insertPhotos(data.photos[0], earthDate, sol);
}

document.getElementById("spirit").addEventListener("click", getPhoto);
document.getElementById("curiosity").addEventListener("click", getPhoto);
document.getElementById("opportunity").addEventListener("click", getPhoto);