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

export const getOneListing = async (listingId) => {
    const response = await fetch(`${baseUrl}/listing/${listingId}`);
    const result = await response.json();
    return result
};