'use strict';

const switcher = document.querySelector('.btn');
const updater = document.querySelector('.btn2');



var request1 = new XMLHttpRequest();
request1.open('GET', 'https://api.kanye.rest', true);

request1.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    document.getElementById("callreturn1").innerHTML = "Kanye says:\n" + data.quote;

}

var request2 = new XMLHttpRequest();
request2.open('GET', 'https://animechan.vercel.app/api/random', true);

request2.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    document.getElementById("callreturn2").innerHTML = data.character +" from " + data.anime + " says:\n " + data.quote;

}

updater.addEventListener('click', function() {
    var request1 = new XMLHttpRequest();
    request1.open('GET', 'https://api.kanye.rest', true);

    request1.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        document.getElementById("callreturn1").innerHTML = "Kanye says:\n" + data.quote;

    }

    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://animechan.vercel.app/api/random', true);

    request2.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        document.getElementById("callreturn2").innerHTML = data.character +" from " + data.anime + " says:\n " + data.quote;

    }
    request1.send();
    request2.send();

});


switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    ap
    console.log('current class name: ' + className);
});

request1.send();
request2.send();

