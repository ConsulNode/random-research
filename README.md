# Research | Random number generation based on block hashes #

**Problem:**
How to make random number generation transparent in a blockchain project.

**Hypothesis:**
Hash of a current for the moment of choice block can be used for random number generation.

**Steps:**
* Take 1 million blocks and get their hashes
* Take 2-byte value without 'Mh' prefix from each hash and convert it to decimal number (we take first 4 symbols after the prefix in this example)
* Generate an array where index is participant's ordinal number and value is incremental counter
* Go through processed hashes and increment counter for the index which equals the remainder
`remainder = processedHash % numberOfParticipants`
* Compare obtained array with the array where random number generator is used instead of operations with hashes

**Conclusion:**
Hashes can be used for generating random numbers.
Comparison:
*X-Axis - participant, Y-Axis - counter*

![Comparative graph](https://github.com/ConsulNode/random-research/blob/master/graph.jpg)
