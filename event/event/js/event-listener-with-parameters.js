let elUsername = document.getElementById('username'); 
let elMsg      = document.getElementById('feedback'); 

//매개변수로 받아서 값 수정하기
function checkUsername(minLength) {  //minLength에 5 들어감                 
  if (elUsername.value.length < minLength) {           
    elMsg.innerHTML = '이름은 ' + minLength + ' 글자 이상이어야 합니다';
  } else {                                  
    elMsg.innerHTML = '';                             
  }
}
//매개변수를 받아야하기때문에 중간에 함수처리
//function() -> 익명함수 : 순서를 지킨다.
elUsername.addEventListener('blur', function() {       
  checkUsername(5);                                   
}, false);
