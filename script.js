$(function(){

    let descriptions = 
        {
            "ayusa": {
                "name": "あゆさ",
                "title": "タイトル",
                "desc": "がんばりました。"
            },
            "boss": {
                "name": "BOSS",
                "title": "",
                "desc": ""
            },
            "chuson": {
                "name": "ちゅうそん",
                "title": "",
                "desc": ""
            },
            "hiroto": {
                "name": "ひろと",
                "title": "",
                "desc": ""
            },
            "kaede": {
                "name": "かえで",
                "title": "",
                "desc": ""
            },
            "katsuya": {
                "name": "かつや",
                "title": "",
                "desc": ""
            },
            "keichan": {
                "name": "けいちゃん",
                "title": "",
                "desc": ""
            },
            "nao": {
                "name": "なお",
                "title": "",
                "desc": ""
            },
            "rio": {
                "name": "りお",
                "title": "",
                "desc": ""
            },
            "riu": {
                "name": "りう",
                "title": "",
                "desc": ""
            },
            "romon": {
                "name": "ろもん",
                "title": "",
                "desc": ""
            },
            "saya": {
                "name": "さや",
                "title": "",
                "desc": ""
            },
            "shingo": {
                "name": "しんご",
                "title": "",
                "desc": ""
            },
            "tanahashi": {
                "name": "たなはし",
                "title": "",
                "desc": ""
            },
            "tsuribito": {
                "name": "つりびと",
                "title": "",
                "desc": ""
            },
        };

    $(".work").click(function(){
        let id = $(this).data("id");
        let src = "./pages/" + id + ".html"
        let iframe = $(`<iframe src=${src} scrolling="no"></iframe>`);
        $(".modal-wrapper").addClass("active");
        $(".work-description h3").html(`「${descriptions[id].title}」 <span>created by</span> ${descriptions[id].name}`);
        $(".work-description p").text(descriptions[id].desc);
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

    $(function(){
        var timer = false;
        var prewidth = $(window).width();
        $(window).resize(function() {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                var nowWidth = $(window).width();
                if(prewidth !== nowWidth){
                    location.reload();
                }
                prewidth = nowWidth;
            }, 200);
        });
    });
});