'use strict';
console.log('js file connected.');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let seattle = {
  minCust : 23,
  maxCust : 65,
  avgCookieSale: 6.3,
  hourlyArrayCookies : [],
  numOfCustomerPerHour: function(){
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
    }
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
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
    }
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
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
    }
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
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPerHour: function(){
   for(let i = 0; i < hours.length; i++){
    this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
   }
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
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
    }
  }
};
lima.numOfCustomerPerHour();
lima.cookiesPerHour();


console.log('stores: ', seattle, tokyo, dubai, paris, lima);



function displayData(location, id){
  location.cookiesPerHour();

  let parentElement = document.getElementById(id);
  console.log(parentElement);

  let cookieTotal = 0;

  for(let i = 0; i < location.hourlyArrayCookies.length; i++){
    let cookiesForThisHour = location.hourlyArrayCookies[i];
    cookieTotal = cookieTotal + cookiesForThisHour;

    let listString = hours[i] + ': ' + cookiesForThisHour + ' cookies';
    let li = document.createElement('li');
    li.textContent = listString;
    parentElement.appendChild(li);
  }

  let totalLi = document.createElement('li');
  totalLi.textContent = ' Total Cookies: ' + cookieTotal;
  parentElement.appendChild(totalLi);
}






displayData(seattle, 'seattle');
//add the other objects
