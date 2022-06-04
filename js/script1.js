
let container=document.querySelector('.container');
// console.log(container);
container.addEventListener('mousemove',showColor);

function showColor(e){
    
    let val=e.target;
    val.style.backgroundColor=`rgba(${e.offsetX},${e.offsetY},90,0.2)`;
}

document.addEventListener('DOMContentLoaded',getTask);

// let editTask=document.getElementById('edit');
// editTask.addEventListener('mouseover',changeColor);

let errorName=document.getElementById('errorName');

let username = document.getElementById('name');

document.getElementById('name').addEventListener('blur',validateName);

document.getElementById('Email').addEventListener('blur',validateEmail);

document.getElementById('address').addEventListener('blur',validateAddress);

document.getElementById('addInfo').addEventListener('submit',insert);

let errorEmail=document.getElementById('errorEmail');

let userEmail = document.getElementById('Email');

let errorAddress=document.getElementById('errorAddress');

let userAddress = document.getElementById('address');

let button = document.getElementById('btn');

let updateButton = document.getElementById('updateBtn');
updateButton.style.display='none';
updateButton.addEventListener('click',editData);

let regexname = '/^[A-Za-z]+$/';

let userData = {};

let userArray=[];

let data;

let gender;

gender = document.querySelector("input[name='gender']:checked");

let len;

var courses = document.getElementsByName("course");

let age;

age = document.getElementById("age");

function changeColor(e){
    e.style.color='red';
}

function getTask(){

//   console.log(JSON.parse(localStorage.getItem(`task`)));
if(JSON.parse(localStorage.getItem('task')) !== null){
    userArray=JSON.parse(localStorage.getItem('task'));
    // console.log(userArray);
    len=userArray.length;
    // console.log(len);
}

for(let i=0;i<len;i++){
    table=`<tr>
        <td>${userArray[i].name}</td>
        <td>${userArray[i].email}</td>
        <td>${userArray[i].gender}</td>
        <td>${userArray[i].age}</td>
        <td>${userArray[i].course}</td>
        <td>${userArray[i].Address}</td>
        <td><a onclick="UpdtData(this)" style="color:red; cursor:pointer;" id="edit">Edit</a> <a onclick='deleteData(this)' style="color:red; cursor:pointer;">Delete</a></td>
        </tr>`;
       
        document.getElementById('tbl').innerHTML+=table;
}
// userArray.forEach(user=>{
//     for(let data in user){
//         // console.log(`${data} : ${user[data]}`);
//         table=`<tr>
//         <td>${userData.name}</td>
//         <td>${userData.email}</td>
//         <td>${userData.Address}</td>
//         </tr>`;
       
//         document.getElementById('tbl').innerHTML+=table;
//     }
// })


}

function validateName(e){
    // console.log(e.target.value);
if(username.value === ''){
   errorName.innerText='Pls Enter Your Name';
   errorName.style.color='red';
   username.focus();
   return false;
//    userData.name=username.value/;

}
else if(username.value.length <3 || username.value.length > 20){
    errorName.innerText="Pls Enter Your Name With in 3 to 20 character";
    errorName.style.color='red';
    username.focus();
    return false;
    // userData.name=username.value;
}

else if(!/^[a-zA-Z\s]+$/g.test(username.value)){
    errorName.innerHTML='Pls Enter only Characters';
    errorName.style.color='red';
    username.focus();
    return false;
    // userData=[];
}else{
    errorName.style.display='none';
    userData.name=username.value;
    return true;
    // userArray.push(userData);
}

console.log(userData);
}

function validateEmail(e){
    if(userEmail.value === ''){
        errorEmail.innerText='Pls Enter Your Email';
        errorEmail.style.color='red'; 
        userEmail.focus();
        return false;
        // userData=userData;
    }else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g.test(userEmail.value)){
        errorEmail.innerText='Pls Enter Your Email properly';
        errorEmail.style.color='red'; 
        userEmail.focus();
        return false;
    }
    else{
        errorEmail.style.display='none';
        userData.email=userEmail.value;
        // userData.push(userEmail.value);
        // userArray.push(userData);
        return true;
    }
    
    // console.log(userData);
}


function validateAddress(e){
    if(userAddress.value === ''){
        errorAddress.innerText='Pls Enter Your Address';
        errorAddress.style.color='red';
        userAddress.focus();
        return false
        // userData=userData;
     }else if(!/^[a-zA-Z0-9\s\,\''\-]*$/g.test(userAddress.value)){
        errorAddress.innerText='Pls Enter Your Address properly';
        errorAddress.style.color='red';
        userAddress.focus();
        return false
     }
     else{
         errorAddress.style.display='none';
         userData.Address=userAddress.value;
        //  userArray.push(userData);
        //  userData.push(userAddress.value);
        return true;
     }
    //  userData.push(userAddress.value);
     console.log(userData);
}

let table;

function insert(e){
    console.log(e);
    e.preventDefault();
    // userArray.push(userData);
    console.log(userArray);
    let checkName=validateName();
    let checkEmail=validateEmail();
    let checkAddress=validateAddress();

    if(checkName && checkEmail && checkAddress){
       userArray.push(userData);
    }else{
        userArray=userArray;
        button.setAttribute('disable')
        // button.disabled=true;
    }
    // e.preventDefault();

    if (document.querySelector("input[name='gender']:checked")) {
        gender = document.querySelector("input[name='gender']:checked").value;
        // console.log(gender);
        userData.gender = gender;
    } else {
        gender = "Not Selected";
    }
    
    age = age.options[age.selectedIndex].value
    userData.age = age;

console.log(userData);



    table=`<tr>
    <td>${userData.name}</td>
    <td>${userData.email}</td>
    <td>${userData.gender}</td>
    <td>${userData.age}</td>
    <td>not select</td>
    <td>${userData.Address}</td>
    <td><a onclick = 'UpdtData(this)' class='edit' id="edit" style="color:red; cursor:pointer;" >Edit</a> <a onclick='deleteData(this)' style="color:red; cursor:pointer;">Delete</a></td>
    </tr>`;
   
    document.getElementById('tbl').innerHTML+=table;

    insertLocalStorage(userArray);
    clearForm();
}
let updateUserData={};

let updateUserName=document.getElementById('name');
updateUserName.addEventListener('change',changedName);

let updateUserEmail=document.getElementById('Email');
updateUserEmail.addEventListener('change',changedEmail);

let updateUserAddress = document.getElementById('address');
updateUserAddress.addEventListener('change',changeAddress);

function changedName(){
    let changedUserName=updateUserName.value;
     updateUserData.name=changedUserName;
     console.log(changedUserName);
     return updateUserData;
}

function changedEmail(){
    let changedUserEmail=updateUserEmail.value;
    updateUserData.Email=changedUserEmail;
    console.log(changedUserEmail);
    return updateUserData;
}

function changeAddress(){
    let changedUserAddress=updateUserAddress.value;
    updateUserData.address=changedUserAddress;
    console.log(changedUserAddress);
    return updateUserData;
}

function UpdtData(user1){
    // console.log(e);

    // let user1 = document.getElementById('edit');
    let user2=user1.parentElement.parentElement;
    console.log(user2);

    let cntElm = user2.childElementCount;
    console.log(cntElm);

    username.value = user2.cells[0].innerText;

    userEmail.value = user2.cells[1].innerText;

    userAddress.value = user2.cells[5].innerText;

    age.value = user2.cells[3].innerText;

    let check=user2.cells[1].innerText;
    console.log(check);

    btn.style.display='none';
    updateButton.style.display='block';

    // let chng=changedValue();
    // console.log(chng);
     updateUserData.check=check;
     console.log(updateUserData.check);
    // return [chng,check];

    // if(button.value === 'Register'){
    //     button.value = 'Update';
    // }else if(button.value === 'Update'){
    //     button.value = 'Register';
    // }else{
    //     button.value = 'Register';
    // }

    
   
    // if(JSON.parse(localStorage.getItem('task')) !== null){
    //     userArray=JSON.parse(localStorage.getItem('task'));
    //     // console.log(userArray);
    //     len=userArray.length;
    //     console.log(len);
    //     // console.log(userArray[1].email);
    // }
    // // a.forEach(function(item, i) { if (item == 3452) a[i] = 1010; });
 
    // for( let i=0; i< len ;i++){
    //     if(userArray[i].email === check){
    //         console.log(userArray[i].email);
    //         console.log(i);
    //         userData.name = username.value;
    //         userData.email = userEmail.value;
    //         userData.gender =  document.querySelector("input[name='gender']:checked").value;
    //         userData.age = age.value;
    //         userData.Address = userAddress.value;
    //        updateInLocalStorage(userData,i,check);
    //        break;
    //      }else{
    //          console.log(userArray);
    //      }
    // }


    // gender.value = thd.parentElement.parentElement.cell[2].innerText;

    
    // console.log(check);
}
// let updateUserName=document.getElementById('name');
// updateUserName.addEventListener('change',changedValue);


function editData(e){
    // e.preventDefault();

    // let checkValue = UpdtData();
    // console.log(checkValue);
    let changedData;
    changedData=changedName();
    console.log(changedData);

    // changedData=changedEmail();
    // console.log(changedData);

    if(JSON.parse(localStorage.getItem('task')) !== null){
        userArray=JSON.parse(localStorage.getItem('task'));
        // console.log(userArray);
        len=userArray.length;
        console.log(len);
        // check=userArray[0].email;
    }
    // a.forEach(function(item, i) { if (item == 3452) a[i] = 1010; });
    //  console.log("userArray:",userArray);
    for( let i=0; i< len ;i++){

        if(userArray[i].email === changedData.check){
            console.log(userArray[i].email);
            console.log(i);
            userData.name = changedData.name;
            userData.email = changedData.Email;
            // userData.gender =  document.querySelector("input[name='gender']:checked").value;
            // userData.age = age.value;
            userData.Address = changedData.address;
           updateInLocalStorage(userData,i,userArray[i]);
        //    e.preventDefault();
           break;
         }else{
             console.log(userArray);
         }
    }
    
}

 function updateInLocalStorage(userDataValues,j,check1){
    
    console.log("userDataValues:",userDataValues);
    console.log("j:",j);
    console.log("check1",check1);
    if(JSON.parse(localStorage.getItem('task')) !== null){
        userArray=JSON.parse(localStorage.getItem('task'));
        // console.log(userArray);
        len=userArray.length;
        // console.log(len);
    }
    userArray.splice(j,1);
    userArray[j]=userDataValues;
    // getTask();
    localStorage.setItem('task',JSON.stringify(userArray));
     getTask();
    // console.log(localStorage.getItem('task'));
 }

function deleteData(th){
  let user = th.parentElement.parentElement;
  let check=th.parentElement.parentElement.cells[1].innerText;
  console.log(user);
  user.remove();

  removeFromLocalStorage(check);
}

function removeFromLocalStorage(userDat){
    console.log(userDat);
    if(JSON.parse(localStorage.getItem('task')) !== null){
        userArray=JSON.parse(localStorage.getItem('task'));
        // console.log(userArray);
        len=userArray.length;
        console.log(len);
    }

    for( let i=0; i< len ;i++){
        if(userArray[i].email === userDat){
            userArray.splice(i,1);
            localStorage.setItem('task',JSON.stringify(userArray));
         }else{
             console.log(userArray);
         }
    }
    
}

function insertLocalStorage(userData1){
    localStorage.setItem(`task`,JSON.stringify(userData1));
    // no++;
}

function clearForm(){
    document.getElementById('name').value='';
    document.getElementById('Email').value='';
    document.getElementById('address').value='';
    document.getElementsByName("gender").forEach(gender => {
    gender.checked = false;
    });

    document.getElementById("age").selectedIndex = 0;
    // localStorage.setItem(`data${no}`,json.stringify(userData));
    userData={};
}


