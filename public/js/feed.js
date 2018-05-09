$("#btn").on('click', function () {
    var user = {
        post: $("#input").val()
    }
    $.post('/users', user).then(function () {
        console.log('posts')
    })
})

$('input#input_text, textarea#textarea2').characterCounter()
// if(data-length > 150) {
//     console.log('stop')
// }



// $(document).ready(function () {
// $('input#input_text, textarea#textarea1').characterCounter();
// });
// $('input#input_text, textarea#textarea1').characterCounter();

// var maxLength = 150;
// $('textarea').keyup(function() {
//   var length = $(this).val().length;
//   var length = maxLength-length;
//   $('#chars').text(length);
// });

<<<<<<< HEAD
=======

>>>>>>> 5fb7ea2ea369e8f05b1eb2d1a69a847ee04061fb
// logout button
$("#logoutBtn").on("click", function () {
    console.log("sup")
    loggedIn = sessionStorage.setItem("loggedIn", false);
})