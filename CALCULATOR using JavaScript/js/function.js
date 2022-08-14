let result = document.getElementById('result');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                result.innerText= '';
                break;
            case '⇐':
                if(result.innerText){
                result.innerText = result.innerText.slice(0, -1);
                }
                break;
            case '=':
                result.innerText = eval(result.innerText);
                break;
            default:
                result.innerText += e.target.innerText;
        }
    });
});