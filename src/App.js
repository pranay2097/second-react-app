//mixing js in the html
//mixing js in jsx
//data binding in html
//interpolation :: data binding in jsx
function App(){
  let str = `hello universe`;

  //JSX :: view :: user interface
  //mix html+js
    return (
      <>
      <h1>Hello world</h1>
      <h1>str</h1>
      <h1>{str}</h1>
      <h1>{str.toUpperCase()}</h1>

      {[1, 1, 1].map((item) => (
      <h1>Hello </h1>
      ))}
      
      </>
    );
}
export default App;