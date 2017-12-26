/**
 * Created by songj on 2017/10/13.
 */
//社区
((function () {
    var flag = "";
    $("#com").mouseenter(function () {
        $("#community_none2").show();
        var spanObj = $("#community_none2").find("span");
        for (var i = 0; i < spanObj.length; i++) {
            $(spanObj[i]).css("top", 18 + i * 32 + "px");
            $(spanObj[i]).css("left", 16 + "px");
        }
        $("#community_none2").mouseenter(function () {
            $(this).show();
        }).mouseleave(function () {
            $(this).hide();
        });
    }).mouseleave(function () {
        $("#community_none2").css("display", "none");
    });
})());

//穷游商场
((function () {
    $("#shopping2").mouseenter(function () {
        $("#shopping_none2").show();
        var spanObj = $("#shopping_none2").find("span");
        for (var i = 0; i < spanObj.length; i++) {
            $(spanObj[i]).css("top", 18 + i * 32 + "px");
            $(spanObj[i]).css("left", 16 + "px");
        }
        $("#shopping_none2").mouseenter(function () {
            $(this).show();
        }).mouseleave(function () {
            $(this).hide();
        });
    }).mouseleave(function () {
        $("#shopping_none2").hide();
    });
})());

//预定
((function () {
    $("#reserve2").mouseenter(function () {
        $("#reserve_none2").show();
        var spanObj2 = $("#reserve_none2").find("span");
        for (var i = 0; i < spanObj2.length; i++) {
            $(spanObj2[i]).css("top", 18 + i * 32 + "px");
            $(spanObj2[i]).css("left", 16 + "px");
        }
        $("#reserve_none2").mouseenter(function () {
            $(this).show();
        }).mouseleave(function () {
            $(this).hide();
        });
    }).mouseleave(function () {
        $("#reserve_none2").hide();
    });
})());

//给创建新的行程注册鼠标进入和离开事件
((function () {
    $(function () {
        $("#banner_btn").mouseenter(function () {
            //鼠标进入则这个div下面的ul显示
            $(this).find("ul").stop().slideToggle(500);
        }).mouseleave(function () {
            //鼠标离开则ul隐藏
            $(this).find("ul").stop().slideToggle(500);
        });
    });
})());

//精品行程  目的地里的更多注册鼠标点击事件 点击多选 行程主题变为多选列表
((function () {
    $(function () {
        //精品行程 目的地里的更多注册鼠标点击事件
        $("#more_f").click(function () {
            //判断list_f这个div是否应用了listLest这个类样式
            if ($("#list_f").hasClass("listLest")) {
                //应用了就删除，换成listMore
                $("#list_f").removeClass("listLest").addClass("listMore");
                //改变当前div的类样式
                $(this).removeClass("more").addClass("more1");
                //改变当前div中a的值
                $(this).find("a").text("收起");
            } else {
                $("#list_f").removeClass("listMore").addClass("listLest");
                $(this).find("a").text("更多");
                $(this).removeClass("more1").addClass("more");
            }
        });
        $("#more_t").click(function () {
            //判断list_t这个div是否应用了listLest这个类样式
            if ($("#list_t").hasClass("listLest")) {
                //应用了就删除，换成listMore
                $("#list_t").removeClass("listLest").addClass("listMore");
                //改变当前div的类样式
                $(this).removeClass("more").addClass("more1");
                //改变当前div中a的值
                $(this).find("a").text("收起");
            } else {
                $("#list_t").removeClass("listMore").addClass("listLest");
                $(this).find("a").text("更多");
                $(this).removeClass("more1").addClass("more");
            }
        });
        //精品行程  点击多选 行程主题变为多选列表
        $("#js_more").click(function () {
            $(this).hide();//隐藏这个多选的div
            $("#js_plan").hide();//隐藏原本的列表
            $("#js_plan_more").show();//显示多选列表
            $("#js_plan_subbtn").show();//显示按钮
        });
        //点击取消按钮 显示原来的多选选项和默认的列表
        $("#select").click(function () {
            $("#js_more").show();//显示这个多选的div
            $("#js_plan").show();//显示原本的列表
            $("#js_plan_more").hide();//隐藏多选列表
            $("#js_plan_subbtn").hide();//隐藏按钮
        });

    });
})());
