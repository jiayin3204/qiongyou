//����������
//��������ʾ�����б�
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

//ͷ��������

$(function () {
    //����ı��򵯳�����ѡ��
    $(".searchT>input").focus(function () {
        $(this).parent().siblings(".defaultContent").show();
    }).blur(function () {
        $(this).parent().siblings(".defaultContent").hide();
    });
    //������ť��ɫ
    $(".searchT>.submit").mouseenter(function () {
        $(this).css({"opacity": 0.8, "cursor": "pointer"});
    }).mouseleave(function () {
        $(this).css("opacity", 1);
    });
    //�������ƶ�С�ֻ�ͼƬ
    $(".searchR").mouseenter(function () {
        $(this).find("i").animate({"top": 8}, 100);
    }).mouseleave(function () {
        $(this).find("i").animate({"top": 12}, 100);

    });
});

//banner�����
//������ʾ�Ҳ�div
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

//��ʱ������
//�ı�ͼƬ͸����
$(function () {
    $("#pics>ul>li").mouseenter(function () {
        $(this).children("a").children("p").css("opacity",0.8);
        $(this).css("cursor","pointer");
    }).mouseleave(function () {
        $(this).children("a").children("p").css("opacity",1);
    });
    //ͼƬ�л�Ч��
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
//��ʱ��������

//�����

$(function () {
    //��ʾ�����
    $(document).on("scroll", function () {
        if($(this).scrollTop()>420){
            $("#side").fadeIn(500);
        }else{
            $("#side").fadeOut(200);
        }
        //��ʾ��ά��
         $("#app").mouseenter(function () {
            $("#appcode").show();
        }).mouseleave(function () {
            $("#appcode").hide();
        });

    });
    //���ض���
    $(".top>a").on("click", function () {
        $("body").animate({"scrollTop":0},1000);
    });
});

//���������



//�����������л�Ч��
$(function () {
    $("#ziyouxing_nav").find("li").mouseenter(function () {
        var index=$(this).index();
        $("#ziyouxing_default").find("ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
    });
});

//���������л�Ч��
$(function () {
    $("#titleRow_play>ul>li").mouseenter(function () {
        var index=$(this).index();
        $("#play_content>ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
    });
});

//�������л�Ч��
$(function () {
    $("#titleRow_explore>ul>li").mouseenter(function () {
        var index=$(this).index();
        $("#explore_default>ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
    });
});



