/**
 * Created by sks on 2017/10/12.
 */
//ͷ������
$("#txt_a").mouseenter(function(){
    $("#txt").css("opacity",1);
    $("#txt").focus();
}).mouseleave(function(){
    $("#txt").css("opacity",0);
});
//����
((function(){
    var flag = "";
    $("#com").mouseenter(function(){
        $("#community_none2").show(100);
        var spanObj = $("#community_none2").find("span");
        for(var i = 0;i<spanObj.length;i++){
            $(spanObj[i]).css("top", 18+i*32+"px");
            $(spanObj[i]).css("left", 16+"px");
        }
        $("#community_none2").mouseenter(function(){
            $(this).show();
        }).mouseleave(function(){
            $(this).hide();
        });
    }).mouseleave(function(){
        $("#community_none2").css("display","none");
    });
})());
//�����̳�
((function(){
    $("#shopping2").mouseenter(function(){
        $("#shopping_none2").show();
        var spanObj = $("#shopping_none2").find("span");
        for(var i = 0;i<spanObj.length;i++){
            $(spanObj[i]).css("top", 18+i*32+"px");
            $(spanObj[i]).css("left", 16+"px");
        }
        $("#shopping_none2").mouseenter(function(){
            $(this).show();
        }).mouseleave(function(){
            $(this).hide();
        });
    }).mouseleave(function(){
        $("#shopping_none2").hide();
    });
})());
//Ԥ��
((function(){
    $("#reserve2").mouseenter(function(){
        $("#reserve_none2").show();
        var spanObj2 = $("#reserve_none2").find("span");
        for(var i = 0;i<spanObj2.length;i++){
            $(spanObj2[i]).css("top", 18+i*32+"px");
            $(spanObj2[i]).css("left", 16+"px");
        }
        $("#reserve_none2").mouseenter(function(){
            $(this).show();
        }).mouseleave(function(){
            $(this).hide();
        });
    }).mouseleave(function(){
        $("#reserve_none2").hide();
    });
})());
//�ֲ�ͼ
//���СԲ��
((function(){
    var index = 0;
    var timeId = "";
    $("#nav_bom_carousel").find("li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        index = $(this).index();
        $("#carousel_none").animate({"left":-index*$(".carousel").width()});
    });
//�Զ�����
    function interval(){
        timeId = setInterval(function(){
            index++;
            if(index==5){
                $("#carousel_none").css("left",0);
                index = 0;
            }
            $("#nav_bom_carousel").children("ol").children("li:eq("+index+")").addClass("current").siblings().removeClass("current");
            $("#carousel_none").animate({"left":-index*$(".carousel").width()});
        },1500);
    }
    interval();
    //������ͼƬ��ն�ʱ��
    $(".carousel").mouseenter(function(){
        clearInterval(timeId);
    }).mouseleave(function(){
        //����뿪����������ʱ��
        interval();
    });
})());
//���ν����°벿
//����
$("#Asia").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#continent_none").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#continent_none").fadeOut(300);
});
//ŷ��
$("#Europe").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#continent_none_Europe").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#continent_none_Europe").fadeOut(300);
});
//����
$("#N_America").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#America_none").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#America_none").fadeOut(300);
});
$("#btn2").click(function(){
    $(this).css("backgroundColor","rgba(0,0,0,.4)");
    $("#btn1").css("backgroundColor","rgba(0,0,0,.2)");
    $("#uu li").animate({"left":"-700px"});
});
$("#btn1").click(function(){
    $(this).css("backgroundColor","rgba(0,0,0,.4)");
    $("#btn2").css("backgroundColor","rgba(0,0,0,.2)");
    $("#uu li").animate({"left":"0"});
});
//����
$("#S_America").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#S_America_block").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#S_America_block").fadeOut(300);
});
//������
$("#Oceania").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#Oceania_none2").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#Oceania_none2").fadeOut(300);
});
//����
$("#Africa").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#Africa_block").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#Africa_block").fadeOut(300);
});
//�ϼ�
$("#Antarctic").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#Antarctic_block").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#Antarctic_block").fadeOut(300);
});
//��־
$("#Magazine").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#Magazine_block").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#Magazine_block").fadeOut(300);
});
//ר��
$("#special").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#special_block").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#special_block").fadeOut(300);
});
//�й��ڵ�
$("#china").mouseenter(function(){
    $(this).css("backgroundColor","#ebebeb");
    $("#china_block").fadeIn(300);
}).mouseleave(function(){
    $(this).css("backgroundColor","#f6f6f6");
    $("#china_block").fadeOut(300);
});
//�ڵ���
$("#sit_none1").find("li").children("a").mouseenter(function(){
    var index = $(this).index();
    $(this).children(".occlusion").show();
}).mouseleave(function(){
    $(this).children(".occlusion").hide();
});
//ҳ��ѡ��
((function(){
    $("#page_a").children("a").click(function(){
        $(this).addClass("a_first").siblings().removeClass("a_first");
        $(".sit2:eq("+(index-1)+")").addClass("sit1").siblings().removeClass("sit1");
    });
    var index = 0;
    $("#a_last2").click(function(){
        if(index!=3){
            index++;
        }else{
            index = 0;
        }
        $(this).addClass("a_first");
        $(".sit2:eq("+(index)+")").addClass("sit1").siblings().removeClass("sit1");
        $("#page_a").children("a:eq("+(index)+")").addClass("a_first").siblings().removeClass("a_first");
        //if(index==1){
        //    $("#prev").show();
        //}
        //if(index==0){
        //    $("#prev").hide();
        //}
    });
    //$("#prev").click(function(){
    //    if(index!=0){
    //        index--;
    //    }else{
    //        $("#page_a").children("a:eq("+(1)+")").addClass("a_first").siblings().removeClass("a_first");
    //    }
    //    $(".sit2:eq("+(index)+")").addClass("sit1").siblings().removeClass("sit1");
    //    $("#page_a").children("a:eq("+(index+1)+")").addClass("a_first").siblings().removeClass("a_first");
    //    if(index==1){
    //        $("#prev").show();
    //    }
    //    if(index==0){
    //        $("#prev").hide();
    //    }
    //});
})());



