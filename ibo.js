/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


//function for getting the count of each product along with its name

let obj = {};

const getUniqueProductCount = (arr) => {
  arr.map((e) => {
    obj[e.productName] === undefined ?
      obj[e.productName] = 1 :
      obj[e.productName] += 1
  })
  return obj;
}
let product_Count = getUniqueProductCount(listOfProducts);
console.log(product_Count);


//Getting products along with there total quantity
let obj1 = {};

const getUniquePrducts = function(arr) {

  let ans = arr.reduce(function(prev, elem) {

    if (obj1[elem.productName] === undefined) {

      obj1[elem.productName] = elem;

      prev.push(obj1[elem.productName])

    } else

      obj1[elem.productName].quantity += obj1[elem.productName].quantity;

    return prev;

  }, [])

  return ans;

}
console.log(getUniquePrducts(listOfProducts));
