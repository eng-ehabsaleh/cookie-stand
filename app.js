'use strict'
let timeSlots = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
];
function randomInRange(min, max) {

    let range = max - min;

    return Math.floor(Math.random() * (range + 1)) + min;
}
let seattle = {
    id: 'seattle',
    location: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    cookieSales: [],
    generateCustomersPerHour: function () {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function () {
    },
    render: function () {

        this.simulateCookieSales();

        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {

            let liElem = document.createElement('li');


            liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';

            ulElem.appendChild(liElem);
        }


    },
};

seattle.render();


let Tokyo = {
    id: 'tokyo',
    location: 'Tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerSale: 1.2,
    cookieSales: [],
    generateCustomersPerHour: function () {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function () {
    },
    render: function () {

        this.simulateCookieSales();

        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {

            let liElem = document.createElement('li');


            liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';

            ulElem.appendChild(liElem);
        }


    },
};
Tokyo.render();




let Dubai = {
    id: 'dubai',
    location: 'Dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 3.7,
    cookieSales: [],
    generateCustomersPerHour: function () {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function () {
    },
    render: function () {

        this.simulateCookieSales();

        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {

            let liElem = document.createElement('li');


            liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';

            ulElem.appendChild(liElem);
        }


    },
};
Dubai.render();


let Paris = {
    id: 'paris',
    location: 'Paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerSale:2.3,
    cookieSales: [],
    generateCustomersPerHour: function () {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function () {
    },
    render: function () {

        this.simulateCookieSales();

        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {

            let liElem = document.createElement('li');


            liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';

            ulElem.appendChild(liElem);
        }


    },
};



Paris.render();



let Lima = {
    id: 'lima',
    location: 'Lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerSale:4.6,
    cookieSales: [],
    generateCustomersPerHour: function () {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function () {
    },
    render: function () {

        this.simulateCookieSales();

        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {

            let liElem = document.createElement('li');


            liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';

            ulElem.appendChild(liElem);
        }


    },
};



Lima.render();