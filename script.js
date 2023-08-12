var grow = 60
let tbox = document.querySelector("#timebox")
let hbox = document.querySelector("#hitbox")
let hero = document.querySelector("#hero")
let sbox = document.querySelector("#scorebox")

function countDown(){
    setInterval(()=> {
        if (grow >= 1 ) {
            grow--;
            tbox.innerHTML = `${grow}`
            console.log(grow)
        }else{
            gameOver();
        }
    }, 1000);
}

function hitNum(){
    let hit = Math.floor(Math.random()*10);
    hbox.innerHTML = `${hit}`
}

function makeBubble(){
    hero.innerHTML = "";
    for (let i = 0; i < 119; i++) {
        let ran = Math.floor(Math.random()*10);
        hero.innerHTML += `<div id="bubble">${ran}</div>` 
    }
}

function scoreCalc(){
    let score = 0;
    hero.addEventListener("click",function(dets){
        if (dets.target.textContent === hbox.innerHTML) {
            score += 10
            sbox.innerHTML =`${score}`
            makeBubble();
            hitNum();
        }
    })
}

function gameOver(){
    if (grow === 0) {
        console.log("true")
        hero.innerHTML = ""
        hero.innerHTML = "<h1>Game Over</h1>"
    }
}

countDown();
hitNum();
makeBubble();
scoreCalc();