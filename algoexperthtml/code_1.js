

competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],

]

results = [0, 0, 1]

console.log(tournamentWinner(competition, results));

function tournamentWinner(competitions, results) {
    
    const scores = {'':0};

    competitions.forEach(competition => {
        const [homeTeam, awayTeam] = competition;
        

        console.log(homeTeam);
        console.log(awayTeam);
    });
    

    return '';
  }