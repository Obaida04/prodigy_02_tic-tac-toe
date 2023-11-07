let turn = "X";
let gameover = false;

// Function of change turn

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}


// Function for check for a win

const cheakWin =()=>{
 let boxtext = document.getElementsByClassName('boxtext');
 let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5 ,8],
    [0, 4, 8],
    [2, 4, 6],
 ]
  wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !== "") ){
       document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
       gameover = true
    }
  })
}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            cheakWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})


// add onclick listener to reset button

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false 
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
})