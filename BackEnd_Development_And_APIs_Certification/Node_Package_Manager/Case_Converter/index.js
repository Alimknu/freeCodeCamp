function getUpperCase(str) {
    return str.toUpperCase();
}

function getLowerCase(str) {
    return str.toLowerCase();
}

function getSentenceCase(text) {
    text = getUpperCase(text[0]) + getLowerCase(text.slice(1));

    return text;
}

function getProperCase(text) {
    let words = text.split(" ");
    let proper = [];

    for (let word of words) {
        proper.push(getSentenceCase(word));
    }

    return proper.join(" ");
}

module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase,
};