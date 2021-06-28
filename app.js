`use strict`

class Shop {
    constructor(shopName, min, max, avg) {
        this.min = min;
        this.max = max;
        this.avgCookiePerCustomer = avg;
        this.shopName = shopName;
        this.total = 0;
        this.list = this.generateList();
    }
    getRandom = function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avgCookiePerCustomer);
    }
    workhour = [
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
    generateList = function () {
        let result = [];
        for (const hour in this.workhour) {
            var cookies = this.getRandom();
            this.total += cookies;
            result.push(this.workhour[hour] + ': ' + cookies + ' cookies.');
        }
        result.push('Total: ' + this.total + ' cookies.')
        return result;
    }
    getHtml = function () {
        var root = document.createElement('div');
        root.innerHTML = "<h2 style='padding-left:15px;'>" + this.shopName + "</h2>";
        var ul = document.createElement('ul');
        for (let i = 0; i < this.list.length; i++) {
            const element = document.createElement('li');
            element.innerHTML = this.list[i];
            ul.appendChild(element)
        }
        root.appendChild(ul);
        return root;
    }
  }
  var seattle = new Shop('seattle', 23, 65, 6.5);
  var Tokyo = new Shop('Tokyo', 23, 65, 6.5);
  var Dubai = new Shop('Dubai', 23, 65, 6.5);
  var Paris = new Shop('Paris', 23, 65, 6.5);
  var Lima = new Shop('Lima', 23, 65, 6.5);
  document.body.appendChild(seattle.getHtml());
  document.body.appendChild(Tokyo.getHtml());
  document.body.appendChild(Dubai.getHtml());
  document.body.appendChild(Paris.getHtml());
  document.body.appendChild(Lima.getHtml());

  Shop.prototype.render = function() {
    this.generateList();

    const parentElement = document.getElementById('shopName');
    console.log(parentElement);
    const article = document.createElement('article');
    parentElement.appendChild(article);

    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.shopName;

    let p = document.createElement('p');
    article.appendChild(p);
    p.textContent = `${this.shopName} which work in this ${this.workhour} daily`;

    const ul = document.createElement('ul');
    article.appendChild(ul);
    for (let i = 0; i < this.workhour.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = this.workhour.length[i]
    }



    for (let i = 0; i < this.workhour.length; i++){
    let tableElement = document.createElement('table');
    parentElement.appendChild(tableElement);

    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);

    let th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = this.workhour.length[i];}







    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = this.seattle;

    let td2 = document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = this.Tokyo;

    let td3 = document.createElement('td');
    dataRow.appendChild(td3);
    td2.textContent = this.Dubai;

    let td4 = document.createElement('td');
    dataRow.appendChild(td4);
    td2.textContent = this.Paris;

    let td5 = document.createElement('td');
    dataRow.appendChild(td5);
    td2.textContent = this.Lima;}




seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();