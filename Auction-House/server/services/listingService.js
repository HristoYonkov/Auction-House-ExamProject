const Listing = require("../models/Listing");

async function getAll() {
    return Listing.find({});
}

async function getByUserId(userId) {
    return Listing.find({ _ownerId: userId })

};
async function getById(id) {
    return Listing.findById(id).populate('_ownerId')
    
};

async function create(data) {
    //TODO add user(creator) to pizza
    return Listing.create(data);
};

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

async function update(id, pizza) {
    const existing = await Pizza.findById(id);
    existing.name = pizza.name;
    existing.type = pizza.type;
    existing.ingrediants = pizza.ingrediants;
    existing.prepTime = pizza.prepTime;
    existing.cookTime = pizza.cookTime;
    existing.recipe = pizza.recipe;
    existing.img = pizza.img;
    return existing.save()
}


async function deleteById(id) {
    return Pizza.findByIdAndDelete(id)
};

// async function getMyListing(id) {
//     return await Listing.find({ _ownerId: id })
// }

async function likeListing(listingId, userId) {
    const existing = await Listing.findById(listingId)
    existing.likes.push(userId);
    return existing.save()
}
module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    getMyLikes,
    deleteById,
    // getMyListing,
    likeListing
};
