$(function(){

    $(".ul-wrapper a").hover(
        function(){
        },
        function(){
        }
    );

    $(".work").click(function(){
        let id = $(this).data("id");
        let src = "./pages/" + id + ".html"
        let iframe = $(`<iframe src=${src} scrolling="no"></iframe>`);
        $(".modal-wrapper").addClass("active");
        $.when(
            $(".modal-container").animate({"height": "48vw"},120,"swing")
            .animate({"width": "64vw"},120,"swing")
        ).done(function(){
            $(".modal").append(iframe);
        });
        $("body").addClass("no-scroll");

    });

    $(".modal-bg").click(function(){
        $(".modal-wrapper").removeClass("active");
        $(".modal").empty();
        $(".modal-container").css({"width": "0.64vw", "height": "0.48vw"})
        $("body").removeClass("no-scroll");
    });
});