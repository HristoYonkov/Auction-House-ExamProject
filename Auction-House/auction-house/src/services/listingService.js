const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
    try {
        const response = await fetch(`${baseUrl}/listing`);
        const result = await response.json();
        return result
    } catch (error) {
        return [];
    }
};

export const getOneListing = async (listingId) => {
    const response = await fetch(`${baseUrl}/listing/${listingId}`);
    const result = await response.json();
    return result
};

export const create = async (listing, token) => {

    try {
        const response = await fetch(`${baseUrl}/listing`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            },
            body: JSON.stringify(listing)
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {

            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
};

export const editListing = async (listing, token) => {
    try {
        const response = await fetch(`${baseUrl}/listing/${listing._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            },
            body: JSON.stringify(listing)
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
};

export const bidListing = async (listingId, token, price) => {
    try {
        const response = await fetch(`${baseUrl}/listing/bid/${listingId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            },
            body: JSON.stringify(price)
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.err);
        }
    } catch (error) {
        return error
    }
};

export const getUserListings = async (token) => {
    const response = await fetch(`${baseUrl}/listing/my-listings`, {
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
    });
    const result = await response.json();
    return result;
}

export const followListing = async (listingId, token) => {
    try {
        const response = await fetch(`${baseUrl}/listing/follow/${listingId}`, {
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
}

export const getUserFollows = async (token) => {
    try {
        const response = await fetch(`${baseUrl}/listing/my-follows`, {
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error;
    }
}

export const unfollowListing = async (listingId, token) => {
    try {
        const response = await fetch(`${baseUrl}/listing/unfollow/${listingId}`, {
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
};

export const endAuction = async (listingId, token) => {
    try {
        const response = await fetch(`${baseUrl}/listing/end-auction/${listingId}`, {
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
}

export const deleteListing = async (listingId, token) => {
    try {
        const response = await fetch(`${baseUrl}/listing/${listingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
}