console.log('Hello World from external JS file');

let myNumber = 10;
console.log("Number before changed : " + myNumber);

 myNumber = 20;
 console.log("Number after changed : " +  myNumber);
 

 let thisIsVariableShouldBeWritter = true;

console.log(12 === 12);
console.log(12 == "12");
//console.log(12 === "12");

let a = 11

console.log((a < 20) && (a > 10));

console.log(a === 11)
console.log(a != 11)

// tipe data

// undefined, null, string, array, number, boolean, object, 

let c = 10;
let b = 20;

console.log(c = c - b)
console.log(b = c + b);
console.log(c = b - c);

console.log(c)
console.log(b)


  let myBiodata = {
    my_name: "Raka Admiral Abdurrahman",
    gender: 'M',
    hobbies: ["Coding", "Cycling", "Swimming"],
    fav_foods: [
    {
    restaurant_name: "RM Padang Sederhana",
    menu: "Rendang"
    },
    {
    restaurant_name: "KFC",
    menu: "OR Burger"
    }
    ],
    age: 17,
    isSingle: false
    }

    
    console.log(myBiodata);

    function name(name) {
      return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('.');
    }

    console.log(name("Sam Haris"));