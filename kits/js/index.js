/**
 * Created by sks on 2017/9/26.
 */
//ͷ������
My$("txt_a").onmouseover = function(){
    My$("txt").style.opacity = "1";

};
My$("txt_a").onmouseout = function(){
    My$("txt").style.opacity = "0";
};
((function(){
    var com = My$("com");
    var community_none2 = My$("community_none2");
    var shopping2 = My$("shopping2");
    var shopping_none2 = My$("shopping_none2");
    var reserve2 = My$("reserve2");
    var reserve_none2 = My$("reserve_none2");
//����
    com.onmouseover = function(){
        community_none2.style.display = "block";
        //community_none2.style.animation = "move "+ 3+"s";
        community_none2.onmouseover = function(){
            community_none2.style.display = "block";
        };
        community_none2.onmouseout = function(){
            community_none2.style.display = "none";
        };
    };
    com.onmouseout = function(){
        community_none2.style.display = "none";
    };
    var spanObj = community_none2.getElementsByTagName("span");
    for(var i = 0;i<spanObj.length;i++){
        spanObj[i].style.top = 18+i*32+"px";
        spanObj[i].style.left = "16px";
    }
//�����̳�
    shopping2.onmouseover = function(){
        shopping_none2.style.display = "block";
        shopping_none2.onmouseover =function(){
            shopping_none2.style.display = "block";
        };
        shopping_none2.onmouseout =function(){
            shopping_none2.style.display = "none";
        };
    };
    shopping2.onmouseout = function(){
        shopping_none2.style.display = "none";
    };
    var spanObj1 = shopping_none2.getElementsByTagName("span");
    for(var i = 0;i<spanObj1.length;i++){
        spanObj1[i].style.top = 18+i*32+"px";
        spanObj1[i].style.left = "16px";
    }
//Ԥ��
    reserve2.onmouseover = function(){
        reserve_none2.style.display = "block";
        reserve_none2.onmouseover =function(){
            reserve_none2.style.display = "block";
        };
        reserve_none2.onmouseout =function(){
            reserve_none2.style.display = "none";
        };
    };
    reserve2.onmouseout = function(){
        reserve_none2.style.display = "none";
    };
    var spanObj2 = reserve_none2.getElementsByTagName("span");
    for(var i = 0;i<spanObj2.length;i++){
        spanObj2[i].style.top = 18+i*32+"px";
        spanObj2[i].style.left = "16px";
    }
})());
//�ֲ�ͼ
((function(){
    var nav_bom_carousel = My$("nav_bom_carousel");
    var ulObj = nav_bom_carousel.getElementsByTagName("ul")[0];
    var olObj = nav_bom_carousel.getElementsByTagName("ol")[0];
//СԲ��
    var liObj = olObj.getElementsByTagName("li");
//ÿ��ͼƬ
    var list = My$("carousel_none").getElementsByTagName("li");
    var index = 0;
//���Ŀ��
    var carouselWidth = nav_bom_carousel.getElementsByTagName("div")[0].offsetWidth;
    console.log(carouselWidth);
//����ÿ��СԲ��
    for(var i = 0;i<liObj.length;i++){
        liObj[i].setAttribute("index",i);
        liObj[i].onclick = Carousel;
    }
    function Carousel(){
        //���ÿ��СԲ�������ʽ
        for(var j = 0;j<liObj.length;j++){
            liObj[j].className = "";
        }
        index = this.getAttribute("index");
        if(index==0){
            ulObj.style.left = 0;
        }
        animate(ulObj,-index*carouselWidth);
        this.className = "current";
    }
//�Զ�����
    var timeId = setInterval(function(){
        index++;

        for(var i = 0;i<liObj.length;i++){
            liObj[i].className = "";
        }
        if(index==5){
            index=0;
            ulObj.style.left = 0;
        }
        animate(ulObj,-index*carouselWidth);
        liObj[index].className = "current";
    },1500);
//����ͼƬλ��ֹͣ��ʱ��
    nav_bom_carousel.onmouseover = function(){
        clearInterval(timeId);
    };
    nav_bom_carousel.onmouseout = function(){
        timeId = setInterval(function() {
            index++;

            for (var i = 0; i < liObj.length; i++) {
                liObj[i].className = "";
            }
            if (index == 5) {
                index = 0;
                ulObj.style.left = 0;
            }
            animate(ulObj, -index * carouselWidth);
            liObj[index].className = "current";
        },1500);
    };
})());
//���ν����°벿
//����
My$("Asia").onmouseover = function(){
    My$("Asia").style.backgroundColor = "#ebebeb";
    My$("continent_none").style.display = "block";
    My$("continent_none").onmouseover = function(){
        My$("continent_none").style.display = "block";
    };
    My$("continent_none").onmouseout = function(){
        My$("continent_none").style.display = "none";
    };
};
My$("Asia").onmouseout = function(){
    My$("Asia").style.backgroundColor = "#f6f6f6";
    My$("continent_none").style.display = "none";
};
//ŷ��
My$("Europe").onmouseover = function(){
    My$("Europe").style.backgroundColor = "#ebebeb";
    My$("continent_none_Europe").style.display = "block";
    My$("continent_none_Europe").onmouseover = function(){
        My$("continent_none_Europe").style.display = "block";
    };
    My$("continent_none_Europe").onmouseout = function(){
        My$("continent_none_Europe").style.display = "none";
    };
};
My$("Europe").onmouseout = function(){
    My$("Europe").style.backgroundColor = "#f6f6f6";
    My$("continent_none_Europe").style.display = "none";
};
//����
My$("N_America").onmouseover = function(){
    My$("N_America").style.backgroundColor = "#ebebeb";
    My$("America_none").style.display = "block";
    My$("America_none").onmouseover = function(){
        My$("America_none").style.display = "block";
        (function(){
            var America_none = My$("America_none");
            var ulObj = My$("uu");
            var AmericaWidth = America_none.offsetWidth;
            var index = 0;
            var btn2 = America_none.getElementsByTagName("input")[1];
            console.log(My$("btn2"));
            btn2.onclick = function(){
                index++;
                console.log(index);
                animate(ulObj,-index*AmericaWidth);
                console.log("kkk");
            };
        })();
    };
    My$("America_none").onmouseout = function(){
        My$("America_none").style.display = "none";
    };
};
My$("N_America").onmouseout = function(){
    My$("N_America").style.backgroundColor = "#f6f6f6";
    My$("America_none").style.display = "none";
};
//�����е����ťʱ��תҳ��

//����
My$("S_America").onmouseover = function(){
    My$("S_America").style.backgroundColor = "#ebebeb";
    My$("S_America_block").style.display = "block";
    My$("S_America_block").onmouseover = function(){
        My$("S_America_block").style.display = "block";
    };
    My$("S_America_block").onmouseout = function(){
        My$("S_America_block").style.display = "none";
    };
};
My$("S_America").onmouseout = function(){
    My$("S_America").style.backgroundColor = "#f6f6f6";
    My$("S_America_block").style.display = "none";
};
//������
My$("Oceania").onmouseover = function(){
    My$("Oceania").style.backgroundColor = "#ebebeb";
    My$("Oceania_none2").style.display = "block";
    My$("Oceania_none2").onmouseover = function(){
        My$("Oceania_none2").style.display = "block";
    };
    My$("Oceania_none2").onmouseout = function(){
        My$("Oceania_none2").style.display = "none";
    };
};
My$("Oceania").onmouseout = function(){
    My$("Oceania").style.backgroundColor = "#f6f6f6";
    My$("Oceania_none2").style.display = "none";
};
//����
My$("Africa").onmouseover = function(){
    My$("Africa").style.backgroundColor = "#ebebeb";
    My$("Africa_block").style.display = "block";
    My$("Africa_block").onmouseover = function(){
        My$("Africa_block").style.display = "block";
    };
    My$("Africa_block").onmouseout = function(){
        My$("Africa_block").style.display = "none";
    };
};
My$("Africa").onmouseout = function(){
    My$("Africa").style.backgroundColor = "#f6f6f6";
    My$("Africa_block").style.display = "none";
};
//�ϼ�
My$("Antarctic").onmouseover = function(){
    My$("Antarctic").style.backgroundColor = "#ebebeb";
    My$("Antarctic_block").style.display = "block";
    My$("Antarctic_block").onmouseover = function(){
        My$("Antarctic_block").style.display = "block";
    };
    My$("Antarctic_block").onmouseout = function(){
        My$("Antarctic_block").style.display = "none";
    };
};
My$("Antarctic").onmouseout = function(){
    My$("Antarctic").style.backgroundColor = "#f6f6f6";
    My$("Antarctic_block").style.display = "none";
};
//��־
My$("Magazine").onmouseover = function(){
    My$("Magazine").style.backgroundColor = "#ebebeb";
    My$("Magazine_block").style.display = "block";
    My$("Magazine_block").onmouseover = function(){
        My$("Magazine_block").style.display = "block";
    };
    My$("Magazine_block").onmouseout = function(){
        My$("Magazine_block").style.display = "none";
    };
};
My$("Magazine").onmouseout = function(){
    My$("Magazine").style.backgroundColor = "#f6f6f6";
    My$("Magazine_block").style.display = "none";
};
//ר��
My$("special").onmouseover = function(){
    My$("special").style.backgroundColor = "#ebebeb";
    My$("special_block").style.display = "block";
    My$("special_block").onmouseover = function(){
        My$("special_block").style.display = "block";
    };
    My$("special_block").onmouseout = function(){
        My$("special_block").style.display = "none";
    };
};
My$("special").onmouseout = function(){
    My$("special").style.backgroundColor = "#f6f6f6";
    My$("special_block").style.display = "none";
};
//�й��ڵ�
My$("china").onmouseover = function(){
    My$("china").style.backgroundColor = "#ebebeb";
    My$("china_block").style.display = "block";
    My$("china_block").onmouseover = function(){
        My$("china_block").style.display = "block";
    };
    My$("china_block").onmouseout = function(){
        My$("china_block").style.display = "none";
    };
};
My$("china").onmouseout = function(){
    My$("china").style.backgroundColor = "#f6f6f6";
    My$("china_block").style.display = "none";
};
//�ڵ���
((function(){
    var liObj = document.getElementById("im").getElementsByTagName("li");
    console.log(liObj);
    for(var i = 0;i<liObj.length;i++){
        var aObj = liObj[i].getElementsByTagName("a")[0];
        aObj.onmouseover = function(){
            this.getElementsByTagName("div")[0].style.display = "block";
        };
        aObj.onmouseout = function(){
            this.getElementsByTagName("div")[0].style.display = "none";
        };
    }
})());
//ҳ��ѡ��
((function(){
    var dvObj = document.querySelectorAll(".sit2");
    var aObj = My$("page_a").getElementsByTagName("a");
    var index = 0;
    for(var i = 0;i<aObj.length-2;i++){
        aObj[i].setAttribute("index",i);
        //ע�����¼�
        aObj[i].onclick = function(){
            for(var j = 0;j<aObj.length-2;j++){
                aObj[j].className = "";
                this.className = "a_first";
            }
            index = this.getAttribute("index");
            for(var k = 0;k<dvObj.length;k++){
                dvObj[k].className = "sit2";
            }
            dvObj[index].className = "sit1";
        };
    }
    My$("a_last2").onclick = function(){
        if(index>=0&&index<3){
            index++;
        }else{
            return;
        }
        console.log(index);
        for(var i = 0;i<dvObj.length-1;i++){
            dvObj[i].className = "sit2";
        }
        for(var j = 0;j<aObj.length-1;j++){
            aObj[j].className = "";
        }
        aObj[index].className = "a_first";
        dvObj[index].className = "sit1";
    };
})());

