let per=document.querySelector("#per")
let total=document.querySelector("#total")
let result=document.querySelector("#result")
function DoCalculation(){
    let p=parseFloat(per.value)
    let t=parseFloat(total.value)
    if(isNaN(p))
    {
        p=0
    }
    if(isNaN(t)){
        t=0
    }
    let percentage =(t*p)/100
    result.value=percentage
}
per.addEventListener("keyup",DoCalculation)
total.addEventListener("keyup",DoCalculation)