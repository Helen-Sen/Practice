function compareArrays(arr1, arr2) {
  let matchesNumbers = arr1.filter((num) => arr2.indexOf(num) !== -1);
  console.log(`matches numbers: ${matchesNumbers} `);
  let quantityMatchesNumbers = matchesNumbers.length;
  console.log(`${quantityMatchesNumbers}`);

  let samePositionCount = 0;
  let samePositionNumber = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      samePositionCount++;
      samePositionNumber.push(arr1[i]);
    }
  }
  let nonCorrectPosition = quantityMatchesNumbers - samePositionCount;
  console.log(`same position number: ${samePositionNumber}`);
  console.log(`same position count: ${samePositionCount}`);
  console.log(`non correct position count: ${nonCorrectPosition}`);
}

let arr1 = [5, 7, 3, 1];
let arr2 = [5, 3, 8, 1];
compareArrays(arr1, arr2);

function getBoolsAndCows(arrTarget, arrGuess) {
  let bools = 0;
  let cows = 0;
  arrTarget.forEach((numT, index) => {
    if (arrGuess.indexOf(numT) == index) {
      bools++;
    //   console.log(`bool: ${numT}`);
    } else if (arrGuess.indexOf(numT) > -1) {
      cows++;
    //   console.log(`cow: ${numT}`);
    }
  });
  return [arrGuess, bools, cows];
}

let bc = getBoolsAndCows(arr1, arr2);
console.log(bc)

/*1234 b1 c1
5678 b2 c2
3709 b3 c3

5013 b4 c4

1000 - 2000
2000 - 3000
...
9000 - 9999
-------------------------
interval 5000 - 5999
direction ==> or <===
for(num in interval)
	check if numer is valid
	5012
	5013

0000 - 9999

5923




func isCorrectGuess(newGuess, allPreviousGuesses) {
	for(prevGuess in allPreviousGuesses) {
		bc = getBoolsAndCows(newGuess, prevGuess[0])
		if (bc[1] != prevGuess[1] or bc[2] != prevGuess[2]) {
			return False;
		}
	}
	return True;
}
		*/