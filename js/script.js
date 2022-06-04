let container=document.querySelector('.container');
// console.log(container);
container.addEventListener('mousemove',showColor);

function showColor(e){
    
    let val=e.target;
    val.style.backgroundColor=`rgba(${e.offsetX},${e.offsetY},90,0.2)`;
}

// document.getElementById('name').addEventListener('blur',runEvent);

// document.getElementById('Email').addEventListener('blur',runEvent);

// let userGender=document.querySelectorAll('.gender');

// let userCourse=document.querySelectorAll('.course');

// document.querySelector('Select').addEventListener('change',runEvent);

// document.querySelector('textarea').addEventListener('blur',runEvent);

// let form=document.querySelector('#addInfo');

// let showData= document.querySelector('#userData');



// loadEventListner();

// function loadEventListner(){

//     form.addEventListener('submit',addData);
// }

// let arrData=[];

// function runEvent(e){
//     val=e.target.value;
//     console.log(val);
//     arrData.push(val);
//     console.log(arrData);
// }

//    let userName= document.getElementById('name');

//     let userEmail = document.getElementById('Email');
//     userEmail.addEventListener('focus',checkEarliar);

//     let textarea=document.querySelector('textarea');
//     textarea.addEventListener('focus',checkEarliarBoth);

//     function checkEarliarBoth(e){
//         if(userName.value === ''){
//             alert('Pls Enter userName first');
//         }
//         if(userEmail.value===''){
//             alert('pls Enter the mail id first');
//         }
//     }

    
//     function checkEarliar(e){
//         if(userName.value === '' ){
//             alert('pls Enter userName first');
//         }
//     }


// function addData(e){

//     // let userName = document.getElementById('name');

//     // let userEmail = document.getElementById('Email');
//     // userEmail.addEventListener('focus',checkEarliar);
//     // if(userName.value === ''){
//     //     alert('pls Enter userName');
//     // }
//     // function checkEarliar(e){
//     //     if(userName.value=)
//     // }
     
//     let sno=1;
//     showData.innerHTML=`<table>
//     <tr>
//         <th>CustId</th>
//         <th>CustName</th>
//         <th>Age</th>
//         <th>Designation</th>
//         <th>CustEmail</th>
//     </tr>
    
//     <tr>
        
//         <td>${sno}</td>
//         <td>${username}</td>
//         <td>${val}</td>
//         <td>${Address}</td>
//         <td>${userEmail}</td>
//     </tr>
//     </table>`


//     e.preventDefault();
// }





function insert(){

    var name=document.getElementById('name').value;
    var Email=document.getElementById('Email').value;
    var Address=document.getElementById('address').value;
    let userGender=document.querySelector('input[name="gender"]:checked');

    let td=document.createElement('td');
    let tabl=document.getElementById('tbl');

    if(userGender!== null){
      td.textContent=userGender.value;
      console.log(td);
      tabl.appendChild(td);
    }
    


    var table=`<tr>
        <td>${name}</td>
        <td>${Email}</td>
        <td>${Address}</td>
    </tr>`

    document.getElementById('tbl').innerHTML+=table;

    clearForm();

        e.preventDefault();

}

function clearForm(){
    document.getElementById('name').value='';
    document.getElementById('Email').value='';
    document.getElementById('address').value='';
}