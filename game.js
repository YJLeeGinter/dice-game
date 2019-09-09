function Dictionary (){
    this.imageCordinate = '0';
    this.one = '0';
    this.two = '-150px';
    this.three = '-300px';
    this.four= '-450px';
    this.five = '-600px';
    this.six = '-750px';    
}

let dictionaryArr = [];
for(let i = 0; i < 2; i++){
    dictionaryArr.push(new Dictionary());
}

let doImgSprites = function (obj, str){
    switch (obj.imageCordinate){
        case obj.one : obj.imageCordinate = obj.two;
        break;
        case obj.two : obj.imageCordinate = obj.three;
        break;
        case obj.three : obj.imageCordinate = obj.four;
        break;
        case obj.four : obj.imageCordinate = obj.five;
        break;
        case obj.five : obj.imageCordinate = obj.six;
        break;
        case obj.six : obj.imageCordinate = obj.one;
        break;
        }
        document.querySelector(str).style.background = 'url(diceimg.png)' + obj.imageCordinate +' 0';
}

let interval1;
let interval2;

const startBtn = document.querySelector('#start1');
startBtn.addEventListener('click', function (){
    stopBtn.disabled = false;
    stopBtn2.disabled = false;
    startBtn.disabled = true;
    message.innerHTML = '';
    interval1 = setInterval(()=>{
            doImgSprites(dictionaryArr[0], '#computer1');
            }, 100);
    interval2 = setInterval(()=>{
           doImgSprites(dictionaryArr[1], '#computer2');
        }, 100);       
        
    } 
 );

let diceData = [];
let message = document.createElement('h1');
document.querySelector('.message').appendChild(message);

let checkDiceValue = function (){

    if(diceData[0] && diceData[1]){
        if(diceData[0] === diceData[1]){
            message.style.color ='red';
            message.innerHTML = 'You won!';
           initStopBtn();
   
        }else{
           message.style.color ='blue';
           message.innerHTML = 'You lost!';
            initStopBtn();
        }
    }
   }  

let initStopBtn = function (){
    startBtn.disabled = false;
    diceData[0] = 0;
    diceData[1] = 0;

}

const stopBtn = document.querySelector('#stop1');
stopBtn.disabled = true;
stopBtn.addEventListener('click', ()=>{
        stopBtn.disabled = true;
        clearInterval(interval1);
        diceData[0] = dictionaryArr[0].imageCordinate;
        checkDiceValue();
    
});

const stopBtn2 = document.querySelector('#stop2');
stopBtn2.disabled = true;

stopBtn2.addEventListener('click', ()=>{
    stopBtn2.disabled = true;
    clearInterval(interval2);
    diceData[1] = dictionaryArr[1].imageCordinate;
    checkDiceValue();
});
