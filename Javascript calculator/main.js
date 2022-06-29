const display1E1 = docunment.querySelector('.display-1');
const display2E1 = docunment.querySelector('.display-2');
const tempResultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = documentSelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastoperation = '';
let haveDot = false;

numbersE1.forEach( number => {
    number.addEventListener('click', (e)=> {
        if( e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e. target.innerText;
        display2E1.innerText = dis2Num;
    })
});

operationE1.forEach( operation => {
    operation.addEventListener('click', (e)=>{
     if (!dis2Num) result;
     haveDot= false;
     const operationName = e.tarrget.innerText;
     if(dis1Num && dis2Num && lastOperation){
        mathOperation();
     }else{
        result = parseFloat(dis2Num);
     }
     clearVar(operationName);
     lastoperation = operationName;
     console.log(result);
     })
     });

     function clearVar (name = ''){
        dis1Num += dis2Num+ ' ' + name + ' ';
        display1E1.innerText = dis1Num;
        display2E1.innerText = '';
        dis2Num = '';
        tempResultE1.innerText = result;
    }

    function mathOperation(){
        if(lastOperation === 'X'){
            result = parseFloat(result) * parseFloat(dis2Num);
        }else if ( lastoperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
        }else if ( lastoperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
        }else if ( lastoperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
        }else if ( lastoperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
        }
    }

    equalE1.addEventListener('click', (e)=> {
        if( !dis1Num || !dis2Num ) return;
        haveDot = false;
        mathOperation();
        clearVar();
        display2E1.innerText = result;
        tempResultE1.innerText = '';
        dis2Num = result;
        dis1Num = '';
    });

    clearAllE1.addEventListener('click', (e) => {
        display1E1.innerText = '0';
        display2E1.innerText = '0';
        dis1Num = '';
        dis2Num = '';
        result = '';
        tempResultE1.innerText = '0';
    });

    clearLastE1.addEventListener('click', (e) => {
        display2E1.innerText = '';
        dis2Numv = '';
    });

    window.addEventListener('keydown', (e) => {
        if(
            e.key === '0' ||
            e.key === '1' ||
            e.key === '2' ||
            e.key === '3' ||
            e.key === '4' ||
            e.key === '5' ||
            e.key === '6' ||
            e.key === '7' ||
            e.key === '8' ||
            e.key === '9' ||
            e.key === '.' ||
        ){
        clickButtonE1(e.key);
       }else if(
            e.key === '*' ||
            e.key === '+' ||
            e.key === '-' ||
            e.key === '%'
        ){
            clickoperation(e.key);
        }
        });

        function clickButtonE1(key){
        numbersE1.forEach( button => {
            if(button.innerText === key){
                button.click();
            }
            })
        }
    function clickoperation(key){
        operationE1.forEach(button => {
           if(button.innerText === key){
                button.innerText ===key
                button.click();
            }
        })
    }
