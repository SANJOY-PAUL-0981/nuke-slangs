# nuke-slangs
A simple JavaScript utility to detect and clean slang words from text mainly focused on English and Indian Origin Slangs.

## APIs
- `isSlang(text)`
- `makeClean(text)`

### `isSlang()`
```bash
const { isSlang } = require("nuke-slangs")

console.log(isSlang("you are an asshole"));
console.log(isSlang("abe chutiye"));
console.log(isSlang("Hi how are you"));
``` 

### `makeClean()`
```bash
const { makeClean } = require("nuke-slangs")

console.log(makeClean("dumb man"));
console.log(makeClean("abe chutiye"));
```