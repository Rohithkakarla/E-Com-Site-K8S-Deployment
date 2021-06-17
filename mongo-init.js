/*db.createUser(
  {
    user: 'root',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'ecom-db' }],
  }
);*/
db.createCollection('category');
db.createCollection('products');
db.createCollection('cart');
db.createCollection('users');

db.category.insert(
  [
    {
      "_id": "607e6410c7a8fe2f6bf6ef9b",
      "name": "Vegetables"
    },
    {
      "_id":"607e641bc7a8fe2f6bf6ef9c",
      "name": "Fruits"
    },{
      "_id":"607e642bc7a8fe2f6bf6ef9d",
      "name": "Dairy Items"
    },
    {
      "_id": "607e6435c7a8fe2f6bf6ef9e",
      "name": "Meat"
    },
    {
      "_id": "607e6442c7a8fe2f6bf6ef9f",
      "name": "Personal Care"
    },
    {
      "_id": "607e6455c7a8fe2f6bf6efa0",
      "name": "Household Essentials"
    }
  ],
  { ordered: false }
)

db.products.insert(
  [
    {
      "_id": "607e652fc7a8fe2f6bf6efa1",
      "name": "Onions",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "15"
    },{
      "_id": "607e6545c7a8fe2f6bf6efa2",
      "name": "Ladies Finger",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "20"
    },{
      "_id":
"607e657bc7a8fe2f6bf6efa3"
,
      "name": "Garlic",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "50"
    },{
      "_id":
"607e6597c7a8fe2f6bf6efa4"
,
      "name": "Mushrooms",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "100"
    },{
      "_id":
"607e65bac7a8fe2f6bf6efa5"
,
      "name": "Bottle gourd",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "20"
    },{
      "_id":
"607e65d5c7a8fe2f6bf6efa6"
,
      "name": "Drum Stick",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "10"
    },{
      "_id":
"607e65e9c7a8fe2f6bf6efa7"
,
      "name": "Sweet Corn",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "10"
    },{
      "_id":
"607e65f8c7a8fe2f6bf6efa8"
,
      "name": "Cabbage",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "20"
    },{
      "_id":
"607e6613c7a8fe2f6bf6efa9"
,
      "name": "Green Chilli",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "40"
    },{
      "_id":
"607e6621c7a8fe2f6bf6efaa"
,
      "name": "Tomato",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "40"
    },{
      "_id":
"607e6638c7a8fe2f6bf6efab"
,
      "name": "Lemon",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "50"
    },{
      "_id":
"607e6649c7a8fe2f6bf6efac"
,
      "name": "Capsicum",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "70"
    },{
      "_id":
"607e6658c7a8fe2f6bf6efad"
,
      "name": "Cucumber",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "50"
    },{
      "_id":
"607e666dc7a8fe2f6bf6efae"
,
      "name": "Potato",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "70"
    },{
      "_id":
"607e6691c7a8fe2f6bf6efaf"
,
      "name": "Bitter Gourd",
      "categoryid": "607e6410c7a8fe2f6bf6ef9b",
      "price": "40"
    },{
      "_id":
"607e66e0c7a8fe2f6bf6efb0"
,
      "name": "Mango",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "25"
    },{
      "_id":
"607e6705c7a8fe2f6bf6efb1"
,
      "name": "Orange",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "15"
    },{
      "_id":
"607e671bc7a8fe2f6bf6efb2"
,
      "name": "Apple",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "25"
    },{
      "_id":
"607e672fc7a8fe2f6bf6efb3"
,
      "name": "Grapes",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "60"
    },{
      "_id":
"607e673ec7a8fe2f6bf6efb4"
,
      "name": "Coconut",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "25"
    },{
      "_id":
"607e679fc7a8fe2f6bf6efb5"
,
      "name": "Dragon Fruit",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "50"
    },{
      "_id":
"607e67b6c7a8fe2f6bf6efb6"
,
      "name": "Dates",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "120"
    },{
      "_id":
"607e6833c7a8fe2f6bf6efb7"
,
      "name": "Pear",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "15"
    },{
      "_id":
"607e6855c7a8fe2f6bf6efb8"
,
      "name": "Pomegranate",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "25"
    },{
      "_id":
"607e6867c7a8fe2f6bf6efb9"
,
      "name": "Badam",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "200"
    },{
      "_id":
"607e6884c7a8fe2f6bf6efba"
,
      "name": "Pista",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "600"
    },{
      "_id":
"607e6899c7a8fe2f6bf6efbb"
,
      "name": "Papaya",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "20"
    },{
      "_id":
"607e68afc7a8fe2f6bf6efbc"
,
      "name": "Cashew",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "600"
    },{
      "_id":
"607e68bdc7a8fe2f6bf6efbd"
,
      "name": "Anjeera",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "600"
    },{
      "_id":
"607e68cec7a8fe2f6bf6efbe"
,
      "name": "Banana",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "30"
    },{
      "_id":
"607e68dac7a8fe2f6bf6efbf"
,
      "name": "Water Melon",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "30"
    },{
      "_id":
"607e68ecc7a8fe2f6bf6efc0"
,
      "name": "Kiwi",
      "categoryid": "607e641bc7a8fe2f6bf6ef9c",
      "price": "100"
    },{
      "_id":
"607e699ec7a8fe2f6bf6efc1"
,
      "name": "Butter",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "250"
    },{
      "_id":
"607e6a66c7a8fe2f6bf6efc2"
,
      "name": "Cheese Slices",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "100"
    },{
      "_id":
"607e6a84c7a8fe2f6bf6efc3"
,
      "name": "Fresh Milk",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "70"
    },{
      "_id":
"607e6aa9c7a8fe2f6bf6efc4"
,
      "name": "Paneer",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "400"
    },{
      "_id":
"607e850bc7a8fe2f6bf6efc7"
,
      "name": "Curd",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "20"
    },{
      "_id":
"607e8536c7a8fe2f6bf6efc8"
,
      "name": "Cream",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "100"
    },{
      "_id":
"607e8557c7a8fe2f6bf6efc9"
,
      "name": "Yogurt",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "50"
    },{
      "_id":
"607e8575c7a8fe2f6bf6efca"
,
      "name": "Ghee",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "1000"
    },{
      "_id":
"607e85b9c7a8fe2f6bf6efcb"
,
      "name": "Whipped Cream",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "150"
    },{
      "_id":
"607e8606c7a8fe2f6bf6efcc"
,
      "name": "Mozzeralla Cheese",
      "categoryid": "607e642bc7a8fe2f6bf6ef9d",
      "price": "250"
    },{
      "_id":
"607e8657c7a8fe2f6bf6efcd"
,
      "name": "Fish",
      "categoryid": "607e6435c7a8fe2f6bf6ef9e",
      "price": "100"
    },{
      "_id":
"607e8673c7a8fe2f6bf6efce"
,
      "name": "Mutton",
      "categoryid": "607e6435c7a8fe2f6bf6ef9e",
      "price": "150"
    },{
      "_id":
"607e8697c7a8fe2f6bf6efcf"
,
      "name": "Prawns",
      "categoryid": "607e6435c7a8fe2f6bf6ef9e",
      "price": "200"
    },{
      "_id":
"607e86e2c7a8fe2f6bf6efd0"
,
      "name": "Eggs",
      "categoryid": "607e6435c7a8fe2f6bf6ef9e",
      "price": "70"
    },{
      "_id":
"607e8723c7a8fe2f6bf6efd1"
,
      "name": "Chicken DrumStick",
      "categoryid": "607e6435c7a8fe2f6bf6ef9e",
      "price": "100"
    },{
      "_id":
"607e8759c7a8fe2f6bf6efd2"
,
      "name": "Chicken CurryPiece",
      "categoryid": "607e6435c7a8fe2f6bf6ef9e",
      "price": "200"
    },{
      "_id":
"607e8930c7a8fe2f6bf6efd3"
,
      "name": "Beer Shampoo",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "200"
    },{
      "_id":
"607e8944c7a8fe2f6bf6efd4"
,
      "name": "WildStone Combo Pack",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "250"
    },{
      "_id":
"607e896dc7a8fe2f6bf6efd5"
,
      "name": "Ponds Face Moisturizer",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "125"
    },{
      "_id":
"607e8a02c7a8fe2f6bf6efd6"
,
      "name": "Fiama Showergel",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "105"
    },{
      "_id":
"607e8a3dc7a8fe2f6bf6efd7"
,
      "name": "Vaseline",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "55"
    },{
      "_id":
"607e8a5ac7a8fe2f6bf6efd8"
,
      "name": "Nykaa Showergel",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "55"
    },{
      "_id":
"607e8a8bc7a8fe2f6bf6efd9"
,
      "name": "Dove Shampoo",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "95"
    },{
      "_id":
"607e8aaec7a8fe2f6bf6efda"
,
      "name": "Ponds Cold Cream",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "115"
    },{
      "_id":
"607e8af0c7a8fe2f6bf6efdb"
,
      "name": "Veet Skin Remover",
      "categoryid": "607e6442c7a8fe2f6bf6ef9f",
      "price": "85"
    },{
      "_id":
"607e8b5ec7a8fe2f6bf6efdc"
,
      "name": "Stainless Water Bottle",
      "categoryid": "607e6455c7a8fe2f6bf6efa0",
      "price": "50"
    },{
      "_id":
"607e8c10c7a8fe2f6bf6efdd"
,
      "name": "Glass Cleaner",
      "categoryid": "607e6455c7a8fe2f6bf6efa0",
      "price": "70"
    },{
      "_id":
"607e8c3fc7a8fe2f6bf6efde"
,
      "name": "Scrotch Brite",
      "categoryid": "607e6455c7a8fe2f6bf6efa0",
      "price": "90"
    },{
      "_id":
"607e91aac7a8fe2f6bf6efdf"
,
      "name": "Dusting Cloths",
      "categoryid": "607e6455c7a8fe2f6bf6efa0",
      "price": "80"
    },{
      "_id":
"607e91f0c7a8fe2f6bf6efe0"
,
      "name": "Lizol",
      "categoryid": "607e6455c7a8fe2f6bf6efa0",
      "price": "105"
    },{
      "_id":
"607e921ec7a8fe2f6bf6efe1"
,
      "name": "Mop",
      "categoryid": "607e6455c7a8fe2f6bf6efa0",
      "price": "300"
    },{
      "_id":
"607e925bc7a8fe2f6bf6efe2",
      "name": "Bucket",
      "categoryid": "607e6455c7a8fe2f6bf6efa0",
      "price": "190"
    }
  ],
  { ordered: false }
)