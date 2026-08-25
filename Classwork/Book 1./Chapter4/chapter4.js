//Object 

// let cat = {
//     "legs": 3,
//     "name": "Harmoney",
//     "color": "Tortoiseshell"
// }
// console.log(cat);

// let cat ={
//     legs : 3,
//     name : "Harmoney",
//     color: "Tortoiseshell"
// }
// console.log(cat);

// let cat = {
//     legs : 3,
//     "full_name" : "Harmoney",
//     color: "Tortoiseshell"
// }
// console.log(cat);
// console.log(cat["legs"]);
// console.log(cat.legs);
// console.log(cat.full_name);
// console.log(Object.keys(cat));

// let dog = {name: "Pancake", age: 6, color: "white",bark: "Yip yap"};
// // let cat={name: "Harmony",age :8 , color: "tortoiseshell"};
// // console.log(Object.keys(dog));
// // console.log(Object.keys(cat));

// let cat ={};
// cat["legs"] =3;
// cat["name"]= "Harmony";
// cat.color="Tortoiseshell";
// cat.legs = 4;
// console.log(cat);

// console.log(dog.isBrown);

// let dinosaurs =[
//     {name: "Tyrannosaurus Rex", period: "Late Cretaceous"},
//     {name: "Stegosaurus",period:"Late Jarrasic"},
//     {name: "Plateosaurus",period: "Triassic"}
// ];

// console.log(dinosaurs[0]);
// console.log(dinosaurs[0].name);
// console.log(dinosaurs[1].period);
// console.log(dinosaurs[2].period);


// let anna = {name: "Anna", age: 11, luckyNumbers:[2,4,8,16]};
// let dave = {name:"Dave", age : 5, luckyNumbers:[3,9,40]};
// let kate ={name: " Kate", age: 9, luckyNumbers:[1,2,3]};

// let friends = [anna, dave, kate ];

// console.log(friends[1].luckyNumbers[2]);
// console.log(friends[2].name)
// console.log(friends[0].luckyNumbers[2]);
// console.log(friends[2].luckyNumbers[0]);
// console.log(friends[0].luckyNumbers[0]);

// let owedMoney ={};
// owedMoney.Jimmy =5;
// owedMoney.Anna = 7;
// console.log(owedMoney);
// owedMoney.Jimmy += 3;
// console.log(owedMoney);
// owedMoney.Anna -=7;

var movies = {
"Finding Nemo": {
releaseDate: 2003,
duration: 100,
actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
format: "DVD"
},
"Star Wars: Episode VI - Return of the Jedi": {
releaseDate: 1983,
duration: 134,
actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
format: "DVD"
},
"Harry Potter and the Goblet of Fire": {
releaseDate: 2005,
duration: 157,
actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
format: "Blu-ray"
}
};

let findingNemo = movies["Finding Nemo"];
console.log(findingNemo);
console.log(findingNemo.duration);
console.log(findingNemo.format);

let cars = {
    releaseDate: 2006,
    duration: 117,
    actors:[
        "Owen Wilson",
        "Bonnie Hunt",
        "Pual Newman"
    ],
    format : "Blu-ray"
};
movies["cars"] = cars;
console.log(movies);
console.log(Object.keys(movies));