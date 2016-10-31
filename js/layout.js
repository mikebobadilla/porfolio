var meteor = {cover: "Meteor.png", info: "Meteor Logo", url: "http://www.meteor.com"}
var cordova = {cover: "cordova.png", info: "Cordova Logo", url: "http://cordova.apache.org"}
var apple = {cover: "Meteor.png", info: "Apple Logo", url: "http://www.meteor.com"}
var google = {cover: "Meteor.png", info: "Google Logo", url: "http://www.meteor.com"}

var app = new Vue({
	el: "#portfolio",
	data: {
		items: [
			{
				name: "Wildlife",
				header: "m",
				description: "React Technology - Wildlife Mobile App",
				cover: 	"wildlife.png",
				frameworks: [	meteor, cordova	],
				services: ["Meteor Development", "Database Design"],
				date: "June 2016",
			},
		]
	}
});
