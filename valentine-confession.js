$(document).ready(function () {
    $("#messageState").on("change", function () {
        $(".message").removeClass("openNor").removeClass("closeNor");
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
            $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
            console.log("Opening confession");
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
            $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
            console.log("Closing confession");
        }
    });

    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
        console.log("Animation End");
        if ($(".message").hasClass("closeNor"))
            $(".message").addClass("closed");
        $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
    });

    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
        console.log("Animation End");
        if (!$(".heart").hasClass("closeHer"))
            $(".heart").addClass("openedHer").addClass("beating");
        else
            $(".heart").addClass("no-anim").removeClass("beating");
        $(".heart").removeClass("openHer").removeClass("closeHer");
    });

    // Redirect based on response
    $("#yesBtn").on("click", function () {
        window.location.href = "yes.html"; // Redirect to the Yes page
    });

    $("#noBtn").on("click", function () {
        window.location.href = "no.html"; // Redirect to the No page
    });
});


