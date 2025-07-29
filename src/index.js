const fs = require("fs");
const path = require("path");

const slangData = JSON.parse(fs.readFileSync(path.join(__dirname, "../dictionary/slangs.json"), "utf-8"));

/* RegEx Explaination:

    /[^\w\s]|_/g
    \w = word characters = letters (a-z, A-Z), numbers (0-9), and underscore _
    \s = whitespace = spaces, tabs, newlines
    ^ inside [] means “not these"

    So: [^\w\s] = any character that is NOT a letter, number, space, or underscore

    |_
    This part explicitly removes the underscore _, because \w normally includes _
    So the regex says: remove anything that is not a word character or space or is an underscore.
   🔹 g flag
    Stands for global, meaning apply this replacement throughout the entire string.
*/

const isSlang = (text) => {
    function cleanText(text) {
        return text.replace(/[^\w\s]|_/g, '')
    }
    const input = text.toLowerCase();
    const cleanInput = cleanText(input)

    for (let i = 0; i < slangData.length; i++) {
        const pattern = new RegExp(`\\b${slangData[i]}\\b`, "i");
        if (pattern.test(cleanInput)) {
            return true;
        }
    }
    return false
}

const makeClean = (text) => {
    let rawInp = text
    const input = text.toLowerCase();

    for (let i = 0; i < slangData.length; i++) {
        const pattern = new RegExp(`\\b${slangData[i]}\\b`, "gi");

        const match = pattern.test(input)

        if (match) {
            rawInp = rawInp.replace(pattern, (match) => {
                return "*".repeat(match.length)
            })
        }
    }
    return rawInp.replace(/\s+/g, ' ').trim();
}

module.exports = {
    isSlang,
    makeClean
};