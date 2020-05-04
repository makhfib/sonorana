function isEmpty(text) {
    if (/\S/.test(text)) {
        return false
    } else {
        return true
    }
}

export default {
    isEmpty,
}