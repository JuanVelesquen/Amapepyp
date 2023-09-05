
const trackContainer = document.querySelector(".carousel__track-container");
const left = document.querySelector(".carousel__button-left");
const right = document.querySelector(".carousel__button-right");
const interval = 3500; 
let pos = 0;
const porcentaje = 25
let timerId = null;

function resetInterval() {
    clearInterval(timerId);
    startInterval();
}

function startInterval(){
    timerId = setInterval(() => {
        if (pos > -2)
        {
            pos--;
            operation = pos * porcentaje;
            trackContainer.style.transform = ('transform', 'translateX(' + operation + '%)');
            
        }
        else
        {
            pos = 0;
            trackContainer.style.transform = ('transform', 'translateX(0%)');
        }
    }, interval);
}

left.addEventListener("click", () => {
    
   if (pos < 0)
   {
       pos++;
       operation = pos * porcentaje
       trackContainer.style.transform =('transform', 'translateX(' + operation + '%)');
    }
    else
    {
        pos = -2;
        trackContainer.style.transform = ('transform', 'translateX(-50%)');
    }
    resetInterval()
})

right.addEventListener("click", ()=> {
    
    if (pos > -2)
    {
        
        pos--;
        operation = pos * porcentaje;
        trackContainer.style.transform = ('transform', 'translateX(' + operation + '%)');
    }
    else
    {
        pos = 0;
        trackContainer.style.transform = ('transform', 'translateX(0%)');
    }
    resetInterval()
    
})

