var customers = [
  {
    id: 1,
    first_name: "Gisele",
    last_name: "Norquay",
    email: "gnorquay0@mapy.cz",
    bitcoin_address: "1CysX3bL3EqV4fEEzgrhhRyMwDNCoSduCD"
  },
  {
    id: 2,
    first_name: "Abram",
    last_name: "Candelin",
    email: "acandelin1@cafepress.com",
    bitcoin_address: "1Fn6SApcGLTLJPxeSothGekqZDpsS9yz9W"
  },
  {
    id: 3,
    first_name: "Clarance",
    last_name: "Erett",
    email: "cerett2@multiply.com",
    bitcoin_address: "1FRAfJeAswuZMqfYnUZeWr9GyLHK4jk74"
  },
  {
    id: 4,
    first_name: "Mireille",
    last_name: "Mattiuzzi",
    email: "mmattiuzzi3@npr.org",
    bitcoin_address: "192BUVYj1nSpjtjcpc5bVEPfBF2hVs2Mq6"
  },
  {
    id: 5,
    first_name: "Brandais",
    last_name: "Fosdick",
    email: "bfosdick4@redcross.org",
    bitcoin_address: "15LqYGZLvA9znt6GYePh6Pm47cFsczLTCV"
  },
  {
    id: 6,
    first_name: "Micheil",
    last_name: "Igounet",
    email: "migounet5@pcworld.com",
    bitcoin_address: "1Kd9LBx59cGZXMQ1YsyppZaNX5umWjBxeP"
  },
  {
    id: 7,
    first_name: "Sheba",
    last_name: "Bwye",
    email: "sbwye6@slideshare.net",
    bitcoin_address: "1HToZvUD2KMYJdiV94S7dNzDBfccbKwXsh"
  },
  {
    id: 8,
    first_name: "Melli",
    last_name: "Chinge de Hals",
    email: "mchingedehals7@delicious.com",
    bitcoin_address: "1QFDGuHCnZtUUb3prTuWYK15inYmimYmwL"
  },
  {
    id: 9,
    first_name: "Edita",
    last_name: "Houldin",
    email: "ehouldin8@flavors.me",
    bitcoin_address: "157v5xb9qjDQKp85V3ZMXdhudX8MNbm3TL"
  },
  {
    id: 10,
    first_name: "Inness",
    last_name: "Durrad",
    email: "idurrad9@indiatimes.com",
    bitcoin_address: "1ErLV7m1ARgf9Y1mbWWqnEiFtZnDyrjzUP"
  }
];

var emails1 = customers.map(obj => {
  return obj.email
})
var emails2 = _.pluck(customers, 'email')

console.log(emails1)
console.log(emails2)


// Create an array of all email addresses
// first without using underscore's pluck method, then with it.

var inviteList1 = ["Ed", "Fanny", "Mildred", "Alice", "James"];
var inviteList2 = ["Jake", "Mildred", "Jimmy", "Ed", "Franklin"];

// var invite1 = [];
// for(var i=0;i<inviteList1.length;i++){
//   for (j=inviteList2.length-1;j>=0;j--){
//     if(inviteList2[j]===inviteList1[i]){
//       invite1 = inviteList2.splice(inviteList2[j],1)
  
//     }
   
//   }
// }

var invite2 = _.union(inviteList1, inviteList2);

// console.log(invite1)
console.log(invite2)

// Uh oh! We are having a party and two invite lists were created.
// Create a duplicate-free list of the people we want at the party without underscore's ._union().
// Then create another list that removes all duplicates using _.union().

var friendsOfJim = [
  "Tom",
  "Carina",
  "Rex",
  "Jane",
  "Greg",
  "Nancy",
  "Alison",
  "Goose"
];
var friendsOfBetty = [
  "Burt",
  "Dave",
  "Tina",
  "Biggie",
  "Rex",
  "Carina",
  "Victoria",
  "Tom",
  "Nancy"
];

var mutual1 = [];
for(var i=0;i<friendsOfJim.length;i++){
  for (j=friendsOfBetty.length-1;j>=0;j--){
    if(friendsOfBetty[j]===friendsOfJim[i]){
      mutual1.push(friendsOfBetty[j])
    }
  }
}
var mutual2 = _.intersection(friendsOfBetty, friendsOfJim);

console.log(mutual1)
console.log(mutual2)

// Jim and Betty are having a party, but they only want to invite mutual friends.
// Create an array of mutual friends. First without using underscore.
// Then using underscores _.intersection().

var purchases = [
  {
    company: "Dunder Mifflin",
    order: 1000
  },
  {
    company: "Staples",
    order: 400
  },
  {
    company: "Dunder Mifflin",
    order: 200
  },
  {
    company: "Dunder Mifflin",
    order: 900
  },
  {
    company: "Dunder Mifflin",
    order: 1800
  },
  {
    company: "Staples",
    order: 1200
  },
  {
    company: "Staples",
    order: 2400
  },
  {
    company: "Dunder Mifflin",
    order: 5000
  }
];

var staples = []
var dm = []

for(var i=0; i<purchases.length;i++){
  if (purchases[i]['company']==="Dunder Mifflin"){
    dm.push(purchases[i])
  }
  else if (purchases[i]['company']==="Staples"){
    staples.push(purchases[i])
  }
}

var orders2 = _.groupBy(purchases, 'company');

console.log('staples', staples, 'dm', dm)
console.log(orders2)


// First, group the purchases by company without underscore
// then do it again using _.groupBy()
