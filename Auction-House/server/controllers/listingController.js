const listingController = require("express").Router();

const { getAll, create, getById, getByUserId, endAuction, deleteById,
    getUserFollows, bidListing, update, followListing, unfollowListing } = require("../services/listingService");

listingController.get("/", async (req, res) => {
    try {
        const listing = await getAll();
        res.status(200).json(listing);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

listingController.post("/", async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        const listing = await create(data);
        //todo error
        res.json(listing)
    } catch (error) {
        // const message = parseError(err)

        res.status(400).json({ error: error.message })
    }
    res.end()
});

listingController.put('/:id', async (req, res) => {
    try {
        const listing = await getById(req.params.id);
        if (req.user._id === undefined || req.user._id != listing._ownerId._id) {
            throw new Error('You cannot modify this record!');
        }

        if (listing.bidder) {
            throw new Error('This Listing has a bidder!');
        }

        const result = await update(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});

listingController.put('/bid/:id', async (req, res) => {
    try {
        const listing = await getById(req.params.id);

        if (listing._ownerId._id != req.user._id &&
            listing.bidder != req.user._id &&
            req.body.price > listing.price) {
            try {
                await bidListing(req.params.id, req.user._id, req.body);
                const listing = await getById(req.params.id);
                return res.status(200).json(listing);
            } catch (error) {
                res.status(400).json({ err: error.message });
            }
        }
        throw new Error('You cannot place your bid!');
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
});

listingController.get('/my-listings', async (req, res) => {
    const listings = await getByUserId(req.user._id);
    res.status(200).json(listings)
});

listingController.get('/follow/:id', async (req, res) => {
    try {
        const listing = await getById(req.params.id)
        if (listing._ownerId._id != req.user._id
            && listing.follows.map(x => x.includes(req.user?._id) == false)) {
            try {
                await followListing(req.params.id, req.user._id);
                const listing = await getById(req.params.id)
                return res.status(200).json(listing)
            } catch (error) {
                res.status(400).json({ err: error.message })
            }
        }
    } catch (error) {
        res.status(400).json({ err: error.message })

    }
});

listingController.get('/end-auction/:id', async (req, res) => {
    try {
        const listing = await getById(req.params.id)
        if (listing._ownerId._id == req.user._id &&
            listing.isClosed == false) {
            try {
                await endAuction(req.params.id);
                const listing = await getById(req.params.id)
                return res.status(200).json(listing)
            } catch (error) {
                res.status(400).json({ err: error.message })
            }
        }
    } catch (error) {
        res.status(400).json({ err: error.message })

    }
});

listingController.get('/my-follows', async (req, res) => {
    try {
        const listings = await getUserFollows(req.user._id)
        return res.status(200).json(listings)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

listingController.get('/:id', async (req, res) => {
    try {
        const listing = await getById(req.params.id)

        if (!listing) {
            throw new Error('listing does not exist')
        }
        return res.status(200).json(listing)
    } catch (error) {
        res.status(400).json({ error })

    }
});

listingController.get('/unfollow/:id', async (req, res) => {
    try {
        const listing = await getById(req.params.id);
        const result = await unfollowListing(listing._id, req.user._id);
        return res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ err: error.message });
        console.log(error);
    }
});

listingController.delete('/:id', async (req, res) => {
    try {
        const listing = await getById(req.params.id);
        if (req.user._id != listing._ownerId._id) {
            return res.status(403).json({ err: err.message })
        }
        await deleteById(req.params.id);
        res.status(204).end()
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
});

// ----------------------------------------------------------------------------------------





module.exports = {
    listingController
}
