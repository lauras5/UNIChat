// logout button

$.get('/admin/posts').then(function(data, status) {
    for (var key in data) {
        var adminPost = data[key].body
        $('#adminCard').prepend("<div id='aPost'>" + adminPost + "</div>")
    };
});

$.get('/ra1/posts').then(function(data, status) {
    for (var key in data) {
        var ra1post = data[key].body
        $('#raTab1').prepend("<div id='ra1Post'>" + ra1post + "</div>")
    };
});

$.get('/ra2/posts').then(function(data, status) {
    for (var key in data) {
        var ra2post = data[key].body
        $('#raTab2').prepend("<div id='ra2Post'>" + ra1post + "</div>")
    };
});

$.get('/ra3/posts').then(function(data, status) {
    for (var key in data) {
        var ra3post = data[key].body
        $('#raTab3').prepend("<div id='ra3Post'>" + ra1post + "</div>")
    };
});

$("#logoutBtn").on("click", function () {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    window.location.href = '/';
});