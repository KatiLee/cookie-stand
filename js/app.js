'use strict';
console.log('js file connected.');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];





function StoreLocation (location, min, max,avgCookieSale){
  this.location = location;
  this.minCust = min;
  this.maxCust = max;
  //update below to this.avgCookieSale = avgCookieSale
  this.avgCookieSale = avgCookieSale;
  this.hourlyArray = [];
  this.cookieTotal = 0;
}

StoreLocation.prototype.generateCookiesPerHour = function (){

  let min = this.minCust;
  let max = this.maxCust;

  let random = Math.ceil(Math.random() * (max + 1 - min)) + min;
  console.log('random num x avg cookieSale: ', random * this.avgCookieSale);
  return random;
};

StoreLocation.prototype.cookiesPurchased = function (){

  for (let i = 0; i < hours.length; i++){

    this.hourlyArray[i] = Math.floor(this.generateCookiesPerHour() * this.avgCookieSale);

    let cookiesForThisHour = this.hourlyArray[i];

    this.cookieTotal = this.cookieTotal + cookiesForThisHour;
  }
};

// StoreLocation.prototype.renderTable = function (){

//   // let table = document.getElementById('salesData');

//   let row = document.createElement('tr');
//   let locationCell = document.createElement('th');
//   locationCell.textContent = this.location;
//   row.appendChild(locationCell);
//   let tableDataCell;
//   for (let i = 0; i < hours.length; i++){
//     tableDataCell = document.createElement('td');
//     tableDataCell.textContent = this.hourlyArray[i];
//     row.appendChild(tableDataCell);
//   }
//   tableDataCell = document.createElement('td');
//   tableDataCell.textContent = this.cookieTotal;
//   row.appendChild(row);

// };

// function renderTableHeader(){
//   let table = document.getElementById('saleData');
//   let row = document.createElement('tr');
//   let tableHeadCell = document.createElement('th');
//   row.appendChild(tableHeadCell);
//   for (let i = 0; i < hours.length; i++){
//     tableHeadCell = document.createElement('th');
//     tableHeadCell.textContent = hours[i];
//     row.appendChild(tableHeadCell);
//   }
//   tableHeadCell = document.createElement('th');
//   tableHeadCell.textContent = 'Daily Location Totals';
//   row.appendChild(tableHeadCell);
//   table.appendChild(row);
// }
// renderTableHeader();

// function renderTableFooter (){

//   let table = document.getElementById('salesData');

//   let row = document.createElement('tr');

//   let tableFooterCell = document.createElement('th');

//   tableFooterCell.textContent = 'Totals';

//   row.appendChild(tableFooterCell);

//   //update the hoursOpperation
//   for (let i = 0; i < hoursOpperation; i++){
//     let cookieTotalRow = 0;
//     for (let x = 0; x < locationInfo.length; x++){
//       cookieTotalRow = cookieTotalRow + locationInfo[x].hourlyArray[i];
//     }
//     tableFooterCell = document.createElement('td');
//     tableFooterCell.textContent = cookieTotalRow;
//     row.appendChild(tableFooterCell);
//   }
//   let altogetherTotal = 0;
//   for (let i = 0; i < locationInfo.length; i++){
//     altogetherTotal = altogetherTotal + locationInfo[i].cookieTotal;
//   }
//   tableFooterCell = document.createElement('td');
//   tableFooterCell.textContent = altogetherTotal;
//   row.appendChild(tableFooterCell);
//   row.id = 'footer';
//   table.appendChild(row);
// }


let seattleLocation = new StoreLocation('Seattle', 23, 65, 6.3);
let tokyoLocation = new StoreLocation('Tokoyo', 3, 24, 1.2);
let dubaiLocation = new StoreLocation('Dubai', 11, 38, 3.7);
let parisLocation = new StoreLocation('Paris', 20, 38, 2.3);
let limaLocation = new StoreLocation('Lima', 2, 16, 4.6);






let locationInfo = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];
console.log('location info: ', locationInfo);


for (let i = 0; i < locationInfo.length; i++){
  // locationInfo[i].generateCookiesPerHour();
  locationInfo[i].cookiesPurchased();
  // locationInfo[i].renderTable();
}
// renderTableFooter();
