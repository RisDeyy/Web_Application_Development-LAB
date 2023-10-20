function getMaxValue1() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    var maxValue = 0;
    if(num1 > num2 && num1 > num3){
        maxValue = num1;
    }

    if (num2 > num1 & num2 > num3){
        maxValue = num2;
    }

    if (num3 > num1 && num3 > num2){
        maxValue = num3;
    }

    document.getElementById("result1").innerHTML = "La valeur maximale est : " + maxValue;
}

function getMaxValue2() {
    var input = document.getElementById("numbers").value;
    var numArray = input.split(",").map(Number);

    var maxValue = Math.max.apply(null, numArray);
    document.getElementById("result2").innerHTML = "La valeur maximale est : " + maxValue;
}

function convertToHoursMinutes() {
    var num = parseInt(document.getElementById("num").value);
    var hours = Math.floor(num / 60);
    var minutes = num % 60;

    var result = hours + " heures et " + minutes + " minutes";
    document.getElementById("result3").innerHTML = "Le résultat de la conversion est : " + result;
}

function getFirstAndLastLetter() {
    var str = document.getElementById("inputString").value;
    var firstLetter = str.charAt(0);
    var lastLetter = str.charAt(str.length - 1);
    document.getElementById("result4").innerHTML = "Première lettre : " + firstLetter + ", Dernière lettre : " + lastLetter;
}
