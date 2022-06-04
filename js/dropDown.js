let cntry = document.getElementById('country');
cntry.addEventListener('click',showCntry);

let stateList = document.getElementById('state');
stateList.addEventListener('click',showState);

let cityList = document.getElementById('city');

let cntryArr = ["India", "Japan" , "Russia"];

let lenCntry = cntryArr.length;
// console.log(lenCntry);

for(let i = 0;i< lenCntry ; i++){
    cntry.innerHTML += `<option value=${cntryArr[i]}>${cntryArr[i]}</option>`;
}

let stateArray =[["UP","Uk","DL"],
                 ["TK","HK"],
                 ["SP","GH","TH"]];

let district = [[
    ["Lk","kn","mz"],['Rk','KN','Hd'],['Dw','NZ','UT']
],
     [],
[]]

let selctcntry;
let selectState;

function showCntry(e){
    selctcntry = cntry.options[cntry.selectedIndex].value;
    console.log(selctcntry);

    let stateArr1 = stateArray[0];
    if(selctcntry === 'India'){
        let state1Len =stateArray[0].length;
        let stateArr1 = stateArray[0];
        for(let j=0 ;j< state1Len ;j++ ){
            stateList.innerHTML += `<option value=${stateArr1[j]}>${stateArr1[j]}</option>`;
        }
        showState();
    }else

    if(selctcntry === 'Japan'){
        let state2Len =stateArray[1].length;
        let stateArr2 = stateArray[1];
        for(let j=0 ;j< state2Len ;j++ ){
            stateList.innerHTML += `<option value=${stateArr2[j]}>${stateArr2[j]}</option>`;
        }
        showState();
    }else


    if(selctcntry === 'Russia'){
        let state3Len =stateArray[2].length;
        let stateArr3 = stateArray[2];
        for(let j=0 ;j< state3Len ;j++ ){
            stateList.innerHTML += `<option value=${stateArr3[j]}>${stateArr3[j]}</option>`;
        }
        showState();
    }else{
    console.log(typeof(selctcntry));
    stateList.innerHTML='';
}
}
function showState(){
    selectState = stateList.options[stateList.selectedIndex].value;
        // console.log(selectState);
        if(selectState === 'UP'){
            let district1Len = district[0][0].length;
            let districtArr1 = district[0];
            console.log(districtArr1); 
            for(let k=0 ; k < district1Len ; k++){
                cityList.innerHTML += `<option value=${districtArr1[0][k]}>${districtArr1[0][k]}</option>`;
            }
        }
        if(selectState === 'UK'){
            let district2Len = district[0][1].length;
            let districtArr1 = district[0];
            console.log(districtArr1); 
            for(let k=0 ; k < district1Len ; k++){
                cityList.innerHTML += `<option>${districtArr1[0][k]}</option>`;
            }
        }
        if(selectState === 'DL'){
            let district1Len = district[0][2].length;
        }
}


//   let stateJapanArr = ['Tokyo','osaka'];
//   let stateRussiaArr = ['Moscow','saint petersberg'];




function random_function()
{
    var a=document.getElementById("input").value;
    if(a==="INDIA")
    {
        var arr=["Rajasthan","Delhi",'uttrakhand','uttarpradesh'];
    }
    else if(a==="USA")
    {
        var arr=["Washington","Texas","New York"];
    }
 
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
        // string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
        string += `<option value="${arr[i]}">${arr[i]}</option>`
    }
    document.getElementById("output").innerHTML=string;
}
