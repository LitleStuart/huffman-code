const fs = require("fs");
const { serializeString } = require("./serializeString");
const { makeTree } = require("./makeTree");
const { setCodes } = require("./setCodes");
const { getCodes } = require("./getCodes");
const { encode } = require("./encode");
const { decode } = require("./decode");
const str = fs.readFileSync(process.argv[3]).toString();

if (process.argv[2] == "encode") {
  fs.writeFileSync(
    process.argv[4],
    encode(str, setCodes(makeTree(serializeString(str))))
  );
} else if (process.argv[2] == "decode") {
  fs.writeFileSync(process.argv[4], decode(str, getCodes(str)));
} else {
  console.log("Incorrect arguments");
}
