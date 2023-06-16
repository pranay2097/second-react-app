//HTML+JS=JSx
//putting the brain in html
//Styling :: color
//
function App() {
  //object literal
  let style = {background: "red", color: "white"};
  return (
    <>
      <h1 style={style}>Hello World</h1>
      {/**first curly brace represent js expression */}
      {/**second curly brace, its object literal */}
      <h1 style={{background: "blue", color: "yellow"}}>hello world</h1>

      {/**observation */}
      {/**style attributes becomes camelcase in nature */}
      {/**values are writing in double quotes */}
      {/**multiple properties are separated by comma */}
      <h1 style={{ backgroundColor: "green", color: "pink", padding: "8px"}}>Hello world</h1>
    </>
  );
}

export default App;
