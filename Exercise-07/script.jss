let noun = ["heart", "eyes", "brain", "smile"]
let adjective1 = ["rapidly", "quickly", "unexpectedly", "tremendously"]
let adjective2 = ["suddenly", "abruptly", "halts", "stops", "wrinkles"]
let verb = ["arise", "shake", "shine", "shatter", "breach"]
let adjective3 = ["melted", "creamy", "dense", "delicious", "dreamy"]

const RandomNoun = Math.floor(Math.random() * noun.length);
const RandomAdjective1 = Math.floor(Math.random() * adjective1.length);
const RandomAdjective2 = Math.floor(Math.random() * adjective2.length);
const RandomVerb = Math.floor(Math.random() * verb.length);
const RandomAdjective3 = Math.floor(Math.random() * adjective3.length);

let sentence = `My ${RandomNoun, noun[RandomNoun]} jumps ${RandomAdjective1, adjective1[RandomAdjective1]} and ${RandomAdjective2, adjective2[RandomAdjective2]}, when I see the sun ${RandomVerb, verb[RandomVerb]} like the sharp taste of ${RandomAdjective3, adjective3[RandomAdjective3]} cheese`

document.write(`My ${RandomNoun, noun[RandomNoun]} jumps ${RandomAdjective1, adjective1[RandomAdjective1]} and ${RandomAdjective2, adjective2[RandomAdjective2]}, when I see the sun ${RandomVerb, verb[RandomVerb]} like the sharp taste of ${RandomAdjective3, adjective3[RandomAdjective3]} cheese`)