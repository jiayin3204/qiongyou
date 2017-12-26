/**
 * Created by Administrator on 2017/10/7.
 */
function my$(id) {
    return document.getElementById(id);
}

//注册页面手机号
var zze1 = /^\d{11}$/;
checkInput(my$("zhuce_in1"),zze1);

function checkInput(input,reg) {
    input.onblur=function () {
        if(reg.test(this.value)){
            my$("zhuce_kb1_sp1").style.display="none";
            my$("zhuce_in1").style.borderColor="#a9a9a9";
        }else{
            my$("zhuce_kb1_sp1").style.display="block";
            my$("zhuce_in1").style.borderColor="red";
        }
    };
}

//图片验证码正则
var zze2 = /^[0-9a-zA-Z]{4}$/;
checkInput2(my$("zhuce_in2"),zze2);
function checkInput2(input,reg) {
    input.onblur=function () {
        if(reg.test(this.value)){
            my$("zhuce_kb1_sp2").style.display="none";
            my$("zhuce_in2").style.borderColor="#a9a9a9";
        }else{
            my$("zhuce_kb1_sp2").style.display="block";
            my$("zhuce_in2").style.borderColor="red";
        }
    };
}

//短信验证码正则
var zze3 = /^[0-9]{4}$/;
checkInput3(my$("zhuce_in3"),zze3);
function checkInput3(input,reg) {
    input.onblur=function () {
        if(reg.test(this.value)){
            my$("zhuce_kb1_sp3").style.display="none";
            my$("zhuce_in3").style.borderColor="#a9a9a9";
        }else{
            my$("zhuce_kb1_sp3").style.display="block";
            my$("zhuce_in3").style.borderColor="red";
        }
    };
}
//用户名正则
var zze4 = /^[0-9a-zA-Z\u4e00-\u9fa5]{3,15}$/;
checkInput4(my$("zhuce_in4"),zze4);
function checkInput4(input,reg) {
    input.onblur=function () {
        if(reg.test(this.value)){
            my$("zhuce_kb1_sp4").style.display="none";
            my$("zhuce_in4").style.borderColor="#a9a9a9";
        }else{
            my$("zhuce_kb1_sp4").style.display="block";
            my$("zhuce_in4").style.borderColor="red";
        }
    };
}

//密码正则
var zze5 = /^[\W0-9a-zA-Z]{8,16}$/;
checkInput5(my$("zhuce_in5"),zze5);
function checkInput5(input,reg) {
    input.onblur=function () {
        if(reg.test(this.value)){
            my$("zhuce_kb1_sp5").style.display="none";
            my$("zhuce_in5").style.borderColor="#a9a9a9";
        }else{
            my$("zhuce_kb1_sp5").style.display="block";
            my$("zhuce_in5").style.borderColor="red";
        }
    };

}
//验证码图片切换
my$("zhuce_yzim_im").onclick=function(){
    var num=parseInt(Math.random()*10+1);
    this.src='images/captcha'+num+'.png';
}