const fs = require("fs");
const { serializeString } = require("./serializeString");
const { makeTree } = require("./makeTree");
console.log(makeTree(serializeString("aaaabbbccd")));
