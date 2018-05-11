// logout button

$.get('/admin/posts').then(function(data, status) {
    for (var key in data) {
        var adminPost = data[key].body
        $('#adminCard').prepend("<hr><div id='aPost'>" + adminPost + "</div>")
    };
});

$.get('/ra1/posts').then(function(data, status) {
    for (var key in data) {
        var ra1post = data[key].body
        $('#raTab1').prepend("<hr><div id='ra1Post'>" + ra1post + "</div>")
    };
});

$.get('/ra2/posts').then(function(data, status) {
    for (var key in data) {
        var ra2post = data[key].body
        $('#raTab2').prepend("<hr><div id='ra2Post'>" + ra2post + "</div>")
    };
});

$.get('/ra3/posts').then(function(data, status) {
    for (var key in data) {
        var ra3post = data[key].body
        $('#raTab3').prepend("<hr><div id='ra3Post'>" + ra3post + "</div>")
    };
});

$("#logoutBtn").on("click", function () {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    window.location.href = '/';
});

$(document).on('click', '#commentLink1', function () {
    var postVal = $(this).val();
    
    // $('#commentRegion-' + postVal).html("<div><input id='comment' type='text' name='comments'><button id='commentBTN' value='" + postVal + "'>Post</button></div>");
    $.get('/students1/comments', function (data, status) {
        for (var key in data) {
            if (postVal == data[key].PostId) {
                $('#commentRegion-' + postVal).append(data[key].body + "<br>");
            }
        }
    });
});