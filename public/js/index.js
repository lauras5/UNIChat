var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",

    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,

    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second

    findElements: function () {
        var base = this;

        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);

        return base;
    },

    setState: function (state) {
        var base = this,
            elem = null;

        if (!state) {
            state = 0;
        }

        if (base.tabsElement) {
            elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }

        return base;
    },

    getActiveTab: function () {
        var base = this;

        base.tabsElement.each(function (i, el) {
            if ($(el).hasClass("current")) {
                base.activeTab = $(el);
            }
        });

        return base;
    },

    addClickEvents: function () {
        var base = this;

        base.hidePassword.on("click", function (e) {
            var $this = $(this),
                $pwInput = $this.prev("input");

            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Hide");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Show");
            }
        });

        base.tabsElement.on("click", function (e) {
            var targetTab = $(this).attr("data-tabtar");

            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");

            base.tabElement.each(function (i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });

        base.inputElements.find("label").on("click", function (e) {
            var $this = $(this),
                $input = $this.next("input");

            $input.focus();
        });

        return base;
    },

    initialize: function () {
        var base = this;

        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

$(document).ready(function () {
    LoginModalController.initialize();
});


// Login userAuth 

console.log("Logged in: " + sessionStorage.getItem("loggedIn"));

if (sessionStorage.getItem("loggedIn") == "true") {



    var uEmail = sessionStorage.getItem("email");

    $.get('/users').then(function(data, status) {
        console.log(data)
        for (var key in data) {
            if (uEmail === data[key].email) {
                window.location.href = '/students' + data[key].dorm;
            }
        }
    });
}


$("#register-btn").on("click", function () {
    event.preventDefault();

    var secKey = $("#user-code").val().trim();

    $.get('/admin/token').then(function (data, status) {
        // returns all saved tokens

        var count = 0;

        for (var key in data) {
            if (secKey === data[key].key) {
                count++;

                var userp = $("#user-pw-r").val();
                var userpr = $("#user-pw-repeat").val();

                if (userp !== userpr) {
                    alert("Passowords do not match!");
                }
                else {
                    // check to see if the email already exists in the data base
                    $.get('/users').then(function (data, status) {
                        console.log(data);
                        var userEmail = $("#user-email-r").val().trim();

                        var count = 0;

                        for (var key in data) {
                            if (userEmail === data[key].email) {
                                count++;
                            }
                        }
                        if (count === 0) {
                            if ($("#user-email-r").val().trim().indexOf("@") === -1) {
                                alert("Please enter a valid email.");
                            }
                            else {
                                var user = {
                                    name: $("#user-flname").val(),
                                    email: $("#user-email-r").val().trim(),
                                    password: $("#user-pw-r").val(),
                                    dorm: data[key].dorm,
                                    clearance_level: "student"
                                };

                                sessionStorage.setItem("loggedIn", true);
                                sessionStorage.setItem("name", data[key].name);
                                sessionStorage.setItem("email", data[key].email);
    
                                console.log(user);
                                $.post('/users', user, function (data, status) {
                                    console.log("data: " + data);
                                    console.log("status" + status)
                                });
                                window.location.href = '/students' + data[key].dorm;
                            }

                        }
                        else {
                            alert("A account already exists under this email. Please use a different email.");
                        }
                    
                    })
                }
            }
        }
        if (count === 0) {
            alert("You have entered an invalid student code. Please try again!");
        }
    });
});


$("#login-btn").on("click", function () {
    event.preventDefault();

    $.get('/users').then(function (data, status) {
        console.log(data);
        var userEmail = $("#user-email-l").val().trim();
        var userPwd = $("#user-pw-l").val().trim();

        var count = 0;

        for (var key in data) {
            if (userEmail === data[key].email && userPwd === data[key].password) {
                count++;

                sessionStorage.setItem("loggedIn", true);
                sessionStorage.setItem("name", data[key].name);
                sessionStorage.setItem("email", data[key].email);

                window.location.href = '/students' + data[key].dorm;
            }
        }
        if (count === 0) {
            alert("You did not enter a valid email or password. Try Again");
        }
    });
});