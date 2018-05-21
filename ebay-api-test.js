
const Ebay = require('ebay-node-api');
const keys = require('./keys.js');
require('dotenv').config();

let ebay = new Ebay({
    clientID: process.env.EBAY_CLIENT_ID,
    limit: 1
});
ebay.findItemsByKeywords("Legend of Zelda: a link to the past").then((data) => {
    console.log(JSON.stringify(data, null, 2)); // fetches top 6 results in form of JSON.
}, (error) => {
    console.log(error);
});


