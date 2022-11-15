'use strict';
console.log('js file connected.');


let seattle = {
  minCust : 23,
  maxCust : 65,
  avgCookieSale: 6.3,
  hourlyArrayCookies : [],
  numOfCustomerPerHour: function(){
    console.log('inside the num of customer function.');
  },
  cookiesPerHour: function(){
    console.log('inside the cookies per hour');
  }
};
seattle.numOfCustomerPerHour();
seattle.cookiesPerHour();



let tokyo = {
  minCust : 3,
  maxCust : 24,
  avgCookieSale : 1.2,
  hourlyArrayCookies: [],
  numOfCustomerPerHour: function(){
    //console.log('inside the num of customer function.');
  },
  cookiesPerHour: function(){
    //console.log('inside the cookies per hour.');
  }
};
tokyo.numOfCustomerPerHour();
tokyo.cookiesPerHour();

let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  hourlyArrayCookies:[],
  numOfCustomerPerHour: function(){
    //console.log('inside the num of customer function.')
  },
  cookiesPerHour: function(){
    //console.log('inside the cookies per hour.');
  }
};
dubai.numOfCustomerPerHour();
dubai.cookiesPerHour();

let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  hourlyArrayCookies: [],
  numOfCustomerPerHour: function(){
    //console.log('inside the num of customer function.')
  },
  cookiesPerHour: function(){
    //console.log('inside the cookies per hour.');
  }
};
paris.numOfCustomerPerHour();
paris.cookiesPerHour();

let lima = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  hourlyArrayCookies: [],
  numOfCustomerPerHour: function(){
    //console.log('inside the num of customer function.')
  },
  cookiesPerHour: function(){
    //console.log('inside the cookies per hour.');
  }
};
lima.numOfCustomerPerHour();
lima.cookiesPerHour();


console.log('stores: ', seattle, tokyo, dubai, paris, lima);



// Sales Data

function displayData(location, id){
  // Display the values of each array as unordered lists in the browser.
  let parentElement = document.getElementById(id);
  console.log(parentElement, location);
  // continue to loop the data and create an li and append that info to the parentElements.




}





displayData(seattle, 'seattle');
//add the other objects
