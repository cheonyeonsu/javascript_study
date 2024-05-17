function checkUsername(){
    let elMsg = document.getElementById('feedback');
    if(elUsername.value.length <5){
        elMsg.textContent = '이름은 다섯글자 이상으로 입력하세요';
    }else{
        elMsg.textContent = '';
    }
}

let elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);
                            //blur가 일어나면 checkUername호출
//html은 html이고 js는 js.                             