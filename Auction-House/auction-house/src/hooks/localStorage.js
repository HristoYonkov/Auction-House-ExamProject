import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storeData = localStorage.getItem(key)

        return (storeData && storeData !== undefined) ? JSON.parse(storeData) : defaultValue;
    });

    const setLocalStorageValue = (newValue) => {
        if (newValue === undefined) {
            newValue = {}
        }
        newValue.email
            ? newValue = {
                username: newValue.username,
                email: newValue.email,
                _id: newValue._id,
                accessToken: newValue.accessToken
            }
            : newValue = {}
        localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue);
    }

    return [value, setLocalStorageValue];
}

