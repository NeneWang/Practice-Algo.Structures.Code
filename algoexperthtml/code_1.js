competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],

]
// competition = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"],

// ]

competition = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
]

results = [0, 1, 1]

console.log(tournamentWinner(competition, results));


function tournamentWinner(competitions, results) {

    const scores = {
        '': 0
    };
    const length = results.length;
    for (i = 0; i < length; i++) {
        const competition = competitions[i];
        const [homeTeam, awayTeam] = competition;

        addIfExists(scores, results[i] == 1 ? homeTeam : awayTeam);
    };

    const getMax = (a, b) => {
        return Math.max(a, b);
    };
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value)
    }
    return getKeyByValue(scores, Object.values(scores).reduce(getMax, -Infinity));
}

function addIfExists(score, winningTeam) {
    if (score[winningTeam] != null) {
        score[winningTeam] += 1;
    } else {
        score[winningTeam] = 1;
    }
    return score;
}


function branchSums(root) {
    // Write your code here.
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;
    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);

}