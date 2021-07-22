function nonConstructibleChange(coins) {
    // Write your code here.
    coins.sort((a, b) => a - b);
    let currentChangeCreated = 0;
    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
        currentChangeCreated += coin;
    }

    return 1;
}


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


const start_codon = "AUG"
const stop_codon = "STOP"
const codon_to_amino_acid = {
    "AUG": "Met",
    "CAA": "Gln",
    "CAG": "Gln",
    "GGU": "Gly",
    "GCG": "Ala",
    "UUU": "Phe",
    "UUC": "Phe",
    "UGG": "Trp",
    "UAA": stop_codon,
    "UAG": stop_codon,
    "UGA": stop_codon,
}

/*
 * Complete the functions below.
 */

function protein_synthesis_part_one(dna) {

}