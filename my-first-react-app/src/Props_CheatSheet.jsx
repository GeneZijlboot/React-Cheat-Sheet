function Button({text = "Google Button!", color =  "green", fontSize = 30, handleClick}) {

  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  };

  return (
    <button onClick={() => handleClick("https://www.google.com/")} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function PropsCheatSheet() {
  //this is how to render data from function to function goddamn !
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} /> 
      <Button text="Click me!" color="blue" fontSize={20} /> 
      <Button text="Dont Click me!" color="red" fontSize={50} /> 
      <Button text="Click me!" color="green" fontSize={20} /> 
    </div>
  )
}

let counter = 0;

function incrementCounter(){
  counter = counter + 1;
  renderState();
}

function renderState(){
  console.log(counter);
}

setInterval(function () {
  incrementCounter();
}, 1000);

//JSX --> JAVASCRIPT XML
//Reminder on how to use props