

export const loadState = (key, defaultVal) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return defaultVal;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return defaultVal;
    }
};

export const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch {
        // ignore write errors
    }
};
