const fs = require("fs");
const { serializeString } = require("./serializeString");
const { makeTree } = require("./makeTree");
const { setCodes } = require("./setCodes");
const { getCodes } = require("./getCodes");
const { encode } = require("./encode");
const { decode } = require("./decode");

try {
  const str = fs.readFileSync(process.argv[3]).toString();
  if (process.argv[2] == "code") {
    const a = encode(str, setCodes(makeTree(serializeString(str))));
    const result = a[0];
    const codeString = a[1];
    fs.writeFileSync(process.argv[4], codeString);
    fs.writeFileSync(process.argv[5], result);
  } else if (process.argv[2] == "decode") {
    const codes = fs.readFileSync(process.argv[4]).toString();
    fs.writeFileSync(process.argv[5], decode(str, getCodes(codes)));
  } else {
    console.log("Enter code or decode");
  }
} catch {
  console.log(`Try node huffman.js code input_file table_file output_file`);
}
