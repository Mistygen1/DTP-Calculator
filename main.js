let dps = document.getElementById("dps");
let dpcost = document.getElementById("dpcost");
let points = document.getElementById("points")

const result = document.getElementById("result")
const genExp = document.getElementById("genPowerExp")
const commExp = document.getElementById("commonExp")

const calculateTime = () => {
    const timeInHouers = (dpcost.value / dps.value)/60/60;
    result.innerHTML = "Time in houers: " + timeInHouers
}

const calculateLabPoints = () => {
    let currPoints = parseInt(points.value);
    let genExpPoints;
    let commExpPoints

    for(let i = 1;i <= currPoints;i++){
        if(i % 5){
            genExpPoints++;
        }
        commExpPoints++;
    }
    genExp.innerHTML = "Points in gen power exponent: " + genExpPoints
    commExp.innerHTML = "Points in common exponent: " + commExpPoints
}
