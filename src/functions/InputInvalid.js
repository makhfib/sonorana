function isEmpty(text) {
    if (/^\s*$/.test(text)) {
        return true
    } else {
        return false
    }
}

export default {
    isEmpty,
}