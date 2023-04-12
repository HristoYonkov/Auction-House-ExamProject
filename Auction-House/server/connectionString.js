// const connectionString = "mongodb://127.0.0.1:27017/auction-house";
// const connectionString = "mongodb+srv://Swiftpaw:1234567890@cluster0.qhvpfqf.mongodb.net/Auction-House";

const connectionString = process.env.NODE_ENV === "production"
    ? "mongodb+srv://Swiftpaw:1234567890@cluster0.qhvpfqf.mongodb.net/Auction-House"
    : "mongodb://127.0.0.1:27017/Auction-House";

    module.exports = {
        connectionString,
    };
