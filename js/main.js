// const greet=function(name){
//     console.log(`Salom ${name}`)
// };

// greet("Komol")

// 1-vazifa
// function sumOfDigit(str) {
//   let sum = 0;
//   const len1 = str.length;
//   for (let i = 0; i < len1; i++) {
//     let a = parseInt(str[i]);
//     if (isNaN(a) != true) {
//       sum += a;
//     }
//   }
//   return sum;
// }
// console.log(sumOfDigit("abc123def45"));

// 2-vazifa
function teskari(soz = " ") {
  let matn = "";
  const len = soz.length;
  for (let i = len-1; i >= 0; i--) {
    matn += soz[i];
  }
  return matn;
}
console.log(teskari("Salom"));
// -----------------------------------------
// function teskari(soz = " ") {
//   let matn=[]
//   const len = soz.length
//   for (let i = len; i >= 0; i--){
//     matn.push(soz[i])
//   }
//   matn=matn.join("")
//   return matn
// }
// console.log(teskari("Salom"));
