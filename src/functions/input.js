export function isEmpty(str) {
    if(str === undefined || str === null) {
        return true
    } // str.trim crashes when applied to undefined or null
    return !str.trim().length;
}