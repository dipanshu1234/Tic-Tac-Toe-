let currentPlayer = "";
let boxesItem = ["","","","","","","","",""];
let winningPosition=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let playerInfo = document.querySelector('.player-info');
let btn = document.querySelector('.new-game-btn');
let boxes = document.querySelectorAll('.box');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');
let box8 = document.querySelector('.box8');
let box9 = document.querySelector('.box9');
function init(){
    currentPlayer="X";
    boxesItem = ["","","","","","","","",""];
    playerInfo.innerText = `Current Player: ${currentPlayer}`;
    btn.classList.add('unactive')
    boxes.forEach(function(num){
        num.innerText="";
        num.classList.remove('green');
    })
    
}
init();
function switchPlayer(){
    if(currentPlayer=="X"){
        currentPlayer="O"
        playerInfo.innerText =`Current Player:${currentPlayer}`
        
    }
    else{
        currentPlayer="X"
        playerInfo.innerText =`Current Player:${currentPlayer}`
    }
}
function checkWin(){
    winner="";
    winningPosition.forEach(function(num){
        if(boxesItem[num[0]]!="" && boxesItem[num[1]]!=""&&boxesItem[num[2]]!=""){
            if((boxesItem[num[0]] == boxesItem[num[1]]) &&(boxesItem[num[1]] == boxesItem[num[2]])){
                if(boxesItem[num[0]] =="X"){
                    winner="X"
                    
                    boxes[num[0]].classList.add('green');
                    boxes[num[1]].classList.add('green');
                    boxes[num[2]].classList.add('green');
                    
                    
                }
                else{
                    winner="O"
                    boxes[num[0]].classList.add('green');
                    boxes[num[1]].classList.add('green');       
                    boxes[num[2]].classList.add('green');
                    
                }
            }
        }
        if(winner!=""){
            playerInfo.innerText = `Winner: ${winner}`;
            btn.classList.remove('unactive');
            
            return;
            
        }
        else{
            let total = 0;
            for(let i =0;i<boxesItem.length;i++){
                if(boxesItem[i]!=""){
                    total++;
                }
            }
            if(total==9){
                playerInfo.innerText = `Match Tied`;
                btn.classList.remove('unactive');
            }
        }
    })
}
function handleClick(index){
    if(boxesItem[index]==""){
    if(index == 0){
        box1.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 1){
        box2.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 2){
        box3.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 3){
        box4.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 4){
        box5.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 5){
        box6.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 6){
        box7.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 7){
        box8.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    if(index == 8){
        box9.innerText= currentPlayer;
        boxesItem[index] = currentPlayer;
    }
    switchPlayer();
    checkWin();

}
}
boxes.forEach(function(num,index){
    num.addEventListener('click',function(){
        handleClick(index);
    })
})
btn.addEventListener('click',init);