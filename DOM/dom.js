/*function bg() {
    var x = document.getElementById('second-list');
    x.className = 'second'
}

bg();

function all() {
    var y = document.getElementsByTagName('li')
    for (var i = 0; i < y.length; i++) {
        y[i].className = 'some-color'

    }

}

all();

*/



/*

function bg() {
    var first = document.getElementById('first-li');
    first.className = 'li1'
}

bg();



function list() {
    var z = document.getElementById('third-list');
    var liItem = z.getElementsByTagName('li');

    for (var i = 0; i < liItem.length; i++) {
        liItem[i].className = 'itemcolor' + i;
    }

}

list();





*/







/* Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.
Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the first unordered list 
using node relations.
Apply class to that newly selected <li> element
 */
/* 
function removeClass() {
  var fifthList = document.getElementById("fifthList");
  fifthList.querySelector(".active").className = "";
}
function setClass() {
  var fourthList = document.getElementById("fourthList");
  fourthList.firstElementChild.className = "active";
}
removeClass();
setClass(); */





function text() {
    var c = document.getElementById('texting').firstElementChild.textContent
    c = window.alert(c);
}

text();


function text2(str) {

    var c = document.getElementById('texting').lastElementChild.textContent = str;

}

text2('sogge teggxt');


