//JSX = JS + HTML
//If a function return html, this becomes a user defined tag
//<App></App>
//<App/>
//compare with predefined tag
//h1, p, li
//why master case convention
//for pre defoned tag :: lowercase :: <h1>
//for useer define :: mastercase:: <App>

function App(){
  return <h1>Hello world</h1>;
}

//JSX = JS + HTML/XML
//IF YOUR FUNCTION RETURN HTML
//CONVENTION :: START YOUR FUNCTION NAME IN CAPITAL LETTER
function Sum(){
  return <h1>100</h1>;
}

export default App;