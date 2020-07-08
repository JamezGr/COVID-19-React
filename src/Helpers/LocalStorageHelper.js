const LocalStorageHelper = {};

LocalStorageHelper.hasItem = (key) => {
    const localStorage = window.localStorage;
    const itemToFind = localStorage.getItem(key);

    if (itemToFind === null) return false 

    return true
}

LocalStorageHelper.setItem = (key, value) => {
    const localStorage = window.localStorage;
    localStorage.setItem(key, value);
}

LocalStorageHelper.getItem = (key) => {
    const localStorage = window.localStorage;

    return localStorage.getItem(key);
}

LocalStorageHelper.removeItem = (key) => {
    const localStorage = window.localStorage;
    localStorage.removeItem(key);
}

export default LocalStorageHelper;