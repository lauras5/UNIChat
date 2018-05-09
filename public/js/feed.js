$('#postSubmitBTN').on('click', function (event) {
    event.preventDefault();
    // text area turns into var on submit button click
    // do if statement for 150 characters, do not post if more than 150.
    var body = $('#textarea2').val().trim();

    // get user info so we can return user info for foreign keys
    // $.get('/') //get user info
    var post = { body: body, upvotes: 0, downvotes: 0, dorm: 1, type: 'post' }
    console.log(post)
    
    // post that info to sql
    $.post('/students/posts', post, function (data, status) {
        console.log(status)
    });
});

// $('input#input_text, textarea#textarea2').characterCounter()
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

// logout button
$("#logoutBtn").on("click", function () {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.removeItem('name');
    window.location.href = '/';
});
