const {
    Schema,
    model,
    Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /https?:\/\/./i;

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [1, "Name must be minimum one characters!"],
        maxlength: [20, "Name must be maximum twenty characters!"],
    },
    type: {
        type: String,
        required: true,
        enum: ["Tasty", "Whole grain", "Vegan", "Gluten free"],
    },
    ingrediants: {
        type: String,
        required: true,
        minlength: [10, "Name must be minimum one characters!"],
        maxlength: [150, "Ingrediants must be maximum hundred characters!"],
    },
    prepTime: {
        type: Number,
        required: true,
        min: [0, "Preparation time should be positive number"],
        max: [60, "This is too much already"],
    },
    cookTime: {
        type: Number,
        required: true,
        min: [0, "Cooking time should be positive number"],
        max: [60, "You are hungry, you don't have eternity"],
    },
    recipe: {
        type: String,
        required: true,
        minlength: [10, "Recipe must be minimum ten characters!"],
        maxlength: [500, "Recipe must be maximum hundred characters!"],
    },
    img: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: "Invalid URL, must start with HTTP/HTTPS",
        },
    },
    _ownerId: { type: ObjectId, ref: "User", required: true },
    likes: { type: Array, default: [], required: false },
});

const Pizza = model("Pizza", pizzaSchema);
module.exports = Pizza;
