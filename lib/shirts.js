ClothingOptions = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	imageId: {
		type: String,
		label: "image"
	}
})

ClothingPieces = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	clothingOptions: {
		type: [ClothingOptions],
		label: "Clothing Options"
	},
	layer: {
		type: Number,
		label: "Layer, this is the z-index of the image",
		min: 0
	}
})

ClothingType = new Mongo.Collection("clothingType");

ClothingType.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	clothingPieces: {
		type: [ClothingPieces],
		label: "Clothing Pieces"
	}
}))
