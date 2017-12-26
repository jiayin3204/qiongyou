/**
 * Created by sks on 2017/9/26.
 */
function My$(id){
    return document.getElementById(id);
}
//获取元素的当前位置,移动,每次移动多少像素
// function animate(element,target) {
//     //每次调用这个函数的时候先清理之前的计时器
//     clearInterval(element.setId);
//     element.setId=setInterval(function () {
//         //获取元素当前的位置
//         var current=element.offsetLeft;
//         //每次移动的像素
//         var step=(target-current)/10;
//         //判断移动的步数应该是正数还是负数
//         step=step>0?Math.ceil(step):Math.floor(step);
//         //当前的位置=之前的当前位置+移动的步数
//         current=current+step;
//         element.style.left=current+"px";
//         if(target==current){
//             //把计时器清理
//             clearInterval(element.setId);
//         }
//     },20);
// }

