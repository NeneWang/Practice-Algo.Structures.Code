competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],

]

results = [0, 0, 1]

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
        // addIfExists(scores, awayTeam);

        console.log(homeTeam);
        console.log(awayTeam);
        console.log(scores)
    };

    // Get map with longest mapped item
    const getMax = (a, b) => Math.max(a, b);
    return Object.keys(results).reduce(getMax, -Infinity);
}

function addIfExists(score, winningTeam) {
    if (score[winningTeam] != null) {
        score[winningTeam] += 1;
    } else {
        score[winningTeam] = 1;
    }
    return score;
}