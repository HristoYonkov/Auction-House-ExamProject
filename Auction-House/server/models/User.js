const { Schema, model } = require("mongoose");

// const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userSchema = new Schema({
    email: {
        type: String, required: true, unique: true, validate: {
            validator: (value) => emailRegex.test(value),
            message: "Invalid email",

        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, "Username must be at least 3 characters!"],
        maxlength: [10, "Username cannot have more than 10 characters!"],
    },
    hashedPassword: { type: String, required: true },
});

userSchema.index(
    { email: 1 },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);

const User = model("User", userSchema);

module.exports = User;
