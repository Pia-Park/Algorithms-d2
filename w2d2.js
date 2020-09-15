const repeatNumbers = function(data) {
  // Put your solution here
return data.map(([n, count]) => n.toString().repeat(count)).join(',')
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));






//   let result = "";
//   for(i = 0; i < data.length; i++){
//       for(c = 0; c < data[i][1]; c++){
//           result += data[i][0];
//       }
//       return result;
//   }

// };