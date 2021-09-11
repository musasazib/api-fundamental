// JavaScript Object Natation = JSON

const user = { id: 11, name: 'Groin Ali', job: 'actor' };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    name: 'Alai Store',
    address: 'Rancid Road',
    profit: 15000,
    products: ['Laptop', 'Mobile', 'Pepsi'],
    owner: {
        name: 'Alai Baht',
      profession: 'Actor'  
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(converted.owner);