/**
 * Created by sks on 2017/9/26.
 */
function My$(id){
    return document.getElementById(id);
}
//��ȡԪ�صĵ�ǰλ��,�ƶ�,ÿ���ƶ���������
// function animate(element,target) {
//     //ÿ�ε������������ʱ��������֮ǰ�ļ�ʱ��
//     clearInterval(element.setId);
//     element.setId=setInterval(function () {
//         //��ȡԪ�ص�ǰ��λ��
//         var current=element.offsetLeft;
//         //ÿ���ƶ�������
//         var step=(target-current)/10;
//         //�ж��ƶ��Ĳ���Ӧ�����������Ǹ���
//         step=step>0?Math.ceil(step):Math.floor(step);
//         //��ǰ��λ��=֮ǰ�ĵ�ǰλ��+�ƶ��Ĳ���
//         current=current+step;
//         element.style.left=current+"px";
//         if(target==current){
//             //�Ѽ�ʱ������
//             clearInterval(element.setId);
//         }
//     },20);
// }

