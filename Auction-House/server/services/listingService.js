const Listing = require("../models/Listing");

async function getAll() {
    return Listing.find({});
}

async function create(data) {
    //TODO add user(creator) to pizza
    return Listing.create(data);
};

async function getById(id) {
    return Listing.findById(id).populate('_ownerId').populate('bidder');
};

async function update(id, listing) {
    const existing = await Listing.findById(id);
    existing.title = listing.title;
    existing.category = listing.category;
    existing.imageUrl = listing.imageUrl;
    existing.price = listing.price;
    existing.description = listing.description;
    return existing.save()
}

async function bidListing(listingId, userId, listing) {
    const existing = await Listing.findById(listingId)
    existing.bidder = userId;
    existing.price = listing.price
    return existing.save()
}

async function getByUserId(userId) {
    return Listing.find({ _ownerId: userId })
};

async function followListing(listingId, userId) {
    const existing = await Listing.findById(listingId)
    existing.follows.push(userId);
    return existing.save()
}
// ------------------------------------------------------------------------------------------------


async function getMyLikes(id) {
    const listings = await Listing.find({})
    let arr = [];
    listings.map(x => {
        if (!!(x.likes.includes(id))) {
            arr.push(x)
        }
    })
    return arr;

}

async function deleteById(id) {
    return Pizza.findByIdAndDelete(id)
};

// async function getMyListing(id) {
//     return await Listing.find({ _ownerId: id })
// }

module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    getMyLikes,
    deleteById,
    bidListing,
    followListing,
    // getMyListing,
};
