import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


var currentClothingPiece = new SimpleSchema({
	name: {
		type: String,
		label: "Current Clothing Piece"
	},
	options: {
		type: String,
		label: "Currentt Clothing Option"
	}
}),

CurrentClothing = new Mongo.Collection(null);//client

CurrentClothing.attachSchema({
	currentClothingTypeId: {
		type: String,
		label: "Current Clothing Type"
	},
	currentClothingPieces: {
		type: [currentClothingPiece], //array of clothing pieces
		label: "Current Clothing Piece"
	}
})


/*Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/