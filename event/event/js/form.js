//변수 한번에 선언 : 공간만 있고 이름은 없음 -> undefined
let elForm,elSelectPackage,elPackageHint,elTerms,elTermsHint; 
elForm          = document.getElementById('formSignup'); //id명이 formSignup를 elForm에 넣어라.
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     =document.getElementById('termsHint');

function packageHint(){
    let pack = this.options[this.selectedIndex].value;
    if(pack === 'monthly'){
        elPackageHint.innerHTML = '1년 패키지를 선택하시면 10불을 절약할 수 있습니다!';
    } else {
        elPackageHint.innerHTML = '탁월한 선택입니다!';
    }
}

function checkTerms(event){
    if(!elTerms.checked){ //false이면.
        elTermsHint.innerHTML = '사용권 계약에 동의해야 합니다.';
        //기본동작을 취소시킨다 : 동의하지 않으면 페이지 넘어가지 않도록.
        event.preventDefault(); 
    }
}
                     //이벤트 종류/함수 호출/흐름
elForm.addEventListener('submit',checkTerms,false);
elSelectPackage.addEventListener('change',packageHint,false);