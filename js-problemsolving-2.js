// Converting odd number to even number
const addNum =  [ 1, 3, 5, 7, 9 ];
const evenNum = addNum.map(n=> n+1);console.log(evenNum);

// Filtering an array
const tenGetNum =  [33, 50, 79, 78, 90, 101, 30 ];
const tenGetFilltering = tenGetNum.filter(ten => ten %10 === 0);
console.log(tenGetFilltering);
const tenGetNum2 =  [33, 50, 79, 78, 90, 101, 30 ];
const tenGetFilltering2 = tenGetNum2.find(ten => ten %10 === 0);
/*
arr.find() just retur this value those of this value fullfilled given condition and get find first element filled this conditionable element. But filter given all element. here differents of the filter like filter given filled condition all elements but find just return first element are get the find this filled condition
*/
console.log(tenGetFilltering2);

// Add(+) all elements from one array with reduce method
const doAdd = [ 1, 9, 17, 22 ];
const doAddSum = doAdd.reduce((prev, curr) => {
    return prev + curr;
},0)
console.log(doAddSum);

// Add(+) people array in all ages
const peoples = [
    {name: 'Meena',age:20},
    {name: 'Rina',age:15},
    {name: 'SuchoritaMeena',age:22}
];
const peopleAge = [];
for (let i = 0; i < peoples.length; i++) {
    peopleAge.push(peoples[i].age);
};
const ageAdding = peopleAge.reduce((prev,curr)=>{
    return prev + curr;
})
console.log(ageAdding);

// consoling object property with accessing
const student = {
    name: "Fredie",
    age: 26,
};
console.log(student.age);
console.log(student['age']);

// Accessing Objects value
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '95.77 , 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}

console.log(data.location[0].city);

// Get result from json data
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  const {email,address, address:{city, geo:{lat}}, company:{name:coName}} = user;

  console.log(email, address, city, lat, coName);
/* 
  console.log(email);
  console.log(address);
  console.log(city);
  console.log(lat);
  console.log(coName);
  */
