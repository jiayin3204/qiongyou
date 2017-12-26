//顶部导航栏
//鼠标进入显示下拉列表
$(function () {
    $("#top_l>li").mouseenter(function () {
        $(this).children("em").show(100);
        $(this).children("ul").show(100);
    }).mouseleave(function () {
        $(this).children("em").hide();
        $(this).children("ul").hide();
    });
    $("#search_icon>i").mouseenter(function () {
        $(this).siblings("div").animate({"width": "200px"});
    });
    $("#search_icon>div").mouseleave(function () {
        $(this).animate({"width": "0px"}, 100)
    });
});

//头部搜索栏

$(function () {
    //点击文本框弹出国家选项
    $(".searchT>input").focus(function () {
        $(this).parent().siblings(".defaultContent").show();
    }).blur(function () {
        $(this).parent().siblings(".defaultContent").hide();
    });
    //搜索按钮变色
    $(".searchT>.submit").mouseenter(function () {
        $(this).css({"opacity": 0.8, "cursor": "pointer"});
    }).mouseleave(function () {
        $(this).css("opacity", 1);
    });
    //鼠标进入移动小手机图片
    $(".searchR").mouseenter(function () {
        $(this).find("i").animate({"top": 8}, 100);
    }).mouseleave(function () {
        $(this).find("i").animate({"top": 12}, 100);

    });
});

//banner广告栏
//进入显示右侧div
$(function () {
    $("#banner_content").children("li").mouseenter(function () {
        var index=$(this).index();
        $("#banner_content").siblings("div").children("div:eq("+index+")").show();
        $(this).children("h2").css("color","#323232");
        $(this).css("backgroundColor","#fff");
    }).mouseleave(function () {
        var index=$(this).index();
        $("#banner_content").siblings("div").children("div:eq("+index+")").hide();

        $(this).children("h2").css("color","#fff");
        $(this).css("backgroundColor","");
    });
});

//限时特卖栏
//改变图片透明度
$(function () {
    $("#pics>ul>li").mouseenter(function () {
        $(this).children("a").children("p").css("opacity",0.8);
        $(this).css("cursor","pointer");
    }).mouseleave(function () {
        $(this).children("a").children("p").css("opacity",1);
    });
    //图片切换效果
    $(function () {
        var index=0;
        $("#sale_title>a").on("click", function () {
            index++;
            //$("#sale_title>a").prop("index",index);
            $("#pics>ul:eq("+(index)+")").addClass("selected").siblings("ul").removeClass("selected");

            if(index==$("#pics").children().length-1){
                index=-1;
            }
            console.log(index);
        });
    });

});
//限时特卖结束

//侧边栏

$(function () {
    //显示侧边栏
    $(document).on("scroll", function () {
        if($(this).scrollTop()>420){
            $("#side").fadeIn(500);
        }else{
            $("#side").fadeOut(200);
        }
        //显示二维码
         $("#app").mouseenter(function () {
            $("#appcode").show();
        }).mouseleave(function () {
            $("#appcode").hide();
        });

    });
    //返回顶部
    $(".top>a").on("click", function () {
        $("body").animate({"scrollTop":0},1000);
    });
});

//侧边栏结束



//机酒自由行切换效果
$(function () {
    $("#ziyouxing_nav").find("li").mouseenter(function () {
        var index=$(this).index();
        $("#ziyouxing_default").find("ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
    });
});

//当地玩乐切换效果
$(function () {
    $("#titleRow_play>ul>li").mouseenter(function () {
        var index=$(this).index();
        $("#play_content>ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
    });
});

//最世界切换效果
$(function () {
    $("#titleRow_explore>ul>li").mouseenter(function () {
        var index=$(this).index();
        $("#explore_default>ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
    });
});



