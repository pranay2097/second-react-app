//HTML+JS=JSx
//putting the brain in html
//Styling :: color
//external styling
import "./App.css";

/**
 * because 'class' is a keyword in js
 */
function App() {
  return (
    <>
      <h1 className="beautiful">Hello world</h1>
      <h1 style={{color: "red"}}>hello</h1>
    </>
  );
}

export default App;
