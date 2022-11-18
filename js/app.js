'use strict';
console.log('js file connected.');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// let seattle = {
//   minCust : 23,
//   maxCust : 65,
//   avgCookieSale: 6.3,
//   hourlyArrayCookies : [],
//   numOfCustomerPerHour: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookiesPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
//     }
//   }
// };
// seattle.numOfCustomerPerHour();
// seattle.cookiesPerHour();



// let tokyo = {
//   minCust : 3,
//   maxCust : 24,
//   avgCookieSale : 1.2,
//   hourlyArrayCookies: [],
//   numOfCustomerPerHour: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookiesPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
//     }
//   }
// };
// tokyo.numOfCustomerPerHour();
// tokyo.cookiesPerHour();

// let dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   hourlyArrayCookies:[],
//   numOfCustomerPerHour: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookiesPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
//     }
//   }
// };
// dubai.numOfCustomerPerHour();
// dubai.cookiesPerHour();

// let paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   hourlyArrayCookies: [],
//   numOfCustomerPerHour: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookiesPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
//     }
//   }
// };
// paris.numOfCustomerPerHour();
// paris.cookiesPerHour();

// let lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   hourlyArrayCookies: [],
//   numOfCustomerPerHour: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookiesPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyArrayCookies[i] = Math.floor(this.numOfCustomerPerHour() * this.avgCookieSale);
//     }
//   }
// };
// lima.numOfCustomerPerHour();
// lima.cookiesPerHour();


//console.log('stores: ', seattle, tokyo, dubai, paris, lima);



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






// displayData(seattle, 'seattle');
// displayData(tokyo, 'tokyo');
// displayData(dubai, 'dubai');
//displayData(paris, 'paris');
//displayData(lima, 'lima');




//creating constructor function

function StoreLocation (location, min, max, avgCookieSale){
  this.location = location;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookieSale;
  this.hourlyArray = [];
  this.cookieTotal = 0;
}

StoreLocation.prototype.generateCookiesPerHour = function (){
  let min = this.minCust;
  let max = this.maxCust;
  let random = Math.ceil(Math.random() * (max + 1 - min)) + min;
  return random;
};

StoreLocation.prototype.cookiesPurchased = function (){
  for (let i = 0; i < hours.length; i++){
    this.hourlyArray[i] = Math.floor(this.generateCookiesPerHour() * this.avgCookieSale);
    let cookiesForThisHour = this.hourlyArray[i];
    this.cookieTotal = this.cookieTotal +cookiesForThisHour;
  }
};

StoreLocation.prototype.renderTable = function (){
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');
  let locationCell = document.createElement('th');
  locationCell.textContent = this.location;
  row.appendChild(locationCell);
  let tableDataCell;
  for (let i = 0; i < hours.length; i++){
    tableDataCell = document.createElement('td');
    tableDataCell.textContent = this.hourlyArray[i];
    row.appendChild(tableDataCell);
  }
  tableDataCell = document.createElement('td');
  tableDataCell.textContent = this.cookieTotal;
  row.appendChild(row);
};

function renderTableHeader(){
  let table = document.getElementById('saleData');
  let row = document.createElement('tr');
  let tableHeadCell = document.createElement('th');
  row.appendChild(tableHeadCell);
  for (let i = 0; i < hours.length; i++){
    tableHeadCell = document.createElement('th');
    tableHeadCell.textContent = hours[i];
    row.appendChild(tableHeadCell);
  }
  tableHeadCell = document.createElement('th');
  tableHeadCell.textContent = 'Daily Location Totals';
  row.appendChild(tableHeadCell);
  table.appendChild(row);
}
renderTableHeader();

function renderTableFooter (){
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');
  let tableFooterCell = document.createElement('th');
  tableFooterCell.textContent = 'Totals';
  row.appendChild(tableFooterCell);
  for (let i = 0; i < hoursOpperation; i++){
    let cookieTotalRow = 0;
    for (let x = 0; x < locationInfo.length; x++){
      cookieTotalRow = cookieTotalRow + locationInfo[x].hourlyArray[i];
    }
    tableFooterCell = document.createElement('td');
    tableFooterCell.textContent = cookieTotalRow;
    row.appendChild(tableFooterCell);
  }
  let altogetherTotal = 0;
  for (let i = 0; i <locationInfo.length; i++){
    altogetherTotal = altogetherTotal + locationInfo[i].cookieTotal;
  }
  tableFooterCell = document.createElement('td');
  tableFooterCell.textContent = altogetherTotal;
  row.appendChild(tableFooterCell);
  row.id = 'footer';
  table.appendChild(row);
}

let seattleLocation=new StoreLocation('Seattle', 23, 65, 6.3);
let tokyoLocation=new StoreLocation('Tokoyo', 3, 24, 1.2);
let dubaiLocation=new StoreLocation('Dubai', 11, 38, 3.7);
let parisLocation=new StoreLocation('Paris', 20, 38, 2.3);
let limaLocation=new StoreLocation('Lima', 2, 16, 4.6);
let locationInfo=[seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];
for (let i = 0; i < locationInfo.length; i++){
  locationInfo[i].generateCookiesPerHour();
  locationInfo[i].cookiesPurchased();
  locationInfo[i].renderTable();
}
renderTableFooter();
