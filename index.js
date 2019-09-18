const fs = require('fs');

const participants = 1000;
// Get hashes from the prepared file
const hashes = fs.readFileSync('./hashes.txt').toString().split("\n");

let fromHash = [];
let fromRng = [];
// Initialize counters
for (let i = 0; i < participants; i++) {
  fromHash[i] = 0;
  fromRng[i] = 0;
}

for (let i = 0; i < hashes.length; i++) {
  const hexNumber = parseInt(hashes[i].substring(2, 6), 16);
  const remainder = hexNumber % participants;
  // Increment counter for hash option
  fromHash[remainder] += 1;

  const rng = Math.floor(Math.random() * participants);
  // Increment counter for rng option
  fromRng[rng] += 1;
}

/**
 * Compare both counters for each participated number
 */
