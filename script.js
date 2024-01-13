/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  arr
    .filter((dev) => dev.profession == "developer")
    .map((devmap) => console.log(devmap));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((dev) => {
    if (dev.profession == "developer") console.log(dev);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push(
    { id: 16, name: "BHARATHI", age: "30", profession: "TEACHER" },
    { id: 20, name: "jac", age: "24", profession: "developer" },
    { id: 30, name: "kar", age: "26", profession: "admin" },
    { id: 40, name: "joh", age: "40", profession: "developer" }
  );
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((adm) => {
    if (adm.profession != "admin") console.log(adm);
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [
    { id: 101, name: "Alice", age: 25, profession: "Engineer" },
    { id: 202, name: "Bob", age: 32, profession: "Designer" },
    { id: 303, name: "Charlie", age: 28, profession: "Manager" },
    { id: 404, name: "David", age: 22, profession: "Student" },
  ];
  arr = arr.concat(arr2);
  console.log(arr);
}
