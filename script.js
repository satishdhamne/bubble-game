let rn;
let scr = 0;

function makeBubble() {
    let innerBtm = document.querySelector(".innerBtm")

    let clutter = ""

    for (let i = 0; i < 154; i++) {
        let num = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble" class="bubble">${num}</div>`
    }

    innerBtm.innerHTML = clutter;
}


function timerCount() {
    count = 30;
    function increment() {

        if (count > 0) {
            count--
            document.querySelector("#timerNum").textContent = count
        }
        else {
            clearInterval(interval)
            gameOver();
        }
    }
    let interval = setInterval(increment, 1000)
}


function hitNum() {
    rn = Math.floor(Math.random() * 10)
    document.querySelector("#hitNum").textContent = rn
}


function scoreNhit() {
    let innerBtm = document.querySelector(".innerBtm")
    innerBtm.addEventListener("click", function (e) {

        if (Number(e.target.textContent) === rn) {
            scr += 10
            document.querySelector("#scoreNum").textContent = scr
            makeBubble();
            hitNum();
        }
    })

}


function gameOver() {
    document.querySelector("#bubble").style.display = "none";
    document.querySelector(".innerBtm").innerHTML = `
                 <div> 
                     <h2> GAME OVER </h2>
                     <h1> SCORE : ${scr} </h1>
                 </div>`;
}


timerCount();
makeBubble();
hitNum();
scoreNhit()

