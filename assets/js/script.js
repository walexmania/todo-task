// EVENT LISTENERS ON THE TEXT INPUT (VALUE OF ENTER KEY IS 13)

var todoTask = document.querySelector("ul");
var createTodo = document.querySelector(".createTodo");
var node = document.createElement("li   ")



// ADD EVENT LISTENER
createTodo.addEventListener("keypress", function (evt) {
    if (evt.which === 13) {

        // LETS GRAB THE VALUE

        let todoText = (evt.target.value);

        console.log(todoText);

        var textnode = document.createElement("<span> <i class='fa fa-trash'></i> </span>" + todoText);

        // CREATING A NEW LI FROM TODO TEXT
        // WE NEED TO APPEND THE UL

        // todoTask.append("<li> <span> <i class = 'fa fa-trash'></i> </span>" + todoText + " </li>");
        node.appendChild(textnode);
        todoTask.appendChild(node)

    }

    function newFunction(todoText) {
        todoText.evt.target.value("");
    }
})



// $("input[type='text']").keypress(function (event) {
//     if (event.which === 13) {
//         // GRABBING NEW TODO TEXT
//         var todoText = $(this).val();
//         // CREATING A NEW LI FROM TODO TEXT
//         // WE NEED TO APPEND THE UL
//         $('ul').append("<li><span><i class = 'fa fa-trash'></i> </span>" + todoText + "</li>");
//         $(this).val("");


//     }
// });