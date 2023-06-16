
function App(){
  let str = `hello universe`;
  let pi = 3.14;
  let active = true;
  let isUserLoggedIn = true;

  //JSX 
    return (
      <>
      <h1>Hello world</h1>
      <h1>str</h1>
      <h1>{str}</h1>
      <h1>{str.toUpperCase()}</h1>
      <h1>PI {pi} </h1>

      {/** this is comment */}
      {/** usage of boolean */}
      <h1>{active ? "morning" : "evening" }</h1>

      {/** most useful */}
      {active && <h1>afternoon</h1> }
      {active ? <h1>bye</h1> : <h1>tata</h1> }

      {/**if user logged in */}
      {isUserLoggedIn && <h1>welcome cdac</h1>}
      
      </>
    );
}
export default App;