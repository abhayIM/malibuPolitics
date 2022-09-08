export const generateRandomNumber = (num) => {
  const rNo = Math.floor(Math.random() * num);
  console.log("generating", rNo);
  return rNo;
};

export const sumOfEven = (n) => {
  let sum = "";
  let i = 1;
  let count = 1;

  while (i <= n) {
    let j = 1;
    while (j <= n) {
      // sum += "*";
      sum += j * i;
      count = count + 1;

      j++;
    }
    sum += "\n";
    i++;
  }
  return sum;
};

let n = 5; // row or column count
// defining an empty string
let string = "";

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n - i; j++) {
    // internal loop
    //string += "*"; //for star patern
    string += i; //for number pattern
  }
  // newline after each row
  string += "\n";
}
