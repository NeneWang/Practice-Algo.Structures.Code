

#!/bin/python3

import math
import os
import random
import re
import sys
from typing import Dict


start_codon: str = "AUG"
stop_codon: str = "STOP"
codon_to_amino_acid: Dict[str, str] = {
    'AUG': "Met", "CAA": "Gln",
    "CAG": "Gln",
    "GGU": "Gly",
    "GCG": "Ala",
    "UUU": "Phe",
    "UUC": "Phe",
    "UGG": "Trp",
    "UAA": stop_codon,
    "UAG": stop_codon,
    "UGA": stop_codon,
    'ATA': 'I', 'ATC': 'I', 'ATT': 'I', 'ATG': 'Met',
    'ACA': 'T', 'ACC': 'T', 'ACG': 'T', 'ACT': 'T',
    'AAC': 'N', 'AAT': 'N', 'AAA': 'K', 'AAG': 'K',
    'AGC': 'S', 'AGT': 'S', 'AGA': 'R', 'AGG': 'R',
    'CTA': 'L', 'CTC': 'L', 'CTG': 'L', 'CTT': 'L',
    'CCA': 'P', 'CCC': 'P', 'CCG': 'P', 'CCT': 'P',
    'CAC': 'H', 'CAT': 'H', 'CAA': 'Gln', 'CAG': 'Gln',
    'CGA': 'R', 'CGC': 'R', 'CGG': 'R', 'CGT': 'R',
    'GTA': 'V', 'GTC': 'V', 'GTG': 'V', 'GTT': 'V',
    'GCA': 'Ala', 'GCC': 'Ala', 'GCG': 'Ala', 'GCT': 'Ala',
    'GAC': 'D', 'GAT': 'D', 'GAA': 'E', 'GAG': 'E',
    'GGA': 'G', 'GGC': 'G', 'GGG': 'G', 'GGT': 'G',
    'TCA': 'S', 'TCC': 'S', 'TCG': 'S', 'TCT': 'S',
    'TTC': 'F', 'TTT': 'F', 'TTA': 'L', 'TTG': 'L',
    'TAC': 'Y', 'TAT': 'Y', 'TAA': '_', 'TAG': '_',
    'TGC': 'C', 'TGT': 'C', 'TGA': '_', 'TGG': 'W',
}

#
# Complete the functions below.
#


def protein_synthesis_part_one(dna):
    protein = ""

    for i in range(0, len(dna), 3):
        codon = dna[i:i + 3]
        protein += codon_to_amino_acid[codon]
    return protein
