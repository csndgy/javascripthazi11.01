function adatBanyasz(){
    let a = document.getElementById("name").value;
    document.getElementById("a1").innerHTML = a;

    let b = document.getElementById("adress").value;
    document.getElementById("a2").innerHTML = b;

    let c = document.getElementById("tel").value;
    document.getElementById("a3").innerHTML =c;

}

function PureFruits(){
    document.getElementById("name").style.backgroundColor = "lightblue";
    document.getElementById("adress").style.backgroundColor = "lightblue";
    document.getElementById("tel").style.backgroundColor = "lightblue";
}

function Halvany(){
    document.getElementById("name").style.backgroundColor = "";
    document.getElementById("adress").style.backgroundColor = "";
    document.getElementById("tel").style.backgroundColor = "";
}