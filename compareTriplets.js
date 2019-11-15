//https://www.hackerrank.com/challenges/a-very-big-sum/problem?h_r=profile

function compareTriplets(a, b) {
    let endArray = [];
    let countA = 0;
    let countB = 0;

    for (let i = 0; i < b.length; i++) {
        if (a[i] > b[i]) {
            countA++;
        }
        if (a[i] < b[i]) {
            countB++;
        }
    }
    return [countA, countB];
}
