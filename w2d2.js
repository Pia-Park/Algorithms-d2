const repeatNumbers = function(data) {
  // Put your solution here
return data.map(([n, count]) => n.toString().repeat(count)).join(',')
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));

