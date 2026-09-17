// num 1
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

// num 2
function isPalindrome(str) {
  let res = str.toLowerCase();
  let resTrim = res.replace(/ /g, "");
  let a = 0;
  let b = resTrim.length - 1;
  while (a < b) {
    // console.log(resTrim[a], resTrim[b]);
    if (resTrim[a] !== resTrim[b]) {
      return false;
    }
    a++;
    b--;
  }
  return true;
}
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true

// num 3
function areAnagrams(str1, str2) {
  let str1Trim = str1.replace(/ /g, "");
  let str2Trim = str2.replace(/ /g, "");
  let tab1 = str1Trim.split("");
  let tab2 = str2Trim.split("");

  if (tab1.length !== tab2.length) {
    return false;
  }
  for (i = 0; i < tab1.length; i++) {
    let ok = false;
    // console.log(i);
    for (j = 0; j < tab2.length; j++) {
      // console.log("j", j);
      if (tab1[i] === tab2[j]) {
        tab2.splice(j, 1);
        ok = true;
        break;
        // console.log(tab2);
      }
    }
    if (ok === false) {
      return false;
    }
  }
  return true;
}
console.log(areAnagrams("listen", "silent")); //true
console.log(areAnagrams("listren", "silent")); //false
console.log(areAnagrams("liste", "silent")); //false
console.log(areAnagrams("lssten", "silent")); //false

// num4
// pas encore prête pour ça

// num 5
// sortArray ne fonctionne pas
function sortArray(arr) {
  let triTab = [];

  while (arr.length > 0) {
    let idxMin = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[idxMin]) {
        idxMin = i;
      }
    }
    triTab.push(arr[idxMin]);
    arr.splice(idxMin, 1);
  }
}

function findMax(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      k = arr[i];
    }
  }
  return k;
}
console.log(sortArray([3, 1, 4, 1, 5, 9, 2]));
console.log(findMax([3, 1, 4, 1, 5, 23, 20]));

// num 6
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Phone", price: 699, category: "Electronics" },
  { id: 3, name: "Desk", price: 299, category: "Furniture" },
  { id: 4, name: "Chair", price: 199, category: "Furniture" },
  { id: 5, name: "Monitor", price: 299, category: "Electronics" },
];

function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

function getAveragePrice(products) {
  const prodMap = products.map((product) => product.price);
  let somme = 0;
  for (let i of prodMap) {
    somme += i;
  }
  let moyenne = somme / prodMap.length;
  return console.log(moyenne);
}

console.log(filterByCategory(products, "Electronics")); // [ { id: 1, ... }, { id: 2, ... }, { id: 5, ... } ]
getAveragePrice(products); // 499
// getMostExpensive(products); // { id: 1, name: "Laptop", ... }
// groupByCategory(products); //{ Electronics: [ {...}, {...}, {...} ],Furniture: [ {...}, {...} ]}
