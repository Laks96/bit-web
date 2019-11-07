/* var select = document.querySelector('body');

function add(options) {

   var create = document.createElement('select');


   for (var i = 0; i < options.length; i++) {
       var b = document.createElement('option');
       var text = document.createTextNode(options[i]);
       b.appendChild(text);
       create.appendChild(b);
   }

   select.appendChild(create);
}
add(['cat', 'fish', 'dog']);
*/


/*InnerHTML

function func(animal) {

    var select = document.querySelector('body');

    select.innerHTML = '<select></select>'
    var x = document.querySelector('select');
    var y = '';

    for (var i = 0; i < animal.length; i++) {
        y = y + '<option>' + animal[i] + '</option>';
        x.innerHTML = y;

    }

}


func(['cat', 'fish', 'dog']);

*/


function check() {

    var form = document.querySelectorAll('form');

    for (var i = 0; i < form.length; i++) {
        var input = document.querySelectorAll('input');
        if (input[i].hasAttribute('required') && !input[i].hasAttribute('value')) {

            input[i].border.style = ('border', '1px solid red');



        }
    }

}

check();