document.getElementById('FirstNo').addEventListener('blur',validateFirstNo);
document.getElementById('secondNo').addEventListener('blur',validateSecondNo);

document.getElementById('Add').addEventListener('click',Addvalues);
document.getElementById('Sub').addEventListener('click',Subvalues);
document.getElementById('Mul').addEventListener('click',Mulvalues);
document.getElementById('Div').addEventListener('click',Divvalues);

var error1=document.getElementById('error1');

var error2=document.getElementById('error2');

var result=document.getElementById('result');


function validateFirstNo(){
    const FirstNo=document.getElementById('FirstNo');

    if(FirstNo.value===''){
        error1.innerHTML='Pls Enter a No';
        error1.style.color='red';
    }else if(FirstNo.value.length>6){
        error1.innerText='Pls Enter a Number less than 6 digit';
        error1.style.color='red';
    }else{
        error1.style.display='none';
    }

}

function validateSecondNo(){
    const secondNo=document.getElementById('secondNo');

    if(secondNo.value===''){
        error2.innerHTML='Pls Enter a No';
        error2.style.color='red';
    }else if(secondNo.value.length>6){
        error2.innerText='Pls Enter a Number less than 6 digit';
        error2.style.color='red';
    }else{
        error2.style.display='none';
    }

}

function sameData(){
    validateFirstNo();
    validateSecondNo();
    const val1=Number(document.getElementById('FirstNo').value);
    const val2=Number(document.getElementById('secondNo').value);
    const Arr=[val1,val2];
    return Arr;
}

function Addvalues(){
    const data=sameData();
    result.innerText=`Sum is ${data[0]+data[1]}`;
}

function Subvalues(){
    const data=sameData();
    result.innerText=`Subtraction is ${data[0]-data[1]}`;
}

function Mulvalues(){
    const data=sameData();
    result.innerText=`Sum is ${data[0]*data[1]}`;
}

function Divvalues(){
    const data=sameData();
    result.innerText=`Sum is ${data[0]/data[1]}`;
}