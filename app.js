'use strict';

let Hours=['6am','7am','8am','9am','10am','11am','12pm','13pm','14pm','15pm','16pm','17pm','18pm','19pm','20pm'];

function randomNumbers(min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

let array=[];


function CookiesShop (Location, minCustms, maxCusms, avgCookies){
    this.Location=Location;
    this.minCustms=minCustms;
    this.maxCusms=maxCusms;
    this.avgCookies=avgCookies;
    this.totalCookies=0;
    this.cookiesEachHour=[];
    this.custmsEachHour=[];
    array.push(this);

}

CookiesShop.prototype.custmsPerHour = function(){
    for (let i = 0; i < Hours.length; i++) {
       this.custmsEachHour.push(randomNumbers(this.minCustms, this.maxCusms));
        
    }
} 

CookiesShop.prototype.CookiesPerHour = function(){
    for (let i = 0; i < Hours.length; i++) {
        this.cookiesEachHour.push(Math.ceil(this.custmsEachHour[i]* this.avgCookies));
        this.totalCookies += this.cookiesEachHour[i];
    }
    // this.totalCookies+=this.cookiesEachHour[i];
}

let seattle = new CookiesShop('SEATTLE', 23, 65, 6.3);
let tokyo = new CookiesShop('TOKYO', 3, 24, 1.2);

let dubai = new CookiesShop('DUBAI', 11, 38, 3.7);
let paris = new CookiesShop('PARIS', 20, 38, 2.3);
let lima = new CookiesShop('LIMA', 2, 16, 4.6);
console.log(array);



let parent=document.getElementById('final');
let table=document.createElement('table');
parent.appendChild(table);
console.log(parent);

function makeHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = 'name & working hours';
    for (let i = 0; i < Hours.length; i++) {
        let thElement = document.createElement('th');
        headerRow.appendChild(thElement);
        thElement.textContent = Hours[i];
        
    }
    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);
    lastTh.textContent = ' each shop Total';
}
makeHeader();

CookiesShop.prototype.render = function (){
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let datav=document.createElement('td');
    dataRow.appendChild(datav); 
    datav.textContent=this.Location

    for (let i = 0; i < Hours.length; i++) {
        let tdElement=document.createElement('td');
        dataRow.appendChild(tdElement);
        tdElement.textContent=this.cookiesEachHour[i];
            
        }
        let totaldaily=document.createElement('td');
        dataRow.appendChild(totaldaily);
        totaldaily.textContent=this.totalCookies
        
    }
    
    




for (let i = 0; i < array.length; i++) {
    array[i].custmsPerHour();
    array[i].CookiesPerHour();
    array[i].render();  
}

function makeTotal(){
let totalRaw=document.createElement('tr');
table.appendChild(totalRaw);
let totalh=document.createElement('th');
totalRaw.appendChild(totalh);
totalh.textContent='Total';

let uppertotal=0;
for (let i = 0; i < Hours.length; i++) {
    let eachHourTotal=0;
    for (let j = 0; j < array.length; j++) {
        eachHourTotal+=array[j].cookiesEachHour[i];
    }
    let totaldata=document.createElement('td');
    totalRaw.appendChild(totaldata);
    totaldata.textContent=eachHourTotal;
    uppertotal+=eachHourTotal;
}

let finalResult=document.createElement('td');
totalRaw.appendChild(finalResult);
finalResult.textContent=uppertotal;

}
makeTotal();