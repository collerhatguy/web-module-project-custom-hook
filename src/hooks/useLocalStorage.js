import { useState, useEffect } from "react";

const useLocalStorage = (key, value) => {
    const [storedValue, setStoredValue] = useState(() => {
        const storage = localStorage.getItem(key)
        return storage ? JSON.parse(storage) : value;
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [storedValue])
    return [storedValue, setStoredValue]
}

export default useLocalStorage;