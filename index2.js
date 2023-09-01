function gTokg(){
    let num1 = Number(document.getElementById("num1").value);
    let result = (num1 * 100);
     let num2 = document.getElementById("num2");
     num2.value = result;
 }

function KtoC(){
    let num1 = Number(document.getElementById("num1").value);
    let result = (num1 - 273.15);
    let num2 = document.getElementById("num2");
    num2.value = result;
}

function CtoF(){
    let num1 = Number(document.getElementById("num3").value);
    let result = (num1 * 9/5) + 32;
    let num2 = document.getElementById("num4");
    num2.value = result;
}

function FtoK(){
    let num1 = Number(document.getElementById("num5").value);
    let result = (num1 - 32) * 5/9 + 273.15;
    let num2 = document.getElementById("num6");
    num2.value = result;
}

function Clear(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}

function Clear2(){
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("result").value = "";
}

function Clear3(){
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    document.getElementById("result").value = "";
}