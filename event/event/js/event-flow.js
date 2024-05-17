//이벤트 흐름
function showElement(){
    alert(this.innerHTML);
}
let el = {};

//innerHTML : 값을 인식하는 메서드 
//tectcontent : 안의 텍스트를 뽑아내는 메서드

//처리방식이 false인 경우 버블링
el = document.getElementById("list");
el.addEventListener('click',showElement,false);
//click이벤트 발생 ->showElement 호출 ->list의 innerHTML값을 보여라.

el = document.getElementById("item");
el.addEventListener('click',showElement,false);

el = document.getElementById("link");
el.addEventListener('click',showElement,false);

//부모를 타고와야지만 실행이 됨 > 효율적이지 못함
el = document.getElementById("list2");
el.addEventListener('click',showElement,true);

el = document.getElementById("item2");
el.addEventListener('click',showElement,true);

el = document.getElementById("link2");
el.addEventListener('click',showElement,true);




