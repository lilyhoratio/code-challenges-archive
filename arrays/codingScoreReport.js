// Your Mission

// As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:

// Poor: 300-599
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+
// Calculate how many users are there in each level, then return a list of strings where each string represents a level and a number of users within that level, formatted like LevelName - Number. The levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.

// For example, if you had this input...

//   [330, 723, 730, 825]
// ...then you should return the following:

// [
//   'Good - 2',
//   'Elite - 1',
//   'Poor - 1'
// ]

function codingScoreReport(scores) {
  const frequencyCount = {};

  for (let score of scores) {
    if (score >= 300 && score <= 599) {
      frequencyCount["Poor"]
        ? (frequencyCount["Poor"] += 1)
        : (frequencyCount["Poor"] = 1);
    } else if (score >= 600 && score <= 699) {
      frequencyCount["Fair"]
        ? (frequencyCount["Fair"] += 1)
        : (frequencyCount["Fair"] = 1);
    } else if (score >= 700 && score <= 749) {
      frequencyCount["Good"]
        ? (frequencyCount["Good"] += 1)
        : (frequencyCount["Good"] = 1);
    } else if (score >= 750 && score <= 799) {
      frequencyCount["Excellent"]
        ? (frequencyCount["Excellent"] += 1)
        : (frequencyCount["Excellent"] = 1);
    } else if (score >= 800) {
      frequencyCount["Elite"]
        ? (frequencyCount["Elite"] += 1)
        : (frequencyCount["Elite"] = 1);
    }
  }

  const scoresCount = [];

  const scoresRank = {
    Elite: 5,
    Excellent: 4,
    Good: 3,
    Fair: 2,
    Poor: 1
  };

  for (let score in frequencyCount) {
    scoresCount.push([score, frequencyCount[score], scoresRank[score]]);
  }

  console.log(scoresCount);

  return scoresCount.sort((a, b) => {
    return b[1] - a[1] || b[2] - a[2];
  });

  // const finalScoresCount = [];

  // for (let score of scoresCount) {
  //   console.log(score);
  // }
}
console.log(codingScoreReport([330, 723, 730, 825]));
