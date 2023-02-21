$(function(){

    let descriptions = 
        {
            "ayusa": {
                "name": "あゆさ",
                "title": "MOZI",
                "desc": "テンプレートの文字と色のバリエーションを変えたもの。閲覧用です。"
            },
            "boss": {
                "name": "BOSS",
                "title": "3DBOX",
                "desc": "移動したりするよ。使い方は自分で考えろ！"
            },
            "chuson": {
                "name": "ちゅうそん",
                "title": "駅メロ",
                "desc": "AとBでなんかひきます。国鉄型しか勝たん。以上"
            },
            "hiroto": {
                "name": "ひろと",
                "title": "",
                "desc": ""
            },
            "kaede": {
                "name": "かえで",
                "title": "雪",
                "desc": "Aを押すと波もんが広がります。Aを押す、以上！"
            },
            "katsuya": {
                "name": "かつや",
                "title": "",
                "desc": ""
            },
            "keichan": {
                "name": "けいちゃん",
                "title": "サウンドエフェクト",
                "desc": "音楽に合わせて円が動く仕組みです。見るだけです。"
            },
            "nao": {
                "name": "なお",
                "title": "回転が２つ",
                "desc": "２つの回転しているやつをつくりました。"
            },
            "rio": {
                "name": "りお",
                "title": "",
                "desc": ""
            },
            "riu": {
                "name": "りう",
                "title": "雨",
                "desc": "雨っぽいやつ。A連打"
            },
            "romon": {
                "name": "ろもん",
                "title": "カスガのけいりんダンス",
                "desc": "見る"
            },
            "saya": {
                "name": "さや",
                "title": "Miku",
                "desc": "自分の好きな曲の名前を書いて作ったので、みくさん要素がいっぱいあってかわいいです。"
            },
            "shingo": {
                "name": "しんご",
                "title": "さざ波",
                "desc": "トラックパッドを押すとできる。"
            },
            "tanahashi": {
                "name": "たなはし",
                "title": "バブルサウンド",
                "desc": "Aを押すと、音が出る作品です！！Aボタンを押すと音が出ます！"
            },
            "tsuribito": {
                "name": "つりびと",
                "title": "レーダー",
                "desc": "キャラクターをイメージしました。"
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