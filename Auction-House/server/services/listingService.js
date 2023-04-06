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

async function getUserFollows(id) {
    const listings = await Listing.find({})
    let arr = [];
    listings.map(x => {
        if (!!(x.follows.includes(id))) {
            arr.push(x)
        }
    })
    return arr;
}

async function getUserWons(userId) {
    const listings = await Listing.find({});
    let arr = [];
    listings.map(x => {
        if (x.bidder == userId && x.isClosed) {
            arr.push(x)
        }
    })
    return arr;
}

async function unfollowListing(id, userId) {
    const existing = await Listing.findById(id);
    existing.follows = existing.follows.filter(x => x != userId);
    return existing.save();
}

async function endAuction(id) {
    const existing = await Listing.findById(id);
    existing.isClosed = true;
    return existing.save();
}

async function deleteById(id) {
    return Listing.findByIdAndDelete(id)
};

// ------------------------------------------------------------------------------------------------




// async function getMyListing(id) {
//     return await Listing.find({ _ownerId: id })
// }

module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    getUserFollows,
    deleteById,
    bidListing,
    followListing,
    unfollowListing,
    endAuction,
    getUserWons
    // getMyListing,
};
