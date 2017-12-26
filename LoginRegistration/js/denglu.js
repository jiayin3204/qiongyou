/**
 * Created by Administrator on 2017/10/3.
 */

function my$(id) {
    return document.getElementById(id);
}
//登录框以及快捷登录点击事件
my$("dlr").onclick=function(){
    my$("center_kjr").style.display="block";
}
my$("center_kjr_dll").onclick=function(){
    my$("center_kjr").style.display="none";
}
//正则表达式

//手机号/邮箱/用户名的正则
var ze1 = /^(\d{11})|([0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2})|([0-9a-zA-Z\u4e00-\u9fa5]{3,15})$/;
checkInput1(my$("ct_l_in1"), ze1);
function checkInput1(input,reg) {
    input.onblur=function () {
        if(reg.test(this.value)){
            my$("denglu_kb1_sp1").style.display="none";
            my$("ct_l_in1").style.borderColor="#a9a9a9";

        }else{
            my$("denglu_kb1_sp1").style.display="block";
            my$("ct_l_in1").style.borderColor="red";
        }
    };
}

//登录密码的正则部分

var ze2 = /^[\WA-Za-z0-9_-]{8,16}$/;
checkInput2(my$("ct_l_in2"),ze2);
function checkInput2(input,reg) {
    input.onblur=function () {
        if(reg.test(this.value)){
            my$("denglu_kb1_sp2").style.display="none";
            my$("ct_l_in2").style.borderColor="#a9a9a9";
        }else{
            my$("denglu_kb1_sp2").style.display="block";
            my$("ct_l_in2").style.borderColor="red";
        }
    };

}
// 右侧快捷登录栏手机号部分
var ze3 = /^\d{11}$/;
checkInput(my$("zhuce_in1"),ze3);

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
// 右侧快捷登录栏图片验证码部分
var ze4 = /^[0-9a-zA-Z]{4}$/;
checkInput3(my$("zhuce_in2"),ze4);
function checkInput3(input,reg) {
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

//右侧快捷登录栏短信验证码部分
var ze5 = /^[0-9]{4}$/;
checkInput4(my$("zhuce_in3"),ze5);
function checkInput4(input,reg) {
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

//验证码图片切换
my$("zhuce_yzim_im").onclick=function(){
    var num=parseInt(Math.random()*10+1);
    this.src='images/captcha'+num+'.png';
}

//登录按钮事件





