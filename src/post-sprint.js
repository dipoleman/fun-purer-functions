// Scenario 1
const phoneBook = {
    tom: '0731415926',
    izzi: '0727182920',
    paulr: '079012312',
  };
  
  const userName = 'tom';
  const phoneNumber = phoneBook[userName];
  
  console.log(
    `Ahh hello there ${userName}, looks like your phone number is ${phoneBook[userName]}`
  );
// Scenario 3
const jumbledAlpha = ['b', 'c', 'a', 'd'];
function sortList(arr) {
  const sortedArr = arr.sort();
  return sortedArr;
}

const sortedAlpha = sortList(jumbledAlpha);
console.log(sortedAlpha === jumbledAlpha);
// true as truthy of  an array [....] is true