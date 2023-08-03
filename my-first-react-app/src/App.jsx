function Button(props) {

  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };

  return (
    <button style={buttonStyle}>{props.text}</button>
  )
}

export default function App() {
  //this is how to render data from function to function goddamn !
  return (
    <div>
      <Button text="Click me!" color="blue" fontSize={20} /> 
      <Button text="Dont Click me!" color="red" fontSize={50} /> 
      <Button text="Click me!" color="green" fontSize={20} /> 
      
    </div>
  )
}

//JSX --> JAVASCRIPT XML
//Reminder on how to use props