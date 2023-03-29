const baseUrl = 'http://localhost:3030/auth';

export const authLogin = async (data) => {
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

export const authRegister = async (data) => {
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