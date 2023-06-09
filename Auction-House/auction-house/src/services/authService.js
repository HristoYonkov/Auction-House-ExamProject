// const baseUrl = 'http://localhost:3030/auth'; 
const baseUrl = process.env.NODE_ENV === "production"
? 'https://auction-house-app-api.onrender.com/auth'
: 'http://localhost:3030/auth';

export const onRegister = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
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

export const onLogin = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            return result;
        } else {
            throw new Error(result.error);
        }

    } catch (error) {
        return error;
    }
}

export const getUser = async (userId) => {
    try {
        const response = await fetch(`${baseUrl}/user`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userId)
        });

        const result = await response.json();

        if (response.ok) {
            return result;
        } else {
            throw new Error(result.error);
        }

    } catch (error) {
        return error;
    }
}