let dps = document.getElementById("dps");
let dpcost = document.getElementById("dpcost");
let points = document.getElementById("points")

const result = document.getElementById("result")
const genExp = document.getElementById("genPowerExp")
const commExp = document.getElementById("commonExp")

const calculateTime = () => {
    const cost = new Decimal(dpcost.value);
    const speed = new Decimal(dps.value);
    const timeInSeconds = cost.div(speed);
    const timeInHours = timeInSeconds.div(3600);

    result.innerHTML = "Time in hours: " + timeInHours.toFixed(2);
}


const calculateLabPoints = () => {
    let currPoints = points.value;
    let genExpPoints = 0;
    let commExpPoints = 0;

    for(let i = 1;i <= currPoints;i++){
        if(i % 5 == 0){       
            genExpPoints++;
        }else{
            commExpPoints++;
        }
    }
    
    genExp.innerHTML = "Points in gen power exponent: " + genExpPoints
    commExp.innerHTML = "Points in common exponent: " + commExpPoints
}
