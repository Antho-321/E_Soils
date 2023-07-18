let idnumber=document.getElementById("id_number");
var params = new URL(document.location).searchParams;
var param1 = params.get("x");
var valores=param1.split(",");
console.log("TESTINNNGGGG: "+valores[5]);

idnumber.addEventListener("input",function(){
    if(idnumber.value==valores[5]){
        let submit=document.getElementById("submit");
        submit.disabled=false;
    }else{
        submit.disabled=true;
    }
});