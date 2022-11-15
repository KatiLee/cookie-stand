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
  minMaxArray: ['3', '24', '1.2']

};

let dubai = {
  minMaxArray: ['11', '38', '3.7']
};

let paris = {
  minMaxArray: ['20', '38', '2.3']
};

let lima = {
  minMaxArray: ['2', '16', '4.6']
};



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
