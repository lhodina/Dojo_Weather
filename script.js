
var temps = document.querySelectorAll(".temp");
console.log('temps :', temps);

function removeMessage() {
    var message = document.querySelector("#annoying-footer");
    message.remove();
}


function convertTemps() {
    console.log("CH-CH-CH-CHAAAN-GES");
    var currentScale = document.querySelector("#current-scale");
    var currentScaleVal = currentScale.value;
    console.log('currentScaleVal :', currentScaleVal);
    console.log('currentScaleVal[1] :', currentScaleVal[1]);
    console.log(currentScaleVal[1] === 'C');
    console.log(currentScaleVal[1] === 'F');
    var scale = currentScaleVal[1];

    for (var i=0; i < temps.length; i++) {
        var temp = temps[i];
        console.log(temp);
        var num = Number(temp.innerText);
        console.log("num:", num);
        console.log(typeof num);
        if (scale === 'F') {
            //Convert to F
            // (C * 9/5) + 32 = F
            num = num * (9/5) + 32;
        } else if (scale === 'C') {
            // Convert to C
            // (F - 32) * 5/9 = C
            num = (num - 32) * 5/9;
        }
        num = Math.round(num);
        console.log("converted num?", num);
        temp.innerText = num;
    }

}
