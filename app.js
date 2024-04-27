let valueReciever = (val)=>{
document.querySelector("#display").value += val;
}


let calculation = ()=>{
    let result = eval(document.getElementById('display').value);
    document.getElementById("display").value=result;

}


let clearFun = ()=>{
    document.getElementById("display").value = "";
}