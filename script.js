//save hidden to delete
let hidden = document.getElementById('hidden');
let destroyInput=document.getElementById('destroyInput');
//save hidden
let saveHTML = document.querySelector('#hidden')
hidden.style.display="none"
document.getElementById('hideStats').style.display="none"
let endgame=false;
console.log(saveHTML);
let gameMatrix=[
    ['','',''],
    ['','',''],
    ['','','']
]
let arr = document.getElementsByClassName('box')
let counter=0
let currentPlayer = false
let playerOne
let playerTwo
console.log(playerOne)
let winner
let save;
let temp
let check=false
let clrGameBoard
let gameBoard = document.getElementsByClassName('box')
let scoreP1=0
let scoreP2=0
let getBg
let clrOne
let clrTwo

var timer = setInterval(function () {
    var marker = document.getElementById('marker');
    marker.style.visibility = (marker.style.visibility == 'hidden' ? '' : 'hidden');
}, 900);


function settings() {
    playerOne=document.getElementById('nameOne').value
    playerTwo=document.getElementById('nameTwo').value
    if(playerOne==''){
        playerOne="Player One"
    }if(playerTwo==''){
        playerTwo="Player Two"
    }
    getBg=document.getElementById('getBg').value
    clrOne=document.getElementById('clrOne').value
    clrTwo=document.getElementById('clrTwo').value

    //gameBoardColor
    clrGameBoard = document.getElementById('clrGameBoard').value
    console.log(clrGameBoard)
    startGame()
}


//skip startGame()-settingMenu
function skip() {
    winner=''
    document.getElementById('winner').innerHTML=''
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[i].length; j++) {
            gameMatrix[i][j]=''
        }
    }
    for (let i = 1; i <= 9; i++) {
        document.getElementById('box'+i).innerHTML=''
    }
    endgame=false
    currentPlayer = true;
}

function startGame() {
    hidden.style.display="block"
    destroyInput.style.display="none"
    console.log(getBg)
    console.log(clrOne)
    console.log(clrGameBoard)
    colrizeGameboard()

    getBG()    
}



function colrizeGameboard() {
    for (let i = 0; i < gameBoard.length; i++) {
       gameBoard[i].style.borderColor = clrGameBoard
    } 

}


function showStats() {
    document.getElementById('hideStats').style.display="block"
    hidden.style.display="none"
    document.getElementById('statsOne').innerHTML=`<h3 style="text-align:center;">${playerOne}</h3>`
    +`<h3 style="text-align:center; ">${scoreP1}</h3>`
    +`<h3 style="text-align:center;">${clrOne}</h3>`
    document.getElementById('statsTwo').innerHTML=`<h3 style="text-align:center;">${playerTwo}</h3>`
    +`<h3 style="text-align:center;">${scoreP2}</h3>`
    +`<h3 style="text-align:center;">${clrTwo}</h3>`
}

function resetStats() {
    document.getElementById('hideStats').style.display="none"
    scoreP1=0
    clrOne=''
    scoreP2=0
    clrTwo=''
    playerOne=''
    playerOne=''
    destroyInput.style.display="block"
    resetGame()
}


function getBG() {
    switch (getBg) {
        case 'galaxyDecent.png':
            document.body.style.backgroundImage=`url(./imgs/${getBg})`
            break;
        case 'galaxyAnimated.gif':
            document.body.style.backgroundImage=`url(./imgs/${getBg})`
            break;
        case 'animatedStars.gif':
            document.body.style.backgroundImage=`url(./imgs/${getBg})`
            break;
        case 'clouds.png':
            document.body.style.backgroundImage=`url(./imgs/${getBg})`
            break;
        case 'forest.jpg':
            document.body.style.backgroundImage=`url(./imgs/${getBg})`
            break;
    }
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById('box'+i).innerHTML=''
    }
    endgame=false
    currentPlayer = true;
    winner = ''
    clrOne=''
    clrTwo=''
    destroyInput.style.display="block"
    hidden.style.display="none"
    document.getElementById('winner').innerHTML=""
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[i].length; j++) {
            gameMatrix[i][j]=''
        }
    }
    console.log(gameMatrix)
}

function getUserInput(i,j,id){
temp = document.getElementById(id)
if(endgame==false){
    if(gameMatrix[i][j]==''){
        if(currentPlayer == false){
            temp.innerHTML='x'
            if(clrOne=='#000000'){
                temp.style.color='#ffffff'
            }else{
                temp.style.color=clrOne
            }
            
            gameMatrix[i][j] = "x"
            currentPlayer = true;
            checkWinner()
        }else if(currentPlayer == true){
            temp.innerHTML='o'
            if(clrTwo=='#000000'){
                temp.style.color='#ffffff'
            }else{
                temp.style.color=clrTwo
            }
            gameMatrix[i][j] = "o"
            currentPlayer = false;
            checkWinner()
        }
        console.log(gameMatrix[i][j]);
        console.log(gameMatrix)
            }
        }
    }

    

function checkWinner() {
        //x|x|x-->
        //x|x|x-->
        //x|x|x-->
        if(gameMatrix[0][0] == 'x' && gameMatrix[0][1]=='x' && gameMatrix[0][2]=='x' ){
            endgame=true
            winner=playerOne
            scoreP1++;
        }else if(gameMatrix[1][0]=='x' && gameMatrix[1][1]=='x' && gameMatrix[1][2]=='x' ){
            endgame=true
            winner=playerOne
            scoreP1++;
        }else if(gameMatrix[2][0]=='x' && gameMatrix[2][1]=='x' && gameMatrix[2][2]=='x' ){
            endgame=true
            winner= playerOne
            scoreP1++;
        }
         //o|o|o-->
         //o|o|o-->
         //o|o|o-->
        else if(gameMatrix[0][0]=='o' && gameMatrix[0][1]=='o' && gameMatrix[0][2]=='o' ){
            endgame=true
            winner=playerTwo
            scoreP2++;
        }else if(gameMatrix[1][0]=='o' && gameMatrix[1][1]=='o' && gameMatrix[1][2]=='o' ){
            endgame=true
            winner=playerTwo
            scoreP2++;
        }else if(gameMatrix[2][0]=='o' && gameMatrix[2][1]=='o' && gameMatrix[2][2]=='o' ){
            endgame=true
            winner=playerTwo
            scoreP2++;
        }
         //o|o|o:down/up
         //o|o|o:down/up
         //o|o|o:down/up
        else if(gameMatrix[0][0]=='o' && gameMatrix[1][0]=='o' && gameMatrix[2][0]=='o' ){

            endgame=true
            winner=playerTwo
            scoreP2++;
        }else if(gameMatrix[0][1]=='o' && gameMatrix[1][1]=='o' && gameMatrix[2][1]=='o' ){
            endgame=true
            winner=playerTwo
            scoreP2++;
        }else if(gameMatrix[0][2]=='o' && gameMatrix[1][2]=='o' && gameMatrix[2][2]=='o' ){
            endgame=true
            winner=playerTwo
            scoreP2++;
        }
         //x|x|x:down/up
         //x|x|x:down/up
         //x|x|x:down/up
         else if(gameMatrix[0][0]=='x' && gameMatrix[1][0]=='x' && gameMatrix[2][0]=='x' ){
            endgame=true
            winner=playerOne
            scoreP1++;
        }else if(gameMatrix[0][1]=='x' && gameMatrix[1][1]=='x' && gameMatrix[2][1]=='x' ){
            endgame=true
            winner=playerOne
            scoreP1++;
        }else if(gameMatrix[0][2]=='x' && gameMatrix[1][2]=='x' && gameMatrix[2][2]=='x' ){
            endgame=true
            winner=playerOne
            scoreP1++;
        }
         //x| |x 
         // |x| 
         //x| |x
         else if(gameMatrix[0][0]=='x' && gameMatrix[1][1]=='x' && gameMatrix[2][2]=='x' ){
            endgame=true
            winner=playerOne
            scoreP1++;
        }else if(gameMatrix[0][2]=='x' && gameMatrix[1][1]=='x' && gameMatrix[2][0]=='x' ){
            endgame=true
            winner=playerOne
            scoreP1++;
        }
         //o| |o 
         // |o| 
         //o| |o
         else if(gameMatrix[0][0]=='o' && gameMatrix[1][1]=='o' && gameMatrix[2][2]=='o' ){
            endgame=true
            winner = playerTwo
            scoreP2++;
        }else if(gameMatrix[0][2]=='o' && gameMatrix[1][1]=='o' && gameMatrix[2][0]=='o' ){
            endgame=true
            winner = playerTwo
            scoreP2++;
        }
    if(winner == playerOne ){
        document.getElementById('winner').innerHTML = playerOne+" won!";
        endgame=true
    }if(winner == playerTwo){
        document.getElementById('winner').innerHTML = playerTwo+" won!";
        endgame=true
    }
    }