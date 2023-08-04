let counter = 0; 

setInterval(function () {
    incrementCounter();
}, 1000);

function incrementCounter(){
  counter = counter + 1;
  renderState();
}

export default function renderState(){
  console.log(counter);
}
