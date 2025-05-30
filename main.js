let dps = document.getElementById("dps");
let dpcost = document.getElementById("dpcost");

const result = document.getElementById("result")

const calculateTime = () =>{
    const timeInHouers = (dpcost.value / dps.value)/60/60;
    result.innerHTML = "Time in houers: " + timeInHouers
}