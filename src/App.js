//using object literal
function App(){
  let str = `hello universe`;
  let pi = 3.14;
  let active = true;
  let user = { id: 1, name: "pranay"};

  //JSX :: user interface
    return (
      <>
      <h1>Hello world</h1>
      <h1>str</h1>
      <h1>{str}</h1>
      <h1>{str.toUpperCase()}</h1>
      <h1>PI {pi} </h1>
      <h1>{user.name}</h1>
      <h1>ID: {user.id}  Name: {user.name}</h1>
      
      </>
    );
}
export default App;