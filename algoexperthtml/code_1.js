

competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],

]

results = [0, 0, 1]

console.log(tournamentWinner(competition, results));

function tournamentWinner(competitions, results) {
    // Write your code here.
    const [homeTeam, awayTeam] = competitions[0];

    console.log(homeTeam);
    console.log(awayTeam);
    return '';
  }