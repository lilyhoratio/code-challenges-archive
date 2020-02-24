/*
Since there are so few people alive, we’re trying to play matchmaker for our favorite characters. Given the fluid nature of relationships, we need a way to tell if two people share a common house or ancestor in their lineage. 

               House Stark
                    |
House Tully      Rickard
   /   \          /  \
Lysa  Catelyn   Ned Lyanna
 |       \      /      |
Robin      Sansa      Jon

familyMembers1 = [
    (‘House Tully’, ‘Lysa’), (‘Lysa’, ‘Robin’), (‘House Tully’, ‘Catelyn’), (‘Catelyn’, ‘Sansa’), (‘Ned’, ‘Sansa’), (‘Rickard’, ‘Ned’),
    (‘House Stark’, ‘Rickard’), (‘Rickard’, ‘Lyanna’), (‘Lyanna’, ‘Jon’)
]

Write a function that takes the graph, as well as two of the individuals in our dataset as inputs and returns true if they share at least one ancestor or house in their lineage.

Sample input and output:

isRelated(familyMembers1, ‘Sansa’, ‘Jon’) => true
isRelated(familyMembers1, ‘Sansa’, ‘Robin’) => true
isRelated(familyMembers1, ‘Catelyn’, ‘Ned’) => false
isRelated(familyMembers1, ‘Rickard’, ‘Jon’) => true
isRelated(familyMembers1, ‘House Tully’, ‘House Stark’) => false

*/

let familyMembers1 = [
  ["House Tully", "Lysa"],
  ["Lysa", "Robin"],
  ["House Tully", "Catelyn"],
  ["Catelyn", "Sansa"],
  ["Ned", "Sansa"],
  ["Rickard", "Ned"],
  ["House Stark", "Rickard"],
  ["Rickard", "Lyanna"],
  ["Lyanna", "Jon"]
];

// [parent, child]

function familyTree(familyGroups) {
  const childrenParent = {};

  for (let i = 0; i < familyGroups.length; i++) {
    let parent = familyGroups[i][0]; // Ned
    let child = familyGroups[i][1]; // Arya

    childrenParent[parent] = []; // add parent as key

    if (child in childrenParent) {
      childrenParent[child].push(parent);
    } else {
      childrenParent[child] = [parent];
    }
  }

  return childrenParent;
}

function sharesAncestry(familyMembers, personOne, personTwo) {
  let ancestryTree = familyTree(familyMembers);

  let toCheck1 = [personTwo, personOne];
  let toCheck2 = [personTwo];
  let anc1 = new Set();
  let anc2 = new Set();

  // while tocheck isn't empty, pop person -> bring parents. Add parents to set, and tocheck
  while (toCheck1) {
    let current = toCheck1.pop();

    let parents = Object.values(ancestryTree[current]);

    for (let parent in parents) {
      // [parentOne, parentTwo]
      console.log(parent);
      anc1.add(parent);
      toCheck1.push(parent);
    }
  }
  console.log(toCheck1, anc1);
}

console.log(sharesAncestry(familyMembers1, "Sansa", "Jon"));
