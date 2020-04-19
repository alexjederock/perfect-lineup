

function sumSalaries(lineup) {
  return lineup.reduce((acc, salaries) => {
    return acc + salaries.salary
  }, 0)
}
function checkSalarySize(lineup) {
  if (sumSalaries(lineup) > 45000) {
    return false
  }

  return true
}

function checkTeam(lineup) {
  let team = lineup.reduce((acc, teams) => {
    acc[teams.teamId] = acc[teams.teamId] === undefined ? 1 : acc[teams.teamId] + 1

    return acc
  }, {})

  return Object.values(team).every(id => id <= 2)
}

function checkGame(lineup) {
  let team = lineup.reduce((acc, teams) => {
    acc[teams.gameId] = acc[teams.gameId] === undefined ? 1 : acc[teams.gameId] + 1

    return acc
  }, {})

  return Object.values(team).every(id => id <= 3)
}



function checkPosition(lineup) {
  let team = lineup.reduce((acc, teams) => {
    acc[teams.position] = acc[teams.position] === undefined ? 1 : acc[teams.position] + 1

    return acc
  }, {})

  if (team.OF !== 3) return false
  	delete team.OF
  	team = Object.values(team)

  	return team.every(position => position === 1) && team.length === 6
}


function validateLineup(lineup) {
  return checkTeam(lineup) && checkSalarySize(lineup) && checkGame(lineup) && checkPosition(lineup)
}

module.exports = validateLineup

